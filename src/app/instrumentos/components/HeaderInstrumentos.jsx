import React from "react";
import Image from "next/image";
import Link from "next/link";

import BuconeroTipografia from "@/public/instrumentos/buconero.svg";
import VellutoTipografia from "@/public/instrumentos/velluto.svg";
import EiraTipografia from "@/public/instrumentos/eira.svg";

const HeaderInstrumentos = () => {
  return (
    <>
      <section className="grid grid-cols-3 mt-2 gap-x-2">
        <figure className="flex justify-center align-middle col-span-1 bg-[#14181b] rounded-full p-4">
          <Link
            className="flex justify-center align-middle"
            href="/instrumentos/buconero"
          >
            <Image
              priority={true}
              src={BuconeroTipografia}
              alt="Fotografía de una guitarra, modelo Buconero. Diseñada y fabricada por Esteban M. Di corato."
              width={150}
              height={150}
            />
          </Link>
        </figure>
        <figure className="flex justify-center align-middle col-span-1 bg-[#14181b] rounded-full p-4">
          <Link
            className="flex justify-center align-middle"
            href="/instrumentos/velluto"
          >
            <Image
              className="m-auto"
              priority={true}
              src={VellutoTipografia}
              alt="Fotografía de una guitarra, modelo Buconero. Diseñada y fabricada por Esteban M. Di corato."
              width={150}
              height={150}
            />
          </Link>
        </figure>
        <figure className="flex justify-center align-middle col-span-1 bg-[#14181b] rounded-full p-4">
          <Link
            className="flex justify-center align-middle"
            href="/instrumentos/eira"
          >
            <Image
              className="m-auto"
              priority={true}
              src={EiraTipografia}
              alt="Fotografía de una guitarra, modelo Buconero. Diseñada y fabricada por Esteban M. Di corato."
              width={100}
              height={100}
            />
          </Link>
        </figure>
      </section>
    </>
  );
};

export default HeaderInstrumentos;
