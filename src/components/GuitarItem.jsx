import React from "react";
import Image from "next/image";

const GuitarItem = ({ guitar }) => {
  const { alt, titulo, descripcion, foto_de_portada } = guitar;

  return (
    <div>
      <div className="relative rounded-xl overflow-auto px-0 my-4">
        <div className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5  rounded-xl flex items-center bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
          <Image
            className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
            src={foto_de_portada}
            alt={titulo}
            width={96}
            height={96}
          ></Image>
          <div className="flex flex-col py-5 pl-24">
            <strong className="text-sm font-medium dark:text-slate-200">
              {titulo}
            </strong>
            <span className="text-sm font-medium dark:text-slate-400">
              Someone
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuitarItem;
