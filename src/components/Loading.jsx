import Logo from '../assets/logo.webp'
export default function Loading () {
    return (
        <main className="fixed top-0 w-screen h-screen flex flex-col items-center justify-center bg-white">
        	<img src={Logo} className="animate-pulse object-contain" width="250" height='auto' />
         	<h2 className="animate-bounce text-m-purple font-bold mx-auto text-2xl text-black">Cargando...</h2>         	
        </main>
        
    )
}