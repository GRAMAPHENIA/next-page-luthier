import Image from "next/image";
import tallerDos from "@/public/taller/tallerdos.png";
import tallerTres from "@/public/taller/tallertres.png";
import tallerCuatro from "@/public/taller/tallerCuatro.png";

export const metadata = {
  title: "El Taller",
};

export default function Taller() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-6 gap-2 ">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-4 p-4 lg:p-4">
          <Image
            src={tallerDos}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl"
          />
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerTres}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl"
          />
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-4 lg:p-4">
          <Image
            src={tallerCuatro}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
            className="rounded-xl"
          />
        </figure>
      </section>
    </>
  );
}
