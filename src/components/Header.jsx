import Image from "next/image";

import Modal from "@/components/Modal.jsx";

import Pua from "@/public/pua.svg";
import Instagram from "@/public/instagram.svg";
import Youtube from "@/public/youtube.svg";
import Wsap from "@/public/wsap.svg";
import LogoApellido from "@/public/dicorato-logo-solo-apellido.svg";

export default function Header() {
  return (
    <header className="grid grid-cols-4 bg-[#14181b] p-2 mt-2 rounded-full">
      <figure className="flex justify-start col-start-1 col-end-2">
        <Image
          className="ml-3"
          src={LogoApellido}
          alt="Logo de la marca con el apellido solamente"
          width="auto"
          height={40}
          priority={true}
        />
      </figure>
      <Modal />
    </header>
  );
}
