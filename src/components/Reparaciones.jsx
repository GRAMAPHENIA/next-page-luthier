import Image from "next/image";
import Link from "next/link";

import LogoApellido from "/public/croquis/herramientas.svg";

export default function Reparaciones() {
  return (
    <>
      <section id="reparaciones" className="w-full grid lg:grid-cols-4 my-2 gap-2">
        <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl w-full">
          <h1 className="text-3xl font-light font-sans text-[#7d8c9d] mb-5 sm:text-2xl lg:text-7xl p-6 lg:p-10">
            <span className="text-[var(--light)]">Reparaciones,</span> calibraciones,
            pintura...
          </h1>
          <Link
            className="detalles text-xl text-slate-300 text-center w-[200px] m-8 px-4 py-3 ml-8 border-2 border-[#393c40]  hover:bg-[#171c1f] hover:text-amber-100 rounded-full gap-2 "
            href="/reparaciones"
          >
            saber más
          </Link>
        </figure>
        <aside className="flex justify-center align-middle lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl">
          <Image
            width={150}
            height={150}
            src={LogoApellido}
            alt="Logo"
            priority={true}
            className=" bg-[#14181b] my-10"
          ></Image>
        </aside>
      </section>
    </>
  );
}
