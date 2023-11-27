import Image from "next/image";
import Link from "next/link";

import BuconeroHorz from "@/public/croquis/buconero-horz.svg";
import VellutoHorz from "@/public/croquis/velluto-horz.svg";
import EiraHorz from "@/public/croquis/eira-horz.svg";

export const metadata = {
  title: "Instrumentos",
};

export default function Buconero() {
  return (
    <>
      <section className="grid my-2 grid-cols-1 lg:grid lg:grid-cols-2 gap-2">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4">
          <p>Modelo Buconero</p>
        </figure>
        <figure  className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          <Image
            priority={true}
            src={BuconeroHorz}
            alt="Logo de dicorato luthier"
            width="auto"
            height="auto"
          />
          <Link
            href="/instrumentos/buconero"
            className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full"
          >
            detalles
          </Link>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4">
          <p>Modelo Velluto</p>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          <Image
            src={VellutoHorz}
            alt="Logo de dicorato luthier"
            width="auto"
            height="auto"
            priority={true}
          />
          <Link
            href="/instrumentos/velluto"
            className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full"
          >
            detalles
          </Link>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4">
          <p>Modelo Eira</p>
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          <Image
            src={EiraHorz}
            alt="Logo de dicorato luthier"
            width="auto"
            height="auto"
            priority={true}
          />
          <Link
            href="/instrumentos/eira"
            className="absolute bottom-2 right-2 lg:bottom-10 lg:right-10 detalles text-base lg:text-xl text-center w-[100px] lg:w-[200px] px-0 py-1 lg:px-4 lg:py-3 ml-8 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full"
          >
            detalles
          </Link>
        </figure>
      </section>
    </>
  );
}
