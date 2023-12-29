import Image from "next/image";
import Link from "next/link";

import Navegacion from "@/components/Navegacion";

import Imperatrice from "@/public/miniaturas/impertrice-custom-zebrano.png";
import BuconeroStandart from "@/public/miniaturas/buconero-standart.png";
import EiraStandart from "@/public/miniaturas/eira-standart.png";
import VellutoStandart from "@/public/miniaturas/velluto-standart.png";
import Es35Nativa from "@/public/miniaturas/es-35-nativa.png";
import BuconeroCustomNativa from "@/public/miniaturas/buconero-custom-nativa.png";
import ClasicaDos from "@/public/miniaturas/clasica-dos.png";
import BuconeroBoutique from "@/public/miniaturas/buconero-boutique.png";
import VellutoARN from "@/public/miniaturas/velluto-arn.png";
import SmallyPequestrat from "@/public/miniaturas/smally-pequestrat.png";
import LPJuniorCustom from "@/public/miniaturas/lp-junior-custom.png";
import ClasicaDosDos from "@/public/miniaturas/clasica-dos-dos.png";
import PBassCustom from "@/public/miniaturas/p-bass-custom.png";

export const metadata = {
  title: "Galeria de imagenes",
};

export default function Galeria() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 relative rounded-2xl overflow-hidden bg-[var(--primary)] my-10 py-4 px-6">
        <div className="relative rounded-xl overflow-auto px-0 my-4">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5  rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={Imperatrice}
              alt="descripcion"
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
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={BuconeroStandart}
              alt="descripcion"
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
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={EiraStandart}
              alt="descripcion"
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
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={VellutoStandart}
              alt="descripcion"
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
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={Es35Nativa}
              alt="descripcion"
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

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={BuconeroCustomNativa}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Buconero Custom Nativa
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={ClasicaDos}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Clasica II
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={BuconeroBoutique}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Buconero Boutique
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={VellutoARN}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Velluto ARN
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={SmallyPequestrat}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Smally Pequestrat
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={LPJuniorCustom}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                LP junior custom
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={ClasicaDosDos}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                Clasica II
              </strong>
              <span className="text-sm font-medium dark:text-slate-400">
                Someone
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-auto px-0 my-4 ">
          <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
            <Image
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
              src={PBassCustom}
              alt="descripcion"
            ></Image>
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium dark:text-slate-200">
                PBass custom
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
