<?php

namespace App\Http\Controllers\Api;

use App\Models\Track;
use App\Models\Playlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;


class PlaylistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $userId = Auth::user()->id;
            $playlists = Playlist::where('user_id', $userId)
            ->with('tracks')
            ->get();
            return response()->json($playlists);

        } catch (\Exception $e) {
            Log::error('PlaylistController@index: ' . $e->getMessage());
            return response()->json($e->getMessage(), 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        try {
            $userId = Auth::user()->id;

            $request->validate([
                "name"=>'Required|string|max:55'
            ]);

            $playlists = Playlist::where('user_id', $userId)->get();
            foreach ($playlists as $element) {
                if($request->name === $element->name) {
                    return response()->json(['message' => 'La playlist existe'], 404);
                }
            }

            $playlist = Playlist::create([
                'name'=>$request->name,
                'user_id'=>$userId
            ]);

            return response()->json($playlist->id, 201);

        } catch (\Exception $e) {
            Log::error('PlaylistController@store: ' . $e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show($playlistId)
    {
        try {
            $userId = Auth::user()->id;
            $playlist = Playlist::findOrFail($playlistId);
            if ($userId != $playlist->user_id) {
                return response()->json(['message' => 'Unauthorized'], 401);
            }

            $tracks = Track::whereHas('playlists', function ($query) use ($playlistId) {
                $query->where('playlist_id', $playlistId);
            })->get();

            $responses = [];

            foreach ($tracks as $track) {
                $fileName = $track->file;
                $trackId = $track->id;
                $albumId = $track->album_id;
                $title= $track->title;
                $duration= $track->duration;

                $expiration = now()->addMinutes(30);
                $temporaryUrl = Storage::disk('s3')->temporaryUrl($fileName, $expiration);

                $response = (object) [
                    'url' => $temporaryUrl,
                    'fileName' => $fileName,
                    'title' => $title,
                    'id' => $trackId,
                    'album_id' => $albumId,
                    'playlist_id' => $playlistId,
                    'expiration' => $expiration->timestamp,
                    'duration'=> $duration
                ];

                $responses[] = $response;
            }

            return response()->json($responses);

        } catch (\Exception $e) {
            Log::error('PlaylistController@show: ' . $e->getMessage());
            return response()->json(['message' => 'Playlist not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $playlistId)
    {
        try {
            $userId = Auth::user()->id;
            $playlist = Playlist::findOrFail($playlistId);
            $playlist->name = $request->input('name');
            if ($userId== $playlist->user_id) {
                $playlist->save();
            }

            return response()->json(["Playlist $playlist->name enregisrtrée"], 200);

        } catch (\Exception $e) {
            Log::error('PlaylistController@update: ' . $e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($playlistId)
    {
        try {
            $userId = Auth::user()->id;
            $playlist = Playlist::findOrFail($playlistId);

            if ($userId != $playlist->user_id) {
                return response()->json(['message' => 'Unauthorized'], 401);
            }

            $playlist->delete();

            return response()->json(["Playlist $playlist->name supprimée"], 200);

        } catch (\Exception $e) {
            Log::error('PlaylistController@destroy: ' . $e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Remove a track from playlist
     */
    public function destroyTrack(Playlist $playlist, Track $track)
    {
        try {
            $userId = Auth::user()->id;

            if ($userId != $playlist->user_id) {
                return response()->json(['message' => 'Unauthorized'], 401);
            }

            $checktrack = $playlist->tracks()->where('tracks.id', $track->id)->get();

            if ($checktrack->isEmpty()) {
                return response()->json(['message' => 'La chanson n\'existe pas dans la playlist'], 400);
            }

            $playlist->tracks()->detach($track);

            return response()->json(['message' => 'La chanson ' . $checktrack[0]->title . ' a été supprimée de la playlist avec succès'], 200);
        } catch (\Exception $e) {
            Log::error('PlaylistController@destroyTrack: ' . $e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }

    public function addTrack(Request $request, $playlistId)
    {
        try {
            $userId = Auth::user()->id;
            $playlist = Playlist::findOrFail($playlistId);

            if ($userId != $playlist->user_id) {
                return response(['erreur' => 'Non autorisé ', 401]);
            }

            $this->validate($request, [
                'track_id' => 'required', 'exists:tracks,id',
            ]);

            $trackId = $request->input('track_id');
            $track = Track::findOrFail($trackId);

            if ($playlist->tracks->contains($track)) {
                return response()->json(['message' => 'La musique existe déjà dans la playlist'], 422);
            }

            // Ajout la music à la playlist
            $playlist->tracks()->attach($trackId);
            return response()->json(['message' => 'La music a été ajoutée à la playlist.'], 200);

        } catch (\Exception $e) {
            Log::error('PlaylistController@addTrack: ' . $e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }
}
