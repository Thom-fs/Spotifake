import { lazy, Suspense, useState, useEffect } from "react";
import {
	Route,
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Navigate,
} from "react-router-dom";

import Loading from "./Components/Loading";
import Dashboard from "./Pages/Private/Dashboard";
import Error404 from "./Components/404.jsx";

import PlayerProvider from "./Contexts/usePlayer";
import AuthProvider from "./Contexts/AuthContext";
import TrackProvider from "./Contexts/TrackContext";

const PublicHome = lazy(() => import("./Pages/Public/Home"));
const AlbumList = lazy(() => import("./Pages/Private/AlbumList"));
const PlaylistsList = lazy(() => import("./Pages/Private/PlaylistsList"));
const TracksListAlbum = lazy(() =>
	import("./Components/Private/Player/TracksListAlbum")
);
const TracksListPlaylist = lazy(() =>
	import("./Components/Private/Player/TracksListPlaylist")
);
const Profil = lazy(() => import("./Components/Private/Profil"));
const Logout = lazy(() => import("./Pages/Private/Logout"));

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

	useEffect(() => {
		function checkAuth() {
			setIsLoggedIn(!!localStorage.getItem("token"));
		}

		window.addEventListener("storage", checkAuth);

		return () => {
			window.removeEventListener("storage", checkAuth);
		};
	}, []);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route
					index
					element={
						<Suspense fallback={<Loading />}>
							<PublicHome />
						</Suspense>
					}
				/>

				<Route
					path="/user"
					element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
				>
					<Route
						index
						element={
							<Suspense fallback={<Loading />}>
								<AlbumList />
							</Suspense>
						}
					/>
					<Route
						path="album/:id"
						element={
							<Suspense fallback={<Loading />}>
								<TracksListAlbum />
							</Suspense>
						}
					/>
					<Route
						path="playlists"
						element={
							<Suspense fallback={<Loading />}>
								<PlaylistsList />
							</Suspense>
						}
					/>
					<Route
						path="playlists/:id"
						element={
							<Suspense fallback={<Loading />}>
								<TracksListPlaylist />
							</Suspense>
						}
					/>
					<Route
						path="profil"
						element={
							<Suspense fallback={<Loading />}>
								<Profil />
							</Suspense>
						}
					/>
					<Route
						path="logout"
						element={
							<Suspense fallback={<Loading />}>
								<Logout />
							</Suspense>
						}
					/>
					<Route path="*" element={<Error404 to="/user" />} />
				</Route>
				<Route path="*" element={<Error404 to="/" />} />
			</Route>
		)
	);

	return (
		<AuthProvider>
			<TrackProvider>
				<PlayerProvider>
					<RouterProvider router={router} />
				</PlayerProvider>
			</TrackProvider>
		</AuthProvider>
	);
}
