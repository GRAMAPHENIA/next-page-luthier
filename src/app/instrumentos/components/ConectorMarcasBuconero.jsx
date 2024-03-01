import React from "react";
import Image from "next/image";
import Link from "next/link";

const marcas = [
  {
    src: require("@/public/svgs/marcas/diliberto.svg"),
    alt: "Logo de marca Diliberto",
    id: "diliberto",
    href: "https://www.dilibertopickups.com/",
  },
  {
    src: require("@/public/svgs/marcas/gotoh.svg"),
    alt: "Logo de marca Gotoh",
    id: "gotoh",
    href: "https://g-gotoh.com/?lang=en",
  },
  {
    src: require("@/public/svgs/marcas/hosco.svg"),
    alt: "Logo de marca Hosco",
    id: "hosco",
    href: "/",
  },
  {
    src: require("@/public/svgs/marcas/wilkinson.svg"),
    alt: "Logo de marca Wilkinson",
    id: "wilkinson",
    href: "https://wilkinsondirect.com/",
  },
];

const ConectorMarcasBuconero = () => {
  return (
    <section className="grid grid-cols-4 gap-2">
      {marcas.map((marca) => (
        <Link key={marca.id} href={marca.href}>
          <figure className="relative flex justify-center bg-[#14181b] rounded-2xl lg:rounded-full">
            <Image src={marca.src} alt={marca.alt} width={100} height={100} />
          </figure>
        </Link>
      ))}
    </section>
  );
};

export default ConectorMarcasBuconero;
