<?php

namespace App\Http\Controllers\Api;


use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Notifications\PasswordResetNotification;

class ResetPasswordController extends Controller
{
    /**
     * Function who send a mail to the user
     */
    public function  sendMail($user, $checkUserCodeExist)
    {
        // on notifie à l'utilisateur
        $user->notify(new PasswordResetNotification(
            $user,
            $checkUserCodeExist
        ));
    }

    /**
     * Function Who generate a code to reset password
     */
    public function  generateCode()
    {
        //on génère un jeton de réinitialisation de mot de passe aléatoire de 10 chiffres
        $passwordToken = str_pad(random_int(1,999999),6,'0',STR_PAD_LEFT);

        return $passwordToken;
    }

    /**
     * Function Who check is the reset password code is valid
     */
    public function checkCodeTime($checkUserCodeExist)
    {
        $codeTime = Carbon::parse($checkUserCodeExist->updated_at);
        $currentTime = Carbon::now();

        $isValidTimeCode = true;
        if ($codeTime->diffInMinutes($currentTime) > 10) {
            $isValidTimeCode = false;
        }
        return $isValidTimeCode;
    }

    /**
     * Function who save the token in the dataBase
     */
    public function saveToken($user, $passwordToken, $checkUserCodeExist)
    {
        if ($checkUserCodeExist === null) {
            $checkUserCodeExist = PasswordReset::create([
                'email' => $user->email,
                'token' => $passwordToken
            ]);
        } else {
            $checkUserCodeExist->token = $passwordToken;
            $checkUserCodeExist->save();
        }

        return $checkUserCodeExist;
    }

    /**
     * Function generate a code and send a notification by mail to the user
     */
    public function forgotPassword(Request $request): JsonResponse
    {

        //Filtre la requête pour chercher un utilisateur avec l'email correspondant à celui fourni dans la demande
        $user = User::where('email', $request->email)->first();

        if (!$user)
        {
            return response()->json(['message' => 'Invalid User Email'], 400);
        }

        // Generate code
        $passwordToken = $this->generateCode();

        //Check if no PasswordReset record is found for the user's email address
        //If no record is found, we create a new PasswordReset record with the user's email and the reset token
        //If a record has been found, update the reset token
        $checkUserCodeExist = PasswordReset::where('email', $user->email)->first();

        // Save code token to database
        $checkUserCodeExist = $this->saveToken($user, $passwordToken, $checkUserCodeExist);

        // Send mail notification to the user
        $this->sendMail($user, $checkUserCodeExist);

        return response()->json(['message' => 'Votre code vous a été envoyé par mail'], 200);
    }

    public function resetPassword(Request $request): JsonResponse
    {
        try {
            $data = $request->validate([
                'email' => 'email|required',
                'codeValidation' => 'required|string|size:6',
                'password' => 'required|min:8',
                'confirm_password' => 'required|same:password'
            ]);


            //Verification of the the user
            $user = User::where('email', $data['email'])->first();
            if ($user === null)
            {
                return response()->json(['message' => 'Les informations fournies ne sont pas correcte'], 400);
            }
            //verification of the user codeValidation
            $checkUserCodeExist = PasswordReset::where('email', $user->email)->first();

            $isValidTimeCode = $this->checkCodeTime($checkUserCodeExist);

            if(!$isValidTimeCode)
            {
                // Generate code
                $passwordToken = $this->generateCode();

                // Save code token to database
                $this->saveToken($user, $passwordToken, $checkUserCodeExist);

                // Send mail notification to the user
                $this->sendMail($user, $checkUserCodeExist);

                return response()->json(['message' => 'Votre code a expiré un nouveau code vous a été envoyé par mail']);
            }

            if ($checkUserCodeExist->token != $data['codeValidation'])
            {
                return response()->json(['message' => 'Les informations fournit ne sont pas correcte'], 400);
            }

            // Delete token user
            $user->tokens()->delete();

            // Create new user token
            $token = $user->createToken('token')->plainTextToken;

            // Delete old Code validation in Db
            $checkUserCodeExist->delete();

            $response['token'] = $token;
            $response['user'] = $user;

            // Update user password
            $user->password = bcrypt($data['password']);
            $user->save();

            return response()->json([
                'message' => 'Votre Mot de passe à été modifié',
                'data' => $response], 200);

        }catch (\Exception $e) {
            Log::error('ResetPasswordController@resetPassword: ' . $e->getMessage());
            return response()->json($e->getMessage(), 400);
        }
    }
}
