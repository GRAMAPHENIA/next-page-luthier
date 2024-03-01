import Image from "next/image";
import CroquiseiraVert from "@/public/croquis/guitarras-numeracion/eira-vert.svg";
import CroquiseiraHorz from "@/public/croquis/guitarras-numeracion/eira-horz.svg";
import eiraCuerpo from "@/public/guitarras/eira.svg";
import Gotoh from "@/public/svgs/marcas/gotoh.svg";
import Hosco from "@/public/svgs/marcas/hosco.svg";
import Diliberto from "@/public/svgs/marcas/diliberto.svg";
import Wilkinson from "@/public/svgs/marcas/wilkinson.svg";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasEira from "@/app/instrumentos/components/ConectorMarcasEira";

export const metadata = {
  title: "Modelo eira",
};

export default function Buconero() {
  const lista = [
    {
      descripcion: "Pintura poliuretano brillante en cuerpo, mate en mango.",
    },
    {
      descripcion: "Cuerpo de Lenga fueguina.",
    },
    {
      descripcion: "Mango de Maple, perfil C Moderdn.",
    },
    {
      descripcion: "Diapasón 22 Trastes M, radio 12.",
    },
    {
      descripcion: "Clavijas Locking.",
    },
    {
      descripcion: "Microfonos DS Pick Ups PickGuard Tricapa Tortoise.",
    },
    {
      descripcion: "Electronica ICA Alfa. ",
    },
    {
      descripcion: "Puente Wilkinson de 3 selletas compensadas.",
    },
    {
      descripcion: "Maderas provistas por maderas Del Vigo.",
    },
  ];

  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 gap-2 ">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-8 p-10 lg:p-10">
          <Image
            src={CroquiseiraVert}
            alt="croquis eira numerado"
            width="auto"
            height="auto"
            className="mx-auto h-[600px] lg:hidden"
          />
          <Image
            src={CroquiseiraHorz}
            alt="croquis eira numerado"
            width="auto"
            height="auto"
            className="hidden lg:block"
          />
        </figure>
        <section className="col-span-8">
          <ConectorMarcasEira />
        </section>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-8 lg:col-span-5 p-10 lg:p-10">
          <ol className="space-y-2 text-sm lg:text-base">
            {lista.map((item, index) => (
              <li key={index}>
                <p className="text-[var(--text-light)]">
                  <span className="text-amber-100 mr-4 ">{index + 1}.</span>
                  {item.descripcion}
                </p>
              </li>
            ))}
          </ol>
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-8 lg:col-span-3 p-10 lg:p-10 ">
          <Image
            src={eiraCuerpo}
            alt="croquis eira numerado"
            width={150}
            height={150}
            className="mx-auto h-[400px] w-auto lg:hover:scale-110 duration-200"
          />
        </figure>

        {/* <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Diliberto}
            alt="croquis eira numerado"
            width={150}
            height={150}
          />
        </figure>
        <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Gotoh}
            alt="croquis eira numerado"
            width={150}
            height={150}
          />
        </figure>
        <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Hosco}
            alt="croquis eira numerado"
            width={150}
            height={150}
          />
        </figure>
        <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Wilkinson}
            alt="croquis eira numerado"
            width={150}
            height={150}
          />
        </figure> */}
      </section>
      <section className="mb-2">
        <HeaderInstrumentos />
      </section>
    </>
  );
}
