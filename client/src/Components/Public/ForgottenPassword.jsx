import { XMarkIcon } from "@heroicons/react/24/outline/index.js";
import { useState } from "react";
import fetchFromApi from "../../Components/lib/fetchFromApi";

export default function ForgottenPassword({
  setForgottenModal,
  setLoginModal,
  setResetModal,
  onEmailChange,
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("Réinitialiser le mot de passe");

  const handleInputChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    onEmailChange(email);
  };

  const handlePasswordReset = async () => {
    try {
      setLoading("Redirection en cours...");
      const response = await fetchFromApi(
        "POST",
        "/api/forgot-password",
        {},
        { email }
      );

      if (response.status === 200) {
        setResetModal(true);
        setForgottenModal(false);
        setLoginModal(false);
      } else {
        setLoading("Un problème est survenu. Veuillez réessayer.");
        setTimeout(() => {
          setLoading("Réinitialiser le mot de passe");
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <button className="absolute top-0 right-0 p-4">
        <XMarkIcon
          className="w-6 h-6 text-gray-100 cursor-pointer"
          onClick={() => {
            setForgottenModal(false);
          }}
        />
      </button>
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Mot de passe oublié
      </h1>
      <div className="flex flex-col items-center justify-center mt-4 w-5/6">
        <h4 className="text-sm font-bold text-center text-gray-100">
          Retour à la page de connexion ?
          <button
            className="pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer"
            onClick={() => {
              setLoginModal(true);
              setForgottenModal(false);
            }}
          >
            Connecte-toi
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
            onChange={handleInputChange}
          />
        </div>
        <button
          className="px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full"
          onClick={handlePasswordReset}
          disabled={
            loading === "Redirection en cours..." ||
            "Un problème est survenu. Veuillez réessayer."
          }
        >
          {loading}
        </button>
      </div>
    </>
  );
}
