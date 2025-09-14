import Link from "next/link";
import Image from "next/image";

const banner = "/banner.png";
const logo = "/Hollownightlogo.webp";
const cart = "/shopping_cart2.webp";
const logo2 = "/fashon.webp";


export default function Header() {
  return (
    <header className="relative w-full h-[500px] flex flex-col">
      {/* Banner */}
      <Image
        src={banner}
        alt="Banner"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Barra de navegación */}
      <nav className="flex justify-between items-center text-white px-6 py-4 relative">
        
        {/* Logo de hollow kniwn*/}
        <div className="flex items-center gap-6">
          
          {/* Menú */}


        <div className="flex items-center">
        <Link href="/">
            <Image
            src={logo}
            alt="Logo de Hollow Knight"
            width={120}
            height={120}
            className="object-contain"
            />
        </Link>
        </div>
         {/* Logo de fashon de hollow knight*/}
        <div className="absolute left-1/2 top-[90px] transform -translate-x-1/2">
        <Link href="/">
        <Image 
            src={logo2} 
            alt="Hollow Fashion" 
            width={200} 
            height={80} 
            className="object-contain"
        />
        </Link>
        </div>
        <div className="hidden sm:flex gap-4 font-bold">
            <Link href="/">Inicio</Link>
            <Link href="/hombre">Hombre</Link>
            <Link href="/mujeres">Mujeres</Link>
        </div>
        </div>

        {/* Carrito y Login */}
        <div className="flex items-center gap-4">
        <Link href="/carrito">
            <Image
            src={cart}
            alt="Carrito"
            width={60}
            height={60}
            className="object-contain -mt-2"
            />
        </Link>
        <Link href="/login" className="font-bold">Iniciar Sesión</Link>
        </div>

      </nav>
    </header>
  );
}

