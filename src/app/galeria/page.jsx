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
      <section className="seccion-galeria mt-20">
        <section className="grid my-2 grid-cols-1 lg:grid lg:grid-cols-2 gap-2">
          {/* <figure className="relative  rounded-2xl col-span-1">
            <h1 className="text-center">Fotografías</h1>
          </figure> */}
          <figure className="relative bg-[#14181b] rounded-2xl col-span-1">
            <Image
              priority={true}
              src={BuconeroGaleria}
              alt="Imagen de la guitarra buconero"
              width="auto"
              height="auto"
              className=""
            />
          </figure>

          <figure className="relative bg-[#14181b] rounded-2xl col-span-1">
            <Image
              src={VellutoGaleria}
              alt="Imagen de la guitarra velluto"
              width="auto"
              height="auto"
              priority={true}
            />
          </figure>

          <figure className="relative bg-[#14181b] rounded-2xl col-span-1">
            <Image
              src={EiraGaleria}
              alt="Imagen de la guitarra eira"
              width="auto"
              height="auto"
              priority={true}
            />
          </figure>
        </section>
      </section>
    </>
  );
}
