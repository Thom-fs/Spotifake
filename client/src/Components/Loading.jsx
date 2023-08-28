import Logo from '../Assets/jambon-beurre-logo.svg'

export default function Loading() {
  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <img src={Logo} alt="Jambon Beurre Logo" className="w-[8%] animate-bounce duration-300" />
    <h1 className="h-[40px] text-3xl font-bold text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Loading...</h1>
  </div>
  )
}