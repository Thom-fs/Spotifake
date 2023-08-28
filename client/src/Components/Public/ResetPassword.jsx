import { XMarkIcon } from "@heroicons/react/24/outline/index.js";
import { useState } from "react";
import fetchFromApi from "../../Components/lib/fetchFromApi";

export default function ResetPassword({
  setForgottenModal,
  setLoginModal,
  setResetModal,
  email,
}) {
  const [codeValidation, setCodeValidation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setTimeout(() => {
        setErrorMessage("Les mots de passe doivent être identique");
      }, 3000);
      return;
    }
    try {
      const response = await fetchFromApi(
        "POST",
        "/api/reset-password",
        {},
        {
          email,
          codeValidation,
          password,
          confirm_password: confirmPassword,
        }
      );

      if (response.status === 200) {
        setResetModal(false);
        setForgottenModal(false);
        setLoginModal(true);
      } else {
        alert(
          "Une erreur s'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer."
        );
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
            setResetModal(false);
          }}
        />
      </button>
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Réinitialisation du mot de passe
      </h1>
      <div className="flex flex-col items-center justify-center mt-4 w-5/6">
        <div className="relative m-4 w-full">
          <label
            htmlFor="codeValidation"
            className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
          >
            Code de validation
          </label>
          <input
            type="text"
            name="codeValidation"
            id="codeValidation"
            className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="123456"
            value={codeValidation}
            onChange={(e) => setCodeValidation(e.target.value)}
          />
        </div>
        <div className="relative m-4 w-full">
          <label
            htmlFor="password"
            className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
          >
            Nouveau mot de passe
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="relative m-4 w-full">
          <label
            htmlFor="confirmPassword"
            className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
          >
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="••••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full"
          onClick={handleResetPassword}
        >
          Réinitialiser le mot de passe
        </button>
      </div>
      <div className="w-1/2 relative">
        {errorMessage && (
          <div
            className="absolute w-full flex p-4 mb-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
}
