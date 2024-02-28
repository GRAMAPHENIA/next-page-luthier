import Image from "next/image";
import CroquisBuconero from "/public/croquis/croquis-buconero-numerado.png";
import Esteban from "/public/croquis/esteban.svg";

export const metadata = {
  title: "Acerca de",
};

export default function AcercaDe() {
  return (
    <>
      <section className="w-full grid lg:grid-cols-4 my-2 gap-2 " id="sobremi">
        <figure className="flex flex-col align-middle items-center justify-center  lg:col-start-1 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
          <p className="text-center lg:text-2xl font-extralight text-[#7d8c9d] my-10 mx-10 lg:mx-32">
            A mediados de la década de los 90 me surge la intriga de comenzar la
            construcción de guitarras y bajos, y capacitándome de varias maneras
            logro afianzarme en conocimientos y experiencia. Es así que en el
            año 2010 decido crear Di Corato instrumentos de cuerda pulsada.
          </p>
          <Image
            width={600}
            height={250}
            src={Esteban}
            alt="Logo"
            priority={true}
            className="px-4 pb-10"
          ></Image>
        </figure>
      </section>
    </>
  );
}
