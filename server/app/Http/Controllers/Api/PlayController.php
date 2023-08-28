<?php

namespace App\Http\Controllers\Api;

use Aws\S3\S3Client;
use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Env;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;


class PlayController extends Controller
{

    /**
     * Send 1 temporaly URL song
     */
    public function sendTemporaryUrl(Track $track)
    {
        try {
            if (!$track){
                return response()->json(['message' => 'Musique inconnue'], 404);
            }

            $fileName = $track->file;
            $trackId = $track->id;
            $albumId= $track->album_id;
            $title= $track->title;
            $duration= $track->duration;
            $filePath = env('AWS_URL_S3');
            $url = $filePath.$fileName;

            $expiration = now()->addMinutes(30);
            $temporaryUrl = Storage::disk('s3')->temporaryUrl($fileName, $expiration);

            $response = (object) [
                'url' => $temporaryUrl,
                'fileName' => $fileName,
                'title' => $title,
                'id' => $trackId,
                'album_id' => $albumId,
                'expiration' => $expiration->timestamp,
                'duration'=> $duration
            ];

            return response()->json($response, 200);

        } catch (\Exception $e) {
            Log::error('PlayController@sendTemporaryUrl: ' . $e->getMessage());
            return response()->json($e->getMessage(), 500);
        }

    }

    /**
     * Send all temporaly URL songs
     */
    public function sendAllTemporaryUrls()
    {
        try {
            $tracks = Track::all();

            if ($tracks->isEmpty()) {
                return response()->json(['message' => 'Aucune musique trouvée'], 404);
            }

            $filePath = env('AWS_URL_S3');
            $responses = [];

            foreach ($tracks as $track) {
                $fileName = $track->file;
                $trackId = $track->id;
                $albumId = $track->album_id;
                $title= $track->title;
                $duration= $track->duration;
                $url = $filePath . $fileName;

                $expiration = now()->addMinutes(30);
                $temporaryUrl = Storage::disk('s3')->temporaryUrl($fileName, $expiration);

                $response = (object) [
                    'url' => $temporaryUrl,
                    'fileName' => $fileName,
                    'title' => $title,
                    'id' => $trackId,
                    'album_id' => $albumId,
                    'expiration' => $expiration->timestamp,
                    'duration'=> $duration
                ];

                $responses[] = $response;
            }

            return response()->json($responses, 200);

        } catch (\Exception $e) {
            Log::error('PlayController@sendAllTemporaryUrls: ' . $e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
