<?php

namespace App\Http\Controllers\Api;

use App\Models\Album;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        try {
            $albums = Album::with('tracks', 'styles')->get();
            return response()->json($albums);

        } catch (\Exception $e) {
            Log::error('AlbumController@index: ' . $e->getMessage());
            return response()->json($e->getMessage(), 404);
        }
    }

    public function show(Album $album): JsonResponse
    {
        try{
            $album->load('tracks', 'styles');
            return response()->json($album);
        }catch (\Exception $e) {
            Log::error('AlbumController@show: ' . $e->getMessage());
            return response()->json(['message : ' => 'Album not found'], 404);
        }
    }
}