import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import { DefaultThumbnail } from "./DefaultThumbnail";
import { usePlayer } from "../../../Contexts/usePlayer";
import { TrackContext } from "../../../Contexts/TrackContext";
import PlaylistSelector from "./PlaylistSelector.jsx";
import Loading from "../../Loading.jsx";
import { urlVerification } from "../../Utils/urlVerification";

export default function TracksListAlbum() {
  const { id } = useParams();
  const { getTrackByAlbumId, albums, tracks, isValidTimestamp, fetchNewUrl } =
    useContext(TrackContext);
  const { setCurrentMusic, currentMusic, setCurrentPlaylist } = usePlayer();
  const [showPlaylistSelector, setShowPlaylistSelector] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const album = albums.find((album) => album.id.toString() === id);

  const handleAddToPlaylist = (music) => {
    setShowPlaylistSelector(true);
    setSelectedMusic(music);
  };

  useEffect(() => {
    if (id) {
      const tracks = getTrackByAlbumId(id);
      setFilteredTracks(tracks);
    }
  }, [id, tracks]);

  if (!album || filteredTracks.length === 0) return <Loading />;
  return (
    <div className="flex md:flex-row flex-col">
      <div className=" md:w-1/2 w-full px-4 pr-2 py-6 flex flex-col items-center text-justify gap-4">
        <h1 className="lg:text-2xl md:text-lg font-bold text-gray-100">
          <span className="font-bold text-gray-400">Nom de l'album : </span>"{" "}
          {album.title} "
        </h1>
        <h2 className="lg:text-xl md:text-lg font-semibold text-gray-100">
          <span className="font-bold text-gray-400">Artiste : </span>
          {album.artist}
        </h2>
        <h3 className="lg:text-lg md:text-md font-semibold text-gray-100 lg:px-48">
          <span className="font-bold text-gray-400">Description : </span>
          {album.description}
        </h3>
        <h3 className="lg:text-lg md:text-md font-semibold text-gray-100">
          <span className="font-bold text-gray-400">Genre : </span>
          {album.styles[0].style}
        </h3>
        <h3 className="lg:text-lg md:text-md font-semibold text-gray-100">
          <span className="font-bold text-gray-400">Année : </span>
          {album.year}
        </h3>
      </div>
      <div className="md:w-1/2 w-full px-4 pl-2 py-6 flex flex-col gap-4">
        {filteredTracks.map((track) => {
          const isPlaying = currentMusic.url === track.url;
          return (
            <div
              key={track.id}
              className={`${
                isPlaying ? " border-primary" : "border-transparent"
              } flex gap-2 text-xs relative transition-shadow duration-300 shadow-lg hover:shadow-none bg-light rounded-2xl overflow-hidden text-gray-100 border-2 border-dashed`}
            >
              <div className="w-3/12 h-24">
                {track.thumbnail ? (
                  <img
                    className="rounded-lg h-full w-full object-cover"
                    alt={track.title}
                    src={track.thumbnail}
                  />
                ) : (
                  <DefaultThumbnail />
                )}
              </div>
              <div className="w-8/12 flex flex-col gap-2 justify-center">
                <h6 className="font-semibold text-sm">{track.title}</h6>
                <p className="text-xs text-gray-400">{track.duration}</p>
                <button
                  className="text-right text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold text-sm shadow-none focus:outline-none focus:ring-0 focus:shadow-none border-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToPlaylist(track);
                  }}
                >
                  Ajouter à une playlist
                </button>
              </div>
              <div
                onClick={() => {
                  if (!isPlaying) {
                    (async () => {
                      const playedTrack = await urlVerification(
                        track,
                        isValidTimestamp,
                        fetchNewUrl
                      );
                      setCurrentMusic(playedTrack, true);
                      setCurrentPlaylist(filteredTracks);
                    })();
                  }
                }}
                className="w-1/6 min-w-[75px] flex justify-center items-center text-3xl bg-black/10 hover:text-purple-300 rounded-xl cursor-pointer"
              >
                {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
              </div>
            </div>
          );
        })}
        <PlaylistSelector
          selectedMusic={selectedMusic}
          showPlaylistSelector={showPlaylistSelector}
          setShowPlaylistSelector={setShowPlaylistSelector}
          setSelectedMusic={setSelectedMusic}
        />
      </div>
    </div>
  );
}
