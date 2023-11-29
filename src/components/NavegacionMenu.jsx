import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

import NavLink from "@/components/NavLink";

export default function NavegacionMenu() {
  return (
    <section className="grid-cols-1 w-full gap-2 flex justify-center text-center">
      <nav>
      <Image
      className="mb-10"
            src={Logo}
            alt="imagen del logo de la empresa"
            width="200"
            height="200"
          />
        <ul>
          <li>
            <NavLink
              activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
              text="inicio"
              href="/"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
              text="Instrumentos"
              href="/instrumentos"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
              text="Reparaciones"
              href="/reparaciones"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
              text="Acerca de"
              href="/acerca-de"
            />
          </li>
          <li>
            <NavLink
              activeClasses="flex justify-center text-amber-100 px-4 py-2 bg-[#171c1f] rounded-full"
              text="Taller"
              href="/taller"
            />
          </li>
        </ul>
      </nav>
    </section>
  );
}
