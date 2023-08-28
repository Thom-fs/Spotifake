<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * PROFIL
     * @return JsonResponse
     */
    public function profil(): JsonResponse
    {
        try
        {
            $userid = Auth::user()->id;
            $user = User::with('playlists')->findOrFail($userid);

            return response()->json(['user' => $user], 200);

        }catch(\Exception $e){
            Log::error('UserController@profil: ' . $e->getMessage());
            return response()->json($e->getMessage(), 400);
        }
    }
    /**
     * UPDATE PROFIL
     * @return JsonResponse
     */
    public function updateProfil(Request $request): JsonResponse
    {
        try
        {
            $userid = Auth::user()->id;
            $user = User::where('id', $userid)->findOrFail($userid);

            $data = $request->validate([
                'lastname' => 'string|required|min:3',
                'firstname' => 'string|required|min:3',
                'email' => [
                    'email',
                    'required',
                    Rule::unique('users')->ignore($user->id),
                ],
                'pseudo' => [
                    'string',
                    'required',
                    Rule::unique('users')->ignore($user->id),
                ],
            ]);

            // update the user
            $user->lastname = $data['lastname'];
            $user->firstname = $data['firstname'];
            $user->email = $data['email'];
            $user->pseudo = $data['pseudo'];
            $user->save();

            return response()->json(['user' => $user], 200);
        }catch(\Exception $e){
            Log::error('UserController@updateProfil: ' . $e->getMessage());
            return response()->json($e->getMessage(), 400);
        }
    }

    /**
     * Update user password
     */
    public function updatePassword(Request $request): JsonResponse
    {
        try
        {
            $userid = Auth::user()->id;
            $user = User::where('id', $userid)->findOrFail($userid);

            $data = $request->validate([
                'password' => 'required|min:8',
                'confirm_password' => 'required|same:password'
            ]);

            // update the password
            $user->password = bcrypt($data['password']);
            $user->save();

            return response()->json(['message' => 'le mot de passe a été modifié'], 200);
        }catch(\Exception $e){
            Log::error('UserController@updateProfil: ' . $e->getMessage());
            return response()->json($e->getMessage(), 400);
        }
    }
}