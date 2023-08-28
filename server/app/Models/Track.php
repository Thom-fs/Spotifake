<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Track extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function album(): BelongsTo
    {
        return $this->belongsTo(Album::class);
    }


    public function playlists(): BelongsToMany
    {
        return $this->belongsToMany(Playlist::class, 'playlists_tracks', 'track_id', 'playlist_id');
    }
}
