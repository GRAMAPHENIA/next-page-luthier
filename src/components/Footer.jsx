import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoApellido from "@/public/dicorato-logo-solo-apellido.svg";

const Items = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Galeria",
    url: "/",
  },
  {
    title: "Taller",
    url: "/",
  },
  {
    title: "Contactor",
    url: "/",
  },
  {
    title: "Redes",
    url: "/",
  },
];

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 bg-[#14181b] px-10 py-4 rounded-2xl mb-2">
      <Image
        className="ml-3"
        src={LogoApellido}
        alt="Logo de la marca con el apellido solamente"
        width="auto"
        height={40}
        priority={true}
      />
      <h1 className="col-span-4 text-2xl px-10">Footer</h1>
      <ul className="col-span-4 flex justify-around">
        {Items.map((item, index) => (
          <li key={index}>
            <Link className="text-white" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))} 
      </ul>
    </footer>
  );
};

export default Footer;
