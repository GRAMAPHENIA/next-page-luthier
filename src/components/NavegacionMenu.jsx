import Image from "next/image";
import Link from "next/link";

import NavLink from "@/components/NavLink";

export default function NavegacionMenu() {
  return (
    <section className="grid-cols-1 w-full gap-2 text-center">
      <nav>
        <ul >
          <li>
            <NavLink activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full" text="inicio" href="/" />
          </li>
          <li>
            <NavLink activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full" text="Instrumentos" href="/instrumentos" />
          </li>
          <li>
            <NavLink activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full" text="Reparaciones" href="/reparaciones" />
          </li>
          <li>
            <NavLink activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full" text="Acerca de" href="/acerca-de" />
          </li>
          <li>
            <NavLink activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full" text="Taller" href="/taller" />
          </li>
        </ul>
      </nav>

      {/* <Link
        href="/"
        className="flex text-2xl justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Inicio</span>
      </Link>
      <Link
        href="/instrumentos"
        className="flex text-2xl justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Instrumentos</span>
      </Link>
      <Link
        href="/reparaciones"
        className="flex text-2xl justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Reparación</span>
      </Link>
      <Link
        href="/acerca-de"
        className="flex text-2xl justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Acerca de</span>
      </Link>
      <Link
        href="/taller"
        className="flex text-2xl justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Taller</span>
      </Link>
      <Link
        href="#contactos"
        className="flex text-2xl justify-center p-2 text-gray-500 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
      >
        <span>Contactos</span>
      </Link> */}
    </section>
  );
}
