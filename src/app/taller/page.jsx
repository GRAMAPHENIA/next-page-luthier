import Image from "next/image";
import tallerDos from "/public/taller/tallerdos.svg";
import tallerTres from "/public/taller/tallertres.svg";
import tallerCuatro from "/public/taller/tallercuatro.svg";
import tallerCinco from "/public/taller/tallercinco.svg";
import tallerSeis from "/public/taller/tallerseis.svg";
import tallerSiete from "/public/taller/tallersiete.svg";
import tallerOcho from "/public/taller/tallerocho.svg";

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
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl "
          />
        </figure>

        <figure className="bg-[#14181b] rounded-2xl col-span-2 flex justify-center align-middle p-4 lg:p-4">
          <Image
            src={tallerTres}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl object-fit"
          />
        </figure>

        <figure className="bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerCuatro}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerCinco}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerSeis}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-2 lg:flex justify-center align-middle p-4 lg:p-4 hidden">
          <Image
            src={tallerSiete}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="bg-[#14181b] rounded-2xl col-span-4 p-4 lg:p-4">
          <Image
            src={tallerOcho}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl "
          />
        </figure>
      </section>
    </>
  );
}
