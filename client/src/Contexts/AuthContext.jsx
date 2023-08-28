import { createContext, useState, useEffect } from "react";

import fetchFromApi from "../Components/lib/fetchFromApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState([{ status: "loading" }]);

  async function fetchUser() {
    await fetchFromApi("GET", "/api/profil", {}, {}, true)
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setUserPlaylists(response.data.user.playlists);
        } else {
          console.error("Failed to fetch user");
          logout();
          window.location.replace("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function updateUser(userUpdates) {
    try {
      const response = await fetchFromApi(
        "PUT",
        "/api/profil",
        {},
        userUpdates,
        true
      );
      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.error(`Error updating user: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error updating user: ${error}`);
    }
  }

  async function updatePassword(passwordUpdates) {
    try {
      const response = await fetchFromApi(
        "PUT",
        "/api/profil/password",
        {},
        passwordUpdates,
        true
      );
      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.error(`Error updating user: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error updating user: ${error}`);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      "_blank"
    );
  }

  useEffect(() => {
    const fetch = async () => {
      await fetchUser();
    };
    if (isLoggedIn) {
      fetch().catch((err) => {
        console.error(err);
      });
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        userPlaylists,
        setIsLoggedIn,
        fetchUser,
        updateUser,
        updatePassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
