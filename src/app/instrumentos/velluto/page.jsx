import Image from "next/image";
import CroquisvellutoVert from "@/public/croquis/guitarras-numeracion/velluto-vert.svg";
import CroquisvellutoHorz from "@/public/croquis/guitarras-numeracion/velluto-horz.svg";
import BuconeroCuerpo from "@/public/guitarras/velluto.svg";
import Gotoh from "@/public/svgs/marcas/gotoh.svg";
import Hosco from "@/public/svgs/marcas/hosco.svg";
import Diliberto from "@/public/svgs/marcas/diliberto.svg";
import Wilkinson from "@/public/svgs/marcas/wilkinson.svg";

export const metadata = {
  title: "Modelo Velluto",
};

export default function velluto() {
  const lista = [
    {
      descripcion: "Acabado poliuretano mate y brillante.",
    },
    {
      descripcion: "Cuerpo de caroba en una pieza.",
    },
    {
      descripcion: "24 trastes hosco 2.4 M.",
    },
    {
      descripcion: "Clavijas Gotoh.",
    },
    {
      descripcion: "Diapasón de ébano macasar, radio 20 .",
    },
    {
      descripcion:
        "Incrustación en traste 12 de ébano Gabón y resina fotoluminiscente.",
    },
    {
      descripcion: "Mango laminado de jequetiva/ guatambú/viraro, perfil fino.",
    },
    {
      descripcion: "Micrófonos Diliverto C9 special.",
    },
    {
      descripcion: "Perillas en madera.",
    },
    {
      descripcion: "Puente tremolo Wilkinson wvp.",
    },
    {
      descripcion: "Tensor doble acción termosellado.",
    },
    {
      descripcion: "Electrónica gotoh/swichcraft.",
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
            alt="croquis velluto numerado"
            width={150}
            height="auto"
            className="mx-auto h-[400px] w-auto"
          />
        </figure>
        <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Diliberto}
            alt="croquis velluto numerado"
            width={150}
            height="auto"
          />
        </figure>
        <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Gotoh}
            alt="croquis velluto numerado"
            width={150}
            height="auto"
          />
        </figure>
        <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Hosco}
            alt="croquis velluto numerado"
            width={150}
            height="auto"
          />
        </figure>
        <figure className="relative flex justify-center bg-[#14181b] rounded-2xl col-span-8 lg:col-span-2">
          <Image
            src={Wilkinson}
            alt="croquis velluto numerado"
            width={150}
            height="auto"
          />
        </figure>
      </section>
    </>
  );
}
