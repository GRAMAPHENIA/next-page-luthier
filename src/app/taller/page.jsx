import Image from "next/image";
import tallerDos from "/public/taller/tallerdos.png";
import tallerTres from "/public/taller/tallertres.png";
import tallerCuatro from "/public/taller/tallercuatro.png";
import tallerCinco from "/public/taller/tallercinco.png";
import tallerSeis from "/public/taller/tallerseis.png";
import tallerSiete from "/public/taller/tallersiete.png";
import tallerOcho from "/public/taller/tallerocho.png";

export const metadata = {
  title: "El Taller",
};

export default function Taller() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-6 gap-2 ">
        <figure className="bg-[#14181b] rounded-2xl col-span-4 p-4 lg:p-4">
          <Image
            src={tallerDos}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl "
          />
        </figure>

        <figure className="bg-[#14181b] rounded-2xl col-span-2 flex justify-center align-middle p-4 lg:p-4">
          <Image
            src={tallerTres}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl object-fit"
          />
        </figure>

        <figure className="bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerCuatro}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerCinco}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerSeis}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-2 lg:flex justify-center align-middle p-4 lg:p-4 hidden">
          <Image
            src={tallerSiete}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-4 p-4 lg:p-4">
          <Image
            src={tallerOcho}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl "
          />
        </figure>
      </section>
    </>
  );
}
