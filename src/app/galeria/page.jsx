import Image from "next/image";
import Link from "next/link";

import Navegacion from "@/components/Navegacion";

import BuconeroGaleria from "@/public/buconero-galeria.png";
import VellutoGaleria from "@/public/velluto-galeria.png";
import EiraGaleria from "@/public/eira-galeria.png";

export const metadata = {
  title: "Galeria de imagenes",
};

export default function Galeria() {
  return (
    <>
      <section className="mt-2">
        <Navegacion />
      </section>

      <section className="seccion-galeria">
        <section className="grid my-2 grid-cols-1 lg:grid lg:grid-cols-2 gap-2">
          <figure className="relative bg-[#14181b] rounded-2xl col-span-2">
            <Image
              priority={true}
              src={BuconeroGaleria}
              alt="Imagen de la guitarra buconero"
              width="auto"
              height="auto"
            />
            <Link
              href="/instrumentos/buconero"
              className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-4 border-[#393c40]/70 hover:border-[#393c40]/95 bg-[#171c1f]/90 hover:bg-[#171c1f]/95 text-gray-400  hover:text-amber-100 rounded-full"
            >
              detalles
            </Link>
          </figure>

          <figure className="relative bg-[#14181b] rounded-2xl col-span-2">
            <Image
              src={VellutoGaleria}
              alt="Imagen de la guitarra velluto"
              width="auto"
              height="auto"
              priority={true}
            />
            <Link
              href="/instrumentos/velluto"
              className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-4 border-[#393c40]/70 hover:border-[#393c40]/95 bg-[#171c1f]/90 hover:bg-[#171c1f]/95 text-gray-400  hover:text-amber-100 rounded-full"
            >
              detalles
            </Link>
          </figure>

          <figure className="relative bg-[#14181b] rounded-2xl col-span-2">
            <Image
              src={EiraGaleria}
              alt="Imagen de la guitarra eira"
              width="auto"
              height="auto"
              priority={true}
            />
            <Link
              href="/instrumentos/eira"
              className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-4 border-[#393c40]/70 hover:border-[#393c40]/95 bg-[#171c1f]/90 hover:bg-[#171c1f]/95 text-gray-400  hover:text-amber-100 rounded-full"
            >
              detalles
            </Link>
          </figure>
        </section>
      </section>
    </>
  );
}
