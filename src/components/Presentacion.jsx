import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Presentacion() {
  return (
    <>
      <Image
        className="mt-4 ml-4"
        src={Logo}
        alt="Logo de dicorato luthier"
        height="200"
        width="auto"
      />
      <h1 className="text-3xl text-white sm:text-4xl lg:text-6xl p-10">
        recursos nativos,
        <br />
        el cuidado del medio ambiente,
        <br />
        <span className="text-[#7d8c9d]">
          selección de maderas recuperadas
        </span>
        .
      </h1>
    </>
  );
}
