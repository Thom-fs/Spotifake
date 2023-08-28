import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";
import fetchFromApi from "../../Components/lib/fetchFromApi";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Login({
  setLoginModal,
  setRegisterModal,
  setForgottenModal,
}) {
  const { fetchUser, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetchFromApi(
        "POST",
        "/api/login",
        {},
        { email, password }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true);
        await fetchUser();
        window.location.href = "/user";
      } else {
        setErrorMessage(
          "La connexion a échoué. Veuillez vérifier vos identifiants."
        );
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <>
      <button className="absolute top-0 right-0 p-4">
        <XMarkIcon
          className="w-6 h-6 text-gray-100 cursor-pointer"
          onClick={() => {
            setLoginModal(false);
          }}
        />
      </button>
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Connecte-toi à Spotifake !
      </h1>
      <div className="flex flex-col items-center justify-center my-4 w-5/6">
        <h4 className="text-sm font-bold text-center text-gray-100">
          Pas encore inscris
          <button
            className="pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer"
            onClick={() => {
              setRegisterModal(true);
              setLoginModal(false);
              setForgottenModal(false);
            }}
          >
            inscris-toi
          </button>
        </h4>
        <div className="relative m-4 w-full">
          <label
            htmlFor="email"
            className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
          >
            E-mail
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="exemple@spotifake.fr"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative m-4 w-full">
          <label
            htmlFor="password"
            className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
          >
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="••••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer"
          onClick={() => {
            setLoginModal(false);
            setRegisterModal(false);
            setForgottenModal(true);
          }}
        >
          Mot de passe oublié ?
        </button>
        <button
          className="px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full"
          onClick={handleLogin}
        >
          Se connecter
        </button>
      </div>
      <div className="w-1/2 relative">
        {errorMessage && (
          <div
            className="absolute w-full flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
}
