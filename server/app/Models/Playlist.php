<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Playlist extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $fillable = ['name', 'user_id'];


    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    
    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function tracks(): BelongsToMany
    {
        return $this->belongsToMany(Track::class, 'playlists_tracks', 'playlist_id', 'track_id');
    }


}
