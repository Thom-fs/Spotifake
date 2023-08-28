import { createContext, useState } from "react";
import fetchFromApi from "../Components/lib/fetchFromApi";

export const TrackContext = createContext();

const TrackProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  function getPlaylistByUserId() {
    fetchFromApi("GET", "/api/playlist", {}, {}, true)
      .then((response) => {
        if (response.status === 200) {
          setPlaylists(response.data);
          console.log(response.data);
        } else {
          console.error(response);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function fetchAllTracks() {
    fetchFromApi("GET", "/api/tracks/play", {}, {}, true)
      .then((response) => {
        if (response.status === 200) {
          setTracks(response.data);
        } else {
          console.error(response);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function fetchAllAlbums() {
    fetchFromApi("GET", "/api/accueil", {}, {}, true)
      .then((response) => {
        if (response.status === 200) {
          setAlbums(response.data);
        } else {
          console.error(response);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getTrackByAlbumId(id) {
    return tracks.filter((track) => track.album_id === Number(id));
  }

  async function addTrackToPlaylist(id, playlistId) {
    try {
      const response = await fetchFromApi(
        "POST",
        `/api/playlist/${playlistId}/track`,
        {},
        { track_id: id },
        true
      );
      if (response.status === 200) {
        console.log("Musique ajoutée à la playlist avec succès");
      } else if (response.status === 401) {
        console.error(
          "Vous n'êtes pas autorisé à ajouter cette musique à la playlist"
        );
      } else if (response.status === 422) {
        console.error("Cette musique est déjà dans la playlist");
      } else {
        console.error(response);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function createPlaylist(name, onSuccess) {
    try {
      const response = await fetchFromApi(
        "POST",
        "/api/playlist",
        {},
        { name },
        true
      );
      if (response.status === 201) {
        console.log("Playlist a été créée avec succès !");
        if (onSuccess) {
          onSuccess();
        }
        return response.data;
      } else if (response.status === 401) {
        console.error("Vous n'êtes pas autorisé à créer cette playlist");
      } else {
        console.error(response);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async function deletePlaylist(id, onSuccess) {
    try {
      const response = await fetchFromApi(
        "DELETE",
        `/api/playlist/${id}`,
        {},
        {},
        true
      );
      if (response.status === 200) {
        console.log("Playlist a été supprimée avec succès !");
        if (onSuccess) {
          onSuccess();
        }
      } else if (response.status === 401) {
        console.error("Vous n'êtes pas autorisé à supprimer cette playlist");
      } else {
        console.error(response);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async function deleteTrackFromPlaylist(playlistId, trackId, onSuccess) {
    try {
      const response = await fetchFromApi(
        "DELETE",
        `/api/playlist/${playlistId}/track/${trackId}`,
        {},
        {},
        true
      );
      if (response.status === 200) {
        console.log("Musique supprimée de la playlist avec succès !");
        if (onSuccess) {
          onSuccess();
        }
      } else if (response.status === 401) {
        console.error(
          "Vous n'êtes pas autorisé à supprimer cette musique de la playlist"
        );
      } else {
        console.error(response);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async function fetchTracksByPlaylistId(id) {
    try {
      const response = await fetchFromApi(
        "GET",
        `/api/playlists/${id}`,
        {},
        {},
        true
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(response);
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  function isValidTimestamp(timestamp) {
    const currentTime = Date.now();
    const expirationTime = timestamp * 1000;
    return currentTime <= expirationTime; // return: boolean
  }

  async function fetchNewUrl(id) {
    try {
      const response = await fetchFromApi(
        "GET",
        `/api/tracks/${id}/play`,
        {},
        {},
        true
      );

      if (response.status === 200) {
        const newTrack = response.data;
        const newTracks = tracks.map((track) => {
          if (track.id === newTrack.id) {
            return newTrack;
          } else {
            return track;
          }
        });
        setTracks(newTracks);
        return newTrack;
      } else {
        console.error(response);
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error(
        "Erreur lors du chargement des nouvelles données de la musique",
        error
      );
    }
  }

  return (
    <TrackContext.Provider
      value={{
        tracks,
        setTracks,
        albums,
        fetchAllAlbums,
        fetchAllTracks,
        getTrackByAlbumId,
        addTrackToPlaylist,
        createPlaylist,
        deletePlaylist,
        deleteTrackFromPlaylist,
        getPlaylistByUserId,
        fetchTracksByPlaylistId,
        isValidTimestamp,
        fetchNewUrl,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};
export default TrackProvider;
