import Link from "next/link";
import Image from "next/image";

const banner = "/banner.webp";
const logo = "/Hollownightlogo.webp";

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
      <nav className="flex justify-between items-center text-black px-6 py-4 relative">
        
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
          <Link href="/carrito">Carrito</Link>
          <Link href="/login">Iniciar Sesión</Link>
        </div>
      </nav>
    </header>
  );
}

