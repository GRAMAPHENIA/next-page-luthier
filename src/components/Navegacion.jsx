import Image from "next/image";
import Link from "next/link";

export default function Navegacion() {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-6 w-full gap-2 text-center">
      <Link
        href="/"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <p>Inicio</p>
      </Link>
      <Link
        href="/instrumentos"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <p>Instrumentos</p>
      </Link>
      <Link
        href="/reparaciones"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <p>Reparación</p>
      </Link>
      <Link
        href="/acerca-de"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <p>Acerca de</p>
      </Link>
      <Link
        href="/taller"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <p>Taller</p>
      </Link>
      <Link
        href="/contactos"
        className="flex justify-center p-4 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <p>Contactos</p>
      </Link>
    </section>
  );
}
