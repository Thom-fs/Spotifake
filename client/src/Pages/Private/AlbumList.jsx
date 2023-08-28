import React, { useState, useContext, useEffect } from "react";
import NoData from "../../Components/NoData.jsx";
import Card from "../../Components/Utils/Card.jsx";
import SearchBar from "../../Components/Utils/Search.jsx";
import { TrackContext } from "../../Contexts/TrackContext";
import Loading from "../../Components/Loading.jsx";
import { DefaultThumbnail } from "../../Components/Private/Player/DefaultThumbnail.jsx";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import { usePlayer } from "../../Contexts/usePlayer";
import PlaylistSelector from "../../Components/Private/Player/PlaylistSelector.jsx";

function albumCardGeneration(data) {
	return data.map((album) => {
		return (
			<Card
				onClickLink={`/user/album/${album.id}`}
				key={album.id}
				imgLink={album.cover}
				title={album.title}
				artist={album.artist}
				year={album.year}
			/>
		);
	});
}

export default function AlbumList() {
	const [filter, setFilter] = useState([]);
	const [search, setSearch] = useState("");
	const { albums, tracks } = useContext(TrackContext);
	const { setCurrentMusic, currentMusic, setCurrentPlaylist } = usePlayer();
	const [showPlaylistSelector, setShowPlaylistSelector] = useState(false);
	const [selectedMusic, setSelectedMusic] = useState(null);
	const [completeInformationTracks, setCompleteInformationTracks] = useState([]);

	useEffect(() => {
		// Get artist, album name, album style from albums and add them to tracks
		let newTracks = [...tracks];
		newTracks.forEach((track) => {
			let album = albums.find((album) => album.id === track.album_id);
			track.artist = album?.artist;
			track.album = album?.title;
			track.styles = album?.styles;
		});
		setCompleteInformationTracks(newTracks);
	}, [albums, tracks]);

	function trackSearchResult() {
		let result = [];
		completeInformationTracks.forEach((track) => {
			if (track.title.toLowerCase().includes(search.toLowerCase()) || track.artist.toLowerCase().includes(search.toLowerCase()) || track.album.toLowerCase().includes(search.toLowerCase())) {
				result.push(track);
			}
		});
		return result;
	}

	function trackFilterResult() {
		let result = [];
		completeInformationTracks.forEach((track) => {
			let isTrackValid = true;
			filter.forEach((filterElement) => {
				if (filterElement.name === "styles") {
					let isStyleValid = false;
					filterElement.value.forEach((style) => {
						if (track.styles.find((trackStyle) => trackStyle.style === style)) {
							isStyleValid = true;
						}
					});
					if (!isStyleValid) {
						isTrackValid = false;
					}
				}
				if (filterElement.name === "artist") {
					let isArtistValid = false;
					filterElement.value.forEach((artist) => {
						if (track.artist === artist) {
							isArtistValid = true;
						}
					});
					if (!isArtistValid) {
						isTrackValid = false;
					}
				}
			});
			if (isTrackValid) {
				result.push(track);
			}
		});

		return result;
	}

	function trackSearchAndFilterResult() {
		let result = [];
		completeInformationTracks.forEach((track) => {
			let isTrackValid = true;
			filter.forEach((filterElement) => {
				if (filterElement.name === "styles") {
					let isStyleValid = false;
					filterElement.value.forEach((style) => {
						if (track.styles.find((trackStyle) => trackStyle.style === style)) {
							isStyleValid = true;
						}
					});
					if (!isStyleValid) {
						isTrackValid = false;
					}
				}
				if (filterElement.name === "artist") {
					let isArtistValid = false;
					filterElement.value.forEach((artist) => {
						if (track.artist === artist) {
							isArtistValid = true;
						}
					});
					if (!isArtistValid) {
						isTrackValid = false;
					}
				}
			});
			if (isTrackValid && (track.title.toLowerCase().includes(search.toLowerCase()) || track.artist.toLowerCase().includes(search.toLowerCase()) || track.album.toLowerCase().includes(search.toLowerCase()))) {
				result.push(track);
			}
		});

		return result;
	}

	function renderList(list) {
		if (list.length === 0) {
			return (
				<div className="flex flex-col gap-8 items-center justify-center">
					<h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
						Aucun résultat ne correspond à votre recherche
					</h1>
				</div>
			);
		}
		return list.map((track) => {
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
								setCurrentMusic(track, true);
								setCurrentPlaylist(list);
							}
						}}
						className="w-1/6 min-w-[75px] flex justify-center items-center text-3xl bg-black/10 hover:text-purple-300 rounded-xl cursor-pointer"
					>
						{isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
					</div>
				</div>
			);
		});
	}

	function searchAndFilter(type) {
		switch (type) {
			case "search" :
				return renderList(trackSearchResult());
			case "filter" :
				return renderList(trackFilterResult());
			case "searchAndFilter" :
				return renderList(trackSearchAndFilterResult());
			default :
				return <NoData />;
		}
	}

	const handleAddToPlaylist = (music) => {
		setShowPlaylistSelector(true);
		setSelectedMusic(music);
	};

	function deleteFilterValue(filters, category, value) {
		// Set new filter with the value of existing filter
		let newFilter = [...filter];
		// Find the index of the category
		let index = newFilter.findIndex((element) => element.name === category);
		// Find the index of the value
		let indexValue = newFilter[index].value.findIndex(
			(element) => element === value
		);
		// Delete the value
		newFilter[index].value.splice(indexValue, 1);
		// If the value is empty, delete the category
		if (newFilter[index].value.length === 0) {
			newFilter.splice(index, 1);
		}
		// Set the new filter
		setFilter(newFilter);
	}

	if (albums[0]?.status === "loading") return <Loading />;
	return (
		<>
			<div className="bg-light mb-8">
				<SearchBar
					filter={filter}
					setFilter={setFilter}
					search={search}
					setSearch={setSearch}
				/>
				{filter.length > 0 && (
					<div className="flex flex-wrap justify-center gap-2">
						{filter.map((item) => {
							return item.value.map((value) => {
								return (
									<span className="mb-4 inline-flex items-center gap-x-1 rounded-md bg-gradient-to-r from-primary/25 to-secondary/50 px-2 py-1 text-xs font-medium text-gray-200">
										{value}
										<button
											type="button"
											className="group relative -mr-1 h-5 w-5 rounded-full hover:bg-light/50"
											onClick={() =>
												deleteFilterValue(filter, item.name, value)
											}
										>
											<span className="sr-only">Remove</span>
											<svg
												viewBox="0 0 14 14"
												className="h-5 w-5 stroke-gray-100"
											>
												<path d="M4 4l6 6m0-6l-6 6" />
											</svg>
											<span className="absolute -inset-1" />
										</button>
									</span>
								);
							});
						})}
					</div>
				)}
			</div>
			<div className="w-full flex flex-col items-center px-2">
			{filter.length === 0 ? (
				search === "" ? (
				<>
					<h1 className="sm:w-1/2 w-full bg-light text-gray-300 text-2xl flex justify-center font-semibold p-3 rounded-full mx-auto mb-8">
						ALBUMS
					</h1>
					<div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 place-content-around w-full">
						{albums.length > 0 ? albumCardGeneration(albums) : <NoData />}
					</div>
				</>
				) : (
				<>
					<h1 className="sm:w-1/2 w-full bg-light text-gray-300 text-2xl flex justify-center font-semibold p-3 rounded-full mx-auto mb-4">
						SEARCH RESULT
					</h1>
					<div className="md:w-1/2 w-full px-4 pl-2 py-6 flex flex-col gap-4">
						{
							searchAndFilter("search")
						}
					</div>
				</>
				)
			) : (
				search === "" ? (
				<>
					<h1 className="sm:w-1/2 w-full bg-light text-gray-300 text-2xl flex justify-center font-semibold p-3 rounded-full mx-auto mb-4">
						SEARCH RESULT
					</h1>
					<div className="md:w-1/2 w-full px-4 pl-2 py-6 flex flex-col gap-4">
						{
							searchAndFilter("filter")
						}
					</div>
				</>
			) : (
				<>
					<h1 className="sm:w-1/2 w-full bg-light text-gray-300 text-2xl flex justify-center font-semibold p-3 rounded-full mx-auto mb-4">
						SEARCH RESULT
					</h1>
					<div className="md:w-1/2 w-full px-4 pl-2 py-6 flex flex-col gap-4">
						{
							searchAndFilter("searchAndFilter")
						}
					</div>
				</>
			))}
			</div>
			<PlaylistSelector
				selectedMusic={selectedMusic}
				showPlaylistSelector={showPlaylistSelector}
				setShowPlaylistSelector={setShowPlaylistSelector}
				setSelectedMusic={setSelectedMusic}
			/>
		</>
	);
}
