import Image from "next/image";
import Link from "next/link";

import Navegacion from "@/components/Navegacion";

import Imperatrice from "@/public/miniaturas/impertrice-custom-zebrano.png";
import BuconeroStandart from "@/public/miniaturas/buconero-standart.png";
import EiraStandart from "@/public/miniaturas/eira-standart.png";
import VellutoStandart from "@/public/miniaturas/velluto-standart.png";
import Es35Nativa from "@/public/miniaturas/es-35-nativa.png";

export const metadata = {
  title: "Galeria de imagenes",
};

export default function Galeria() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 relative rounded-2xl overflow-hidden bg-[var(--dark)] mt-10 py-4 px-6 border border-white/5">
        <div className="relative rounded-xl overflow-auto px-0 my-4">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--primary)] hover:bg-[var(--hover-button)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={Imperatrice}
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Impertrice Custom Zebrano
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--primary)] hover:bg-[var(--hover-button)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={BuconeroStandart}
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Buconero Standart
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--primary)] hover:bg-[var(--hover-button)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={EiraStandart}
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Eira Standart
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--primary)] hover:bg-[var(--hover-button)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={VellutoStandart}
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Velluto Standart
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--primary)] hover:bg-[var(--hover-button)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={Es35Nativa}
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
              Es35 Nativa
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
