import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Presentacion() {
  return (
    <>
      <section>
        <Image
          className="-rotate-[20deg]"
          width="150"
          height="auto"
          src={Logo}
          alt="Foto de la guitarra Buconero"
          priority={true}
        />
        <h1 className="text-3xl font-light font-sans text-[#7d8c9d] mb-5 sm:text-2xl lg:text-7xl pb-6 pl-6 lg:pb-10">
          recursos nativos,
          <br />
          el cuidado del medio ambiente,
          <br />
          <span className="text-[var(--light)]">
            selección de maderas recuperadas
          </span>
          .
        </h1>
      </section>
    </>
  );
}
