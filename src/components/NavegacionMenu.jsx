import Image from "next/image";
import Link from "next/link";

export default function NavegacionMenu() {
  return (
    <section className="grid-cols-1 w-full gap-2 text-center">
      <Link
        href="/"
        className="flex justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Inicio</span>
      </Link>
      <Link
        href="/instrumentos"
        className="flex justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Instrumentos</span>
      </Link>
      <Link
        href="/reparaciones"
        className="flex justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Reparación</span>
      </Link>
      <Link
        href="/acerca-de"
        className="flex justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Acerca de</span>
      </Link>
      <Link
        href="/taller"
        className="flex justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Taller</span>
      </Link>
      <Link
        href="/contactos"
        className="flex justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Contactos</span>
      </Link>
    </section>
  );
}
