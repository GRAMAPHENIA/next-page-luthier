import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Presentacion() {
  return (
    <>
      <Image
        className="mt-4 ml-4 -rotate-[22deg]"
        src={Logo}
        alt="Logo de dicorato luthier"
        height="150"
        width="auto"
        priority={true}
      />
      <h1 className="text-3xl font-light font-sans text-[#7d8c9d] mb-5 sm:text-2xl lg:text-7xl p-6 lg:p-10">
        recursos nativos,
        <br />
        el cuidado del medio ambiente,
        <br />
        <span className="text-[#7d8c9d]">selección de maderas recuperadas</span>
        .
      </h1>
    </>
  );
}
