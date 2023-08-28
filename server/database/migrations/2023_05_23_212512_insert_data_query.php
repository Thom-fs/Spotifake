<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("
            INSERT INTO albums (title, artist, description, year, created_at, updated_at) VALUES
            ('Lemon Music', 'Lemon Music Studio', 'Lemon Music Studio''s first album.', '2015', NOW(), NOW()),
            ('Summer Sounds', 'Music Unlimited', 'This album is a collection of electro-pop summer sounds from Music Unlimited. It is a great album to listen to while working or studying.', '2020', NOW(), NOW()),
            ('Alex Grohl Greatest Hits', 'Alex Grohl', 'Greatest hits from Alex Grohl.', '2022', NOW(), NOW()),
            ('Sport Big Beat', 'Soul Prod Music', 'Sport Big Beat is an energetic single from Soul Prod Music. It is a great album to listen to while working out or playing sports.', '2019', NOW(), NOW()),
            ('The art of synth', 'Lucadi Alessandro', 'This single is the one of the best synthwave tracks.', '2020', NOW(), NOW()),
            ('The art of synth', 'Lucadi Alessandro', 'This single is the one of the best synthwave tracks.', '2020', NOW(), NOW()),
            ('Hard Big Beat', 'Qube Sounds', 'An electro single from Qube Sounds.', '2020', NOW(), NOW());
        ");

        DB::statement("
            INSERT INTO tracks (album_id, title, duration, file, created_at, updated_at) VALUES
            (1, 'Leva Eternity', '02:25', 'leva-eternity-149473.mp3', NOW(), NOW()),
            (1, 'Sunshine', '02:19', 'sunshine-108600.mp3', NOW(), NOW()),
            (1, 'To meet the light', '02:12', 'to-meet-the-light-108601.mp3', NOW(), NOW()),
            (1, 'Tomorrow', '02:24', 'tomorrow-114848.mp3', NOW(), NOW()),
            (2, 'Summer Night', '02:40', 'summer-nights-tropical-house-music-121570.mp3', NOW(), NOW()),
            (2, 'Tropical Summer', '02:36', 'tropical-summer-music-112842.mp3', NOW(), NOW()),
            (3, 'Energetic', '02:24', 'energetic-indie-rock-jump-112179.mp3', NOW(), NOW()),
            (3, 'Inspiring', '02:46', 'inspiring-motivational-rock-inspire-mesenses-111448.mp3', NOW(), NOW()),
            (3, 'Stomping', '01:59', 'stomping-rock-four-shots-111444.mp3', NOW(), NOW()),
            (4, 'Sport Big Beat', '04:48', 'sport-amp-big-beat-rock-trailer-4-ver-141001.mp3', NOW(), NOW()),
            (5, 'Sport Big Beat', '04:48', 'sport-amp-big-beat-rock-trailer-4-ver-141001.mp3', NOW(), NOW()),
            (6, 'Sport Big Beat', '04:48', 'sport-amp-big-beat-rock-trailer-4-ver-141001.mp3', NOW(), NOW()),
            (7, 'Hard Big Beat', '01:11', 'hard-big-beat-action-amp-sport-131292.mp3', NOW(), NOW());
        ");

            DB::statement("
            INSERT INTO styles (style, created_at, updated_at) VALUES
            ('pop', NOW(), NOW()),
            ('electro', NOW(), NOW()),
            ('rock', NOW(), NOW());
        ");

            DB::statement("
            INSERT INTO album_styles (album_id, style_id, created_at, updated_at) VALUES
            (1, 1, NOW(), NOW()), -- Album 1 (Lemon Music) has style 1 (pop)
            (2, 1, NOW(), NOW()), -- Album 2 (Summer Sounds) has style 1 (pop)
            (2, 2, NOW(), NOW()), -- Album 2 (Summer Sounds) has style 2 (electro)
            (3, 3, NOW(), NOW()), -- Album 3 (Alex Grohl Greatest Hits) has style 3 (rock)
            (4, 2, NOW(), NOW()), -- Album 4 (Sport Big Beat) has style 2 (electro)
            (5, 2, NOW(), NOW()), -- Album 5 (The art of synth) has style 2 (electro)
            (6, 2, NOW(), NOW()), -- Album 6 (The art of synth) has style 2 (electro)
            (7, 2, NOW(), NOW()); -- Album 7 (Hard Big Beat) has style 2 (electro)
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
