import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoApellido from "@/public/logo.svg";

const sections = [
  {
    title: "Navegación",
    links: [
      { title: "Inicio", url: "/" },
      { title: "Modelos", url: "/#modelos" },
      { title: "Galeria", url: "/#galeria" },
      { title: "Contacto", url: "/#contacto" },
    ],
  },

  {
    title: "Servicios",
    links: [
      // { title: "Presupuestos", url: "/#formulario" },
      { title: "Construccion", url: "/" },
      { title: "Reparacion", url: "/#reparaciones" },
    ],
  },

  {
    title: "Redes",
    links: [
      { title: "WhatsApp", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Facebook", url: "/" },
      { title: "Youtube", url: "/" },
      { title: "Email", url: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 md:grid-cols-4 bg-[#14181b] px-10 rounded-2xl mb-4">
        <div className="md:col-span-1 md:text-center">
          <Image
            className="mx-auto"
            src={LogoApellido}
            alt="Logo de la marca con el apellido solamente"
            width="auto"
            height={300}
            priority={true}
          />
        </div>
        {sections.map((section, index) => (
          <div
            key={index}
            className="md:col-span-1 mx-auto text-center md:text-left my-10"
          >
            <h3 className="mb-5 text-2xl text-gray-300">{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    className="text-gray-400 hover:text-amber-100 font-light"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <p className="text-center text-gray-600 pb-2 font-light">
        Página creada con <span className="text-xl text-gray-400">⌨</span> por{" "}
        <span className="text-gray-400 hover:text-sky-300 cursor-pointer">
          <Link
            className="text-gray-400 hover:text-sky-400 font-light"
            href="https://www.conceptohexagono.com"
          >
            conceptohexagono<span className="text-sky-400">.</span>
          </Link>
        </span>
      </p>
    </>
  );
};

export default Footer;
