<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PlayController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AlbumController;
use App\Http\Controllers\Api\TrackController;
use App\Http\Controllers\Api\PlaylistController;
use App\Http\Controllers\Api\ResetPasswordController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/**
 * Public route
 */
Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

/**
 * Password reset routes
*/
Route::post('/forgot-password',[ResetPasswordController::class, 'forgotPassword']);
Route::post('/reset-password',[ResetPasswordController::class, 'resetPassword']);


/**
 * Route protected
 */
Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    /***
     * Logout user
     */
    Route::post('/logout', [AuthController::class, 'logout']);

    /**
     * User Profil
     */
    Route::get('/profil', [UserController::class, 'profil']);
    Route::put('/profil', [UserController::class, 'updateProfil']);
    Route::put('/profil/password', [UserController::class, 'updatePassword']);

    /**
     * Accueil
     */
    Route::get('/accueil', [AlbumController::class, 'index']);

    /**
     * Album
     */
    Route::get('/albums/{album}', [AlbumController::class, 'show']);

    /**
     * Playlist
     */
    Route::get('/playlists', [PlaylistController::class, 'index']);
    Route::get('/playlists/{playlistId}', [PlaylistController::class, 'show']);
    Route::post('/playlist', [PlaylistController::class, 'store']);
    Route::put('/playlist/{playlistId}', [PlaylistController::class, 'update']);
    Route::delete('/playlist/{playlistId}',[PlaylistController::class, 'destroy']);
    Route::post('/playlist/{playlistId}/track', [PlaylistController::class, 'addTrack']);
    Route::delete('/playlist/{playlist}/track/{track}',[PlaylistController::class, 'destroyTrack']);
    /**
     * Play S3
     */
    // Route::get('/music', [PlayController::class, 'getMusicFiles']);
    // 1 url
    Route::get('/tracks/{track}/play', [PlayController::class, 'sendTemporaryUrl']);
    // all urls
    Route::get('/tracks/play', [PlayController::class, 'sendAllTemporaryUrls']);

});
