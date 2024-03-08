import Image from "next/image";
import CroquisvellutoVert from "@/public/croquis/guitarras-numeracion/velluto-vert.svg";
import CroquisvellutoHorz from "@/public/croquis/guitarras-numeracion/velluto-horz.svg";
import BuconeroCuerpo from "@/public/guitarras/velluto.svg";
import Gotoh from "@/public/svgs/marcas/gotoh.svg";
import Hosco from "@/public/svgs/marcas/hosco.svg";
import Diliberto from "@/public/svgs/marcas/diliberto.svg";
import Wilkinson from "@/public/svgs/marcas/wilkinson.svg";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasVelluto from "@/app/instrumentos/components/ConectorMarcasVelluto";

export const metadata = {
  title: "Modelo Velluto",
};

export default function velluto() {
  const lista = [
    {
      descripcion: "Terminacion Tahitian Moral Mate de Twang Factory",
    },
    {
      descripcion: "Cuerpo de Okume.",
    },
    {
      descripcion: "Mango de Jequetiva.",
    },
    {
      descripcion: "Diapason de Guajubira.",
    },
    {
      descripcion: "Trastes Sintoms LTD 2.2 M",
    },
    {
      descripcion: "Clavijas Gotoh Vintage 3+3",
    },
    {
      descripcion: "Tensor doble acción termosellado.",
    },
    {
      descripcion: "Cejuela de grafito",
    },
    {
      descripcion: "Dots de Madreperla",
    },
    {
      descripcion: "Microfonos Diliberto",
    },
    {
      descripcion: "Electrónica Gotoh/Hosco",
    },
    {
      descripcion: "Perillas metalicas con detelle en nacar",
    },
    {
      descripcion: "Puente Tune-o-Matic Gotoh",
    },
  ];

  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 gap-2 ">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisvellutoVert}
            alt="croquis velluto numerado"
            width="auto"
            height="auto"
            className="mx-auto h-[600px] lg:hidden"
          />
          <Image
            src={CroquisvellutoHorz}
            alt="croquis velluto numerado"
            width="auto"
            height="auto"
            className="hidden lg:block"
          />
        </figure>
        <section className="animate col-span-8">
          <ConectorMarcasVelluto />
        </section>

        <figure className="animate relative bg-[#14181b] rounded-2xl col-span-8 lg:col-span-5 p-10 lg:p-10">
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

        <figure className="animate relative bg-[#14181b] rounded-2xl col-span-8 lg:col-span-3 p-10 lg:p-10 ">
          <Image
            src={BuconeroCuerpo}
            alt="croquis velluto numerado"
            width={150}
            height={150}
            className="mx-auto h-[400px] w-auto lg:hover:scale-110 duration-200"
          />
        </figure>
      </section>
      <section className="animate mb-2">
        <HeaderInstrumentos />
      </section>
    </>
  );
}
