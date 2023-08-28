import { createContext, useContext, useEffect, useState } from "react";
import { Player } from "../Components/Private/Player/Player";
import { defaultMusic } from "../Components/Private/Player/DefaultMusic.jsx";
import React from "react";
import { TrackContext } from "./TrackContext";

const PlayerContext = createContext({
	playList: [],
	currentMusic: defaultMusic,
	setCurrentMusic: () => {},
	setCurrentPlaylist: () => {},
});

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
	const [current, setCurrent] = useState(defaultMusic);
	const { tracks } = useContext(TrackContext);
	const [playlist, setPlaylist] = useState([]);

	useEffect(() => {
		if (tracks && tracks.length > 0) {
			setPlaylist(tracks);
		}
	}, [tracks]);

	//update(volume and play/pause) and replace currentMusic
	const setCurrentMusic = (clickedMusic, replace = false) => {
		if (replace && clickedMusic.url !== current.url) {
			setCurrent(clickedMusic);
		} else {
			setCurrent((prev) => ({ ...prev, ...clickedMusic }));
		}
	};

	const setCurrentPlaylist = (clickedMusicPlaylist) => {
		setPlaylist(clickedMusicPlaylist);
	};

	return (
		<PlayerContext.Provider
			value={{
				currentMusic: current,
				setCurrentMusic,
				playList: playlist,
				setCurrentPlaylist,
			}}
		>
			{children}
			{current && current.url ? (
				<Player />
			) : (
				<div className="h-8 fixed w-screen bottom-0 inset-x-0 mt-4 bg-light flex justify-center">
					<span className="p-2 text-center text-gray-400 text-xs">
						© 2022 - 2023 - All rights reserved - Made with ❤️ by jambon beurre
						team
					</span>
				</div>
			)}
		</PlayerContext.Provider>
	);
};

export default PlayerProvider;
