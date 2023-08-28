<?php

namespace App\Http\Controllers\Api;

use App\Models\Album;
use App\Models\Track;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class TrackController extends Controller
{
    public function play($albumId, $trackId): JsonResponse
    {
        try {
            //retrieve the album and track selected
            $album = Album::with('tracks')->findOrFail($albumId);
            $track = Track::where('album_id', $albumId)->findOrFail($trackId);

            //URI of the track in AWS S3

            // return response
            return response()->json([
                'album' => $album,
                'track' => $track
            ]);

        }catch (\Exception $e)
        {
            Log::error('TrackContoller@play' . $e->getMessage());
            return response()->json(['message : '=>'track not found'], 404);
        }
    }
}
