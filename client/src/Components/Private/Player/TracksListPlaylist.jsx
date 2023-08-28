import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import { DefaultThumbnail } from "./DefaultThumbnail";
import { usePlayer } from "../../../Contexts/usePlayer";
import { TrackContext } from "../../../Contexts/TrackContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import Loading from "../../Loading.jsx";
import { AuthContext } from "../../../Contexts/AuthContext.jsx";

export default function TracksListPlaylist() {
	const { id } = useParams();
	const { fetchTracksByPlaylistId, deleteTrackFromPlaylist } =
		useContext(TrackContext);
	const { userPlaylists } = useContext(AuthContext);
	const { setCurrentMusic, currentMusic, setCurrentPlaylist } = usePlayer();
	const [tracksPlaylist, setTracksPlaylist] = useState([{status: "loading"}]);
	const [playlist, setPlaylist] = useState(null);

	async function fetchAndLogTracks() {
		try {
			const tracks = await fetchTracksByPlaylistId(id);
			setTracksPlaylist(tracks);
		} catch (err) {
			console.error(err);
		}
	}

	async function fetchAndLogPlaylist() {
		try {
			const playlist = await userPlaylists.find((playlist) => playlist.id === Number(id));
			setPlaylist(playlist);
		} catch (err) {
			console.error(err);
		}
	}

	const handleDeleteTrackFromPlaylist = async (playlistId, trackId) => {
		try {
			await deleteTrackFromPlaylist(playlistId, trackId, fetchAndLogTracks);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		(async () => {
			await fetchAndLogTracks();
			await fetchAndLogPlaylist();
		})();
	}, [id, userPlaylists]);

	if (tracksPlaylist[0]?.status === "loading") return <Loading />;
	return (
		<div className="md:w-1/2 sm:w-2/3 w-full px-4 py-6 mx-auto flex flex-col gap-4">
			<h1 className="sm:w-1/2 w-full bg-light text-gray-300 text-2xl flex justify-center font-semibold p-3 rounded-full mx-auto mb-8">
				{playlist?.name}
			</h1>
			{tracksPlaylist.map((track) => {
				const isPlaying = currentMusic.url === track.url;
				return (
					<div
						key={track.id}
						className={`${
							isPlaying ? " border-orange-400" : "border-transparent"
						} flex gap-2 text-xs relative transition-shadow duration-300 shadow-lg hover:shadow-none bg-light rounded-2xl overflow-hidden text-white border-2 border-dashed`}
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
						</div>
						<div
							onClick={() => {
								if (!isPlaying) {
									setCurrentMusic(track, true);
									setCurrentPlaylist(tracksPlaylist);
								}
							}}
							className="w-1/6 min-w-[75px] flex justify-center items-center text-3xl rounded-xl hover:text-purple-300 bg-black/10 cursor-pointer transition-colors duration-300"
						>
							{isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
						</div>
						<div
							onClick={() => handleDeleteTrackFromPlaylist(id, track.id)}
							className="w-1/8 min-w-[45px] flex justify-center items-center text-3xl bg-black/10 rounded-xl cursor-pointer"
						>
							<TrashIcon className="h-6 w-6 text-gray-400 hover:text-purple-300 hover:animate-spin " />
						</div>
					</div>
				);
			})}
			{tracksPlaylist.length === 0 && <p className="text-center text-gray-400">Aucune musique n'est présente dans cette playlist</p>
			}
		</div>
	);
}
