import { useState, useContext, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Profil() {
	const { user, updateUser, updatePassword, fetchUser } =
		useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [userUpdates, setUserUpdates] = useState({
		firstname: user?.firstname || "",
		lastname: user?.lastname || "",
		pseudo: user?.pseudo || "",
		email: user?.email || "",
	});
	const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
	const [passwordUpdates, setPasswordUpdates] = useState({
		newPassword: "",
		newPasswordConfirmation: "",
	});

	useEffect(() => {
		if (user) {
			setUserUpdates({
				firstname: user?.firstname || "",
				lastname: user?.lastname || "",
				pseudo: user?.pseudo || "",
				email: user?.email || "",
			});
		}
	}, [user]);

	const handleChange = (e) => {
		setUserUpdates({ ...userUpdates, [e.target.name]: e.target.value });
	};
	const handlePasswordChange = (e) => {
		setPasswordUpdates({ ...passwordUpdates, [e.target.name]: e.target.value });
	};

	const handleUpdateUser = async () => {
		try {
			setIsLoading(true);
			await updateUser(userUpdates);
			await fetchUser();
			setSuccessMessage("Vos informations ont été mises à jour avec succès !");
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setIsLoading(false);
		}
	};
	const handleUpdatePassword = async () => {
		try {
			setIsLoading(true);
			await updatePassword({
				password: passwordUpdates.newPassword,
				confirm_password: passwordUpdates.newPasswordConfirmation,
			});
			setSuccessMessage("Votre mot de passe a été mis à jour avec succès !");
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setIsLoading(false);
			setIsUpdatingPassword(false);
		}
	};

	if (!user) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<div className="flex items-center justify-center my-10">
				<div className="flex flex-col items-center md:h-3/5 h-4/5 md:w-1/2 w-full bg-light md:rounded-3xl py-8">
					<div className="photo-wrapper p-2">
						<UserCircleIcon className="w-32 h-32 text-gray-100" />
					</div>
					<div className="flex flex-col py-2 items-center">
						<h3 className="text-center text-xl text-gray-200 font-medium leading-8">
							{user.firstname} {user.lastname}
						</h3>

						<div className="flex flex-col items-center mt-4 md:w-5/6">
							<div className="relative m-4 w-full">
								<label
									htmlFor="firstname"
									className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
								>
									Prénom
								</label>
								<input
									type="text"
									name="firstname"
									id="firstname"
									className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
									value={userUpdates.firstname}
									onChange={handleChange}
								/>
							</div>
							<div className="relative m-4 w-full">
								<label
									htmlFor="lastname"
									className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
								>
									Nom
								</label>
								<input
									type="text"
									name="lastname"
									id="lastname"
									className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
									value={userUpdates.lastname}
									onChange={handleChange}
								/>
							</div>

							<div className="relative m-4 w-full">
								<label
									htmlFor="pseudo"
									className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
								>
									Pseudo
								</label>
								<input
									type="text"
									name="pseudo"
									id="pseudo"
									className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
									value={userUpdates.pseudo}
									onChange={handleChange}
								/>
							</div>

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
									value={userUpdates.email}
									onChange={handleChange}
								/>
							</div>

							<div className="relative m-4 w-full">
								<h4 className="text-sm font-bold text-center text-gray-100">
									Tu souhaites changer ton mot de passe ?{" "}
									<button
										className="pl-1 text-md font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer"
										onClick={() => setIsUpdatingPassword(!isUpdatingPassword)}
									>
										Clique ici
									</button>
								</h4>
							</div>
							{isUpdatingPassword && (
								<>
									<div className="relative m-4 w-full">
										<label
											htmlFor="newPassword"
											className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
										>
											Nouveau mot de passe
										</label>
										<input
											type="text"
											name="newPassword"
											id="newPassword"
											className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
											value={passwordUpdates.newPassword}
											onChange={handlePasswordChange}
										/>
									</div>
									<div className="relative m-4 w-full">
										<label
											htmlFor="newPasswordConfirmation"
											className="absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100"
										>
											Confirmez le nouveau mot de passe
										</label>
										<input
											type="text"
											name="newPasswordConfirmation"
											id="newPasswordConfirmation"
											className="pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
											value={passwordUpdates.newPasswordConfirmation}
											onChange={handlePasswordChange}
										/>
									</div>
								</>
							)}

							<button
								className="px-4 py-2 mt-4 text-lg font-bold text-center text-gray-100 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full"
								onClick={
									isUpdatingPassword ? handleUpdatePassword : handleUpdateUser
								}
								disabled={isLoading}
							>
								{isLoading
									? "En cours..."
									: isUpdatingPassword
									? "Valider mon nouveau mot de passe"
									: "Enregistrer mes informations !"}
							</button>
						</div>
					</div>
					<div className="w-1/2 relative">
						{successMessage && (
							<div
								className="absolute w-full flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
								role="alert"
							>
								{successMessage}
							</div>
						)}
						{errorMessage && (
							<div
								className="absolute w-full flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
								role="alert"
							>
								{errorMessage}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
