import Image from "next/image";

import uno from "@/public/reparaciones/1.svg";
import dos from "@/public/reparaciones/2.svg";
import tres from "@/public/reparaciones/3.svg";
import cuatro from "@/public/reparaciones/4.svg";
import cinco from "@/public/reparaciones/5.svg";
import seis from "@/public/reparaciones/6.svg";
import siete from "@/public/reparaciones/7.svg";
import ocho from "@/public/reparaciones/8.svg";

export const metadata = {
  title: "Reparaciones",
};

export default function Reparaciones() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 lg:grid lg:grid-cols-6 gap-2 object-contain">
        <figure className="animate bg-[#14181b] rounded-2xl col-span-6 p-4 ">
          <Image
            src={uno}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
            style={{ width: "100%", height: "100%" }}
          />
        </figure>

        <figure className="animate bg-[#14181b] rounded-2xl col-span-2 flex justify-center align-middle p-4 lg:p-4">
          <Image
            src={dos}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>

        <figure className="animate bg-[#14181b] rounded-2xl col-span-2 p-4">
          <Image
            src={tres}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[#14181b] rounded-2xl col-span-2 p-4">
          <Image
            src={cuatro}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>

        <figure className="animate bg-[#14181b] rounded-2xl col-span-6 p-4 ">
          <Image
            src={cinco}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
            style={{ width: "100%", height: "100%" }}
          />
        </figure>

        <figure className="animate bg-[#14181b] rounded-2xl col-span-2 p-4">
          <Image
            src={seis}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[#14181b] rounded-2xl col-span-2 lg:flex justify-center align-middle p-4 hidden">
          <Image
            src={siete}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
        <figure className="animate bg-[#14181b] rounded-2xl col-span-2 lg:flex justify-center align-middle p-4 hidden">
          <Image
            src={ocho}
            alt="Imagen del taller de lutheria"
            width={1000}
            height={600}
            className="rounded-xl"
          />
        </figure>
      </section>
    </>
  );
}
