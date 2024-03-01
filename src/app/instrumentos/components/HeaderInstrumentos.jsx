import React from "react";
import Image from "next/image";
import Link from "next/link";

import BuconeroTipografia from "@/public/instrumentos/buconero.svg";
import VellutoTipografia from "@/public/instrumentos/velluto.svg";
import EiraTipografia from "@/public/instrumentos/eira.svg";

const instrumentos = [
  {
    nombre: "Buconero",
    imagen: BuconeroTipografia,
    href: "/instrumentos/buconero",
    width: 150,
    height: 150,
  },
  {
    nombre: "Velluto",
    imagen: VellutoTipografia,
    href: "/instrumentos/velluto",
    width: 150,
    height: 150,
  },
  {
    nombre: "Eira",
    imagen: EiraTipografia,
    href: "/instrumentos/eira",
    width: 100,
    height: 100,
  },
];

const HeaderInstrumentos = () => {
  return (
    <>
      <section className="grid grid-cols-3 mt-2 gap-x-2">
        {instrumentos.map((instrumento) => (
          <figure
            key={instrumento.nombre}
            className="flex justify-center align-middle col-span-1 bg-[#14181b] rounded-xl lg:rounded-full p-4"
          >
            <Link
              className="flex justify-center align-middle"
              href={instrumento.href}
            >
              <Image
                priority={true}
                src={instrumento.imagen}
                alt={`Fotografía de una guitarra, modelo ${instrumento.nombre}. Diseñada y fabricada por Esteban M. Di corato.`}
                width={instrumento.width}
                height={instrumento.height}
              />
            </Link>
          </figure>
        ))}
      </section>
    </>
  );
};

export default HeaderInstrumentos;
