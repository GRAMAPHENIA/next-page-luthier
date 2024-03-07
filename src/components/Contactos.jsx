import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";

import Instagram from "@/public/instagram.svg";
import Facebook from "@/public/facebook.svg";
import Youtube from "@/public/youtube.svg";
import Wsap from "@/public/wsap.svg";
import Email from "@/public/email.svg";
import Pua from "@/public/pua.svg";

export default function BodyBuconero() {
  return (
    <>
      <section
        id="contacto"
        className=" animate grid grid-cols-3 lg:grid-cols-6 w-full gap-2 text-center"
      >
        <Link
          href="https://www.instagram.com/di_corato_luthier/"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#1a2024] hover:text-amber-100"
        >
          <Image src={Instagram} alt="Icono de la red social Instagram"></Image>
        </Link>
        <Link
          href="https://www.facebook.com/dicorato.luthier"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#1a2024] hover:text-amber-100"
        >
          <Image src={Facebook} alt="Icono de la red social Facebook"></Image>
        </Link>
        <Link
          href="https://www.youtube.com/@dicorato.luthier"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#1a2024] hover:text-amber-100"
        >
          <Image src={Youtube} alt="Icono de la red social Youtube"></Image>
        </Link>
        <Link
          href="https://wa.me/+5491154637450"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#1a2024] hover:text-amber-100"
        >
          <Image src={Wsap} alt="Icono de la red social Whatsapp"></Image>
        </Link>
        <Link
          href="mailto:dicoratolutjier@gmail.com"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#1a2024] hover:text-amber-100"
        >
          <Image src={Email} alt="Icono del Email"></Image>
        </Link>
        <Link
          href="/"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#1a2024] hover:text-amber-100"
        >
          <Image src={Pua} alt="Icono del Email"></Image>
        </Link>
      </section>
      <section className="animate w-full grid lg:grid-cols-4 my-2 gap-2" id="contactos">
        <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-1 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
          <ContactForm />
        </figure>
        {/* <aside className="flex flex-col align-middle justify-center p-4 lg:col-span-6 bg-[#14181b] rounded-2xl w-full"></aside> */}
      </section>
    </>
  );
}
