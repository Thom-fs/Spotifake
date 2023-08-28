import {Link} from "react-router-dom";

export default function Error404({to}) {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center h-[75vh]">
        <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Erreur 404</h1>
        <h2 className="text-2xl font-bold text-center text-gray-100">La page que vous recherchez n'existe pas</h2>
        <Link
          to={to}
          className="px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full"
        >Retourner à l'accueil</Link>
      </div>
    </>
  );
}