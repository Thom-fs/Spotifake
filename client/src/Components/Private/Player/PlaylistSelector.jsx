import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContext.jsx";
import { TrackContext } from "../../../Contexts/TrackContext.jsx";

export default function PlaylistSelector({
	showPlaylistSelector,
	setShowPlaylistSelector,
	selectedMusic,
	setSelectedMusic,
}) {
	const { user, fetchUser } = useContext(AuthContext);
	const { addTrackToPlaylist, createPlaylist } = useContext(TrackContext);
	const [showNewPlaylist, setShowNewPlaylist] = useState(false);
	const [newPlaylistName, setNewPlaylistName] = useState("");
	const [error, setError] = useState(null);

	const handlePlaylistSelect = (playlist) => {
		addTrackToPlaylist(selectedMusic.id, playlist.id);
		onClose();
	};

	const handleCreateNewPlaylist = async () => {
		try {
			const playlistId = await createPlaylist(newPlaylistName, fetchUser);
			await addTrackToPlaylist(selectedMusic.id, playlistId);
			console.log(
				"Nouvelle playlist créée et la chanson ajoutée à la playlist."
			);
			setShowNewPlaylist(false);
			setNewPlaylistName("");
		} catch (err) {
			setError(err.message);
		}
	};

	const onClose = () => {
		setShowPlaylistSelector(false);
		setSelectedMusic(null);
	};

	return (
		<>
			{showPlaylistSelector && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 cursor-default px-4">
					<div className="relative bg-light px-10 py-6 md:w-1/2 w-full max-h-[50vh] rounded-2xl">
						{!showNewPlaylist ? (
							<>
								<button
									className="absolute top-4 right-4"
									onClick={() => setShowPlaylistSelector(false)}
								>
									<XMarkIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
								</button>
								<h1 className="text-center font-bold text-gray-400 my-4">
									Ajouter " {selectedMusic?.title} " à une playlist :
								</h1>
								<div className="overflow-auto max-h-[35vh] items-center flex flex-col">
									{user.playlists.map((playlist) => (
										<div
											className="text-center font-semibold cursor-pointer mb-4 py-1 md:w-1/2 w-full hover:bg-gradient-to-b hover:from-primary/25 hover:to-secondary/50 rounded-full"
											key={playlist.id}
											onClick={() => handlePlaylistSelect(playlist)}
										>
											{playlist.name}
										</div>
									))}
								</div>
								<div
									className="text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold cursor-pointer"
									onClick={() => setShowNewPlaylist(true)}
								>
									Créer une nouvelle playlist
								</div>
							</>
						) : (
							<div className="flex flex-col h-full items-center justify-center">
								<div className="absolute top-4 right-4">
									<XMarkIcon
										className="w-6 h-6 text-gray-400 cursor-pointer"
										onClick={() => setShowNewPlaylist(false)}
									/>
								</div>
								<h1 className="text-center font-bold text-gray-400 my-4">
									Ajouter " {selectedMusic?.title} " à :
								</h1>
								<div className="relative w-2/3">
									<label
										htmlFor="newPlaylistName"
										className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
									>
										Nom de la playlist
									</label>
									<input
										type="text"
										name="newPlaylistName"
										id="newPlaylistName"
										className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
										placeholder=""
										value={newPlaylistName}
										onChange={(e) => setNewPlaylistName(e.target.value)}
									/>
									<button
										className="mt-2 bg-gray-500 text-white rounded-xl p-2 w-full hover:bg-gray-600 transition delay-50"
										onClick={() => {
											if (newPlaylistName.length > 0) {
												handleCreateNewPlaylist()
													.then(() => {
														console.log("Playlist créée avec succès.");
													})
													.catch((err) => setError(err.message));
											}
											setShowNewPlaylist(false);
											setShowPlaylistSelector(false);
										}}
									>
										Valider
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}
