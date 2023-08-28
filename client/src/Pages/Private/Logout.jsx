import { useEffect, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext.jsx";
import { usePlayer } from "../../Contexts/usePlayer.jsx";
import { useNavigate } from "react-router-dom";
import { defaultMusic } from "../../Components/Private/Player/DefaultMusic.jsx";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  const { setCurrentMusic } = usePlayer();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentMusic(defaultMusic);
    logout();
    navigate("/");
  }, []);
}