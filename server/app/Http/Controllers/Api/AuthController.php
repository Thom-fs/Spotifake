<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * REGISTER
     *  @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        try {
            $data = $request->validate([
                'lastname' => 'string|required|min:3',
                'firstname' => 'string|required|min:3',
                'email' => 'email|required|unique:users,email',
                'password' => 'required|min:8',
                'pseudo' => 'string|required|unique:users,pseudo',
                'confirm_password' => 'required|same:password'
            ]);

            // create user
            $data['password'] = bcrypt($data['password']);
            $user = User::create($data);

            // handle response
            $response['token'] = $user->createToken('token')->plainTextToken;
            $response['user'] = $user;
            return response()->json($response, 201);
        } catch (\Exception $e) {
            Log::error('AuthController@register: ' . $e->getMessage());
            return response()->json($e->getMessage(), 400);
        }
    }

    /**
     * LOGIN
     *  @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        try {
            if (Auth::attempt([
                'email' => $request->email,
                'password' => $request->password
            ])) {
                $user = Auth::user();

                // handle response
                $response['token'] = $user->createToken('token')->plainTextToken;
                $response['user'] = $user;
                return response()->json($response, 200);
            }

            return response()->json('error', 400);
        } catch (\Exception $e) {
            Log::error('AuthController@login: ' . $e->getMessage());
            return response()->json($e->getMessage(), 400);
        }
    }

    /**
     *  LOGOUT
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        // Delete the authenticate user
        auth()->user()->tokens()->delete();
        return response()->json(['message' => 'L\'utilisateur a été déconnecté'], 200);
    }
}
