export default function HomeModal({setRegisterModal, setLoginModal}) {

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Bienvenue sur Spotifake !</h1>

      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-lg font-bold text-center text-gray-100">Connectez-vous pour accéder à votre compte</h2>
        <button
          className="px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full"
          onClick={() => {
            setLoginModal(true)
            setRegisterModal(false)
          }}
        >Se connecter</button>
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-md font-bold text-center text-gray-100">Pas encore de compte ?</h2>
        <button
          className="px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full"
          onClick={() => {
            setRegisterModal(true)
            setLoginModal(false)
          }}
        >S'inscrire</button>
      </div>
    </>
    )
}