import Image from "next/image";

import CroquisBuconeroVert from "@/public/croquis/guitarras-numeracion/buconero-vert.svg";
import CroquisBuconeroHorz from "@/public/croquis/guitarras-numeracion/buconero-horz.svg";

import BuconeroCuerpo from "@/public/guitarras/buconero.svg";

import Gotoh from "@/public/svgs/marcas/gotoh.svg";
import Hosco from "@/public/svgs/marcas/hosco.svg";
import Diliberto from "@/public/svgs/marcas/diliberto.svg";
import Wilkinson from "@/public/svgs/marcas/wilkinson.svg";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasBuconero from "@/app/instrumentos/components/ConectorMarcasBuconero";

export const metadata = {
  title: "Modelo Buconero",
};

export default function Buconero() {
  const lista = [
    {
      descripcion: "Acabado poliuretano mate y brillante.",
    },
    {
      descripcion: "Cuerpo de caroba en una pieza.",
    },
    {
      descripcion: "Mango laminado de jequetiva/ guatambú/viraro, perfil fino.",
    },
    {
      descripcion: "Diapasón de ébano macasar, radio 20 .",
    },
    {
      descripcion: "24 trastes hosco 2.4 M.",
    },
    {
      descripcion: "Clavijas Gotoh.",
    },
    {
      descripcion: "Tensor doble acción termosellado.",
    },
    {
      descripcion:
        "Incrustación en traste 12 de ébano Gabón y resina fotoluminiscente.",
    },
    {
      descripcion: "Micrófonos Diliverto C9 special.",
    },
    {
      descripcion: "Electrónica gotoh/swichcraft.",
    },
    {
      descripcion: "Perillas en madera.",
    },
    {
      descripcion: "Puente tremolo Wilkinson wvp.",
    },
    {
      descripcion: "Tapa de raiz de maple y resina epoxi",
    },
  ];

  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 gap-2">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisBuconeroVert}
            alt="Logo de marca"
            width="auto"
            height="auto"
            className="mx-auto h-[600px] lg:hidden"
          />
          <Image
            src={CroquisBuconeroHorz}
            alt="Logo de marca"
            width="auto"
            height="auto"
            className="hidden lg:block"
          />
        </figure>

        <section className="col-span-8">
          <ConectorMarcasBuconero />
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
            src={BuconeroCuerpo}
            alt="Logo de marca"
            width={150}
            height={150}
            className="mx-auto h-[400px] w-auto lg:hover:scale-110 duration-200"
          />
        </figure>
      </section>
      <section className="mb-2">
        <HeaderInstrumentos />
      </section>
    </>
  );
}
