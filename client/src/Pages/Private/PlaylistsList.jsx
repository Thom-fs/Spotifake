import { useContext, useState } from "react";
import Card from "../../Components/Utils/Card.jsx";
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";
import playlist from "../../Assets/playlist.png";
import { AuthContext } from "../../Contexts/AuthContext.jsx";
import { TrackContext } from "../../Contexts/TrackContext.jsx";
import Loading from "../../Components/Loading.jsx";

function playlistCardGeneration(data, deletePlaylist) {
	return data.map((playlist) => {
		return (
			<Card
				onClickLink={`/user/playlists/${playlist.id}`}
				key={playlist.id}
				title={playlist.name}
				showDeleteIcon={true}
				onDelete={() => deletePlaylist(playlist.id)}
			/>
		);
	});
}

const NewPlaylistModal = ({ onClose }) => {
	const { createPlaylist } = useContext(TrackContext);
	const { fetchUser } = useContext(AuthContext);
	const [playlistName, setPlaylistName] = useState("");
	const [error, setError] = useState(null);

	const handleCreateNewPlaylist = async () => {
		try {
			await createPlaylist(playlistName, fetchUser);
			setPlaylistName("");
			onClose();
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-default">
			<div className="relative bg-light px-10 py-6 rounded-2xl">
				<button className="absolute top-2 right-2 " onClick={onClose}>
					<XMarkIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
				</button>
				<div className="text-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer">
					Nouvelle playlist
				</div>
				<div className="mt-4">
					<input
						type="text"
						value={playlistName}
						onChange={(e) => setPlaylistName(e.target.value)}
						className="border border-gray-400 rounded-xl p-2 w-full text-light"
						placeholder="Nom de la playlist"
					/>
					<button
						onClick={handleCreateNewPlaylist}
						className="mt-2 bg-gray-500 text-white rounded-xl p-2 w-full hover:bg-gray-600 transition delay-50"
					>
						Valider
					</button>
					{error && <div className="error">{error}</div>}
				</div>
			</div>
		</div>
	);
};

export default function PlaylistsList() {
	const { userPlaylists } = useContext(AuthContext);
	const { deletePlaylist } = useContext(TrackContext);
	const [showModal, setShowModal] = useState(false);
	const { fetchUser } = useContext(AuthContext);

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleDeletePlaylist = async (playlistId) => {
		try {
			await deletePlaylist(playlistId, fetchUser);
		} catch (err) {
			console.error(err);
		}
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	if (userPlaylists[0]?.status === "loading") return <Loading />;
	return (
		<div className="mt-8 px-2">
			<h1 className="sm:w-1/2 w-full bg-light text-gray-300 text-2xl flex justify-center font-semibold p-3 rounded-full mx-auto mb-8">
				PLAYLISTS
			</h1>
			<div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 place-content-around">
				{userPlaylists.length > 0 && (
					playlistCardGeneration(userPlaylists, handleDeletePlaylist)
				)}
				<div
					onClick={() => {
						setShowModal(true);
					}}
					className={classNames(
				"flex flex-col bg-light w-48 h-64 rounded-xl p-4 mx-auto hover:bg-gradient-to-b hover:from-primary/25 hover:to-secondary/50 cursor-pointer",
							!userPlaylists.length && "col-span-full"
					)}
				>
					<img className="mx-auto " src={playlist} alt="playlist creation logo"/>
					<div className="flex flex-col justify-center">
						<h3 className="text-gray-400 text-center text-sm font-semibold tracking-wider">
							Creer ta propre playlist !
						</h3>
					</div>
				</div>
			</div>
			{showModal && <NewPlaylistModal onClose={handleCloseModal} />}
		</div>
	);
}
