import Link from "next/link";
import Image from "next/image";

const banner = "/banner.png";
const logo = "/Hollownightlogo.webp";
const cart = "/shopping_cart2.webp";


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
          <Link href="/">
            <Image
              src={logo}
              alt="Logo de la tienda"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Menú */}
          <div className="hidden sm:flex gap-4 font-medium">
            <Link href="/">Inicio</Link>
            <Link href="/hombre">Hombre</Link>
            <Link href="/mujeres">Mujeres</Link>
          </div>
        </div>

        {/* Carrito y Login */}
        <div className="flex gap-4">
          <Link href="/carrito">
            <Image
              src={cart}
              alt="Logo de la tienda"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href="/login">Iniciar Sesión</Link>
        </div>
      </nav>
    </header>
  );
}

