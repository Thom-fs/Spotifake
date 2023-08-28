<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Album extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function tracks(): HasMany
    {
        return $this->hasMany(Track::class);
    }

    public function styles(): BelongsToMany
    {
        return $this->belongsToMany(Style::class, 'album_styles');
    }
}
