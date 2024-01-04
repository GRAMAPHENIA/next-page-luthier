import React from "react";
import Image from "next/image";

import Logo from "/public/logo.png";

const Sobremi = () => {
  return (
    <>
      <section className="w-full grid lg:grid-cols-4 my-2 gap-2 " id="sobremi">
        <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-1 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
          <p className="text-center lg:text-4xl font-extralight text-[#7d8c9d] my-10 mx-20">
            A mediados de la década de los 90 me surge la intriga de comenzar la
            construcción de guitarras y bajos, y capacitándome de varias maneras
            logro afianzarme en conocimientos y experiencia. Es así que en el
            año 2010 decido crear Di Corato instrumentos de cuerda pulsada.
          </p>
          <Image
            width={250}
            height={250}
            src={Logo}
            alt="Logo"
            priority={true}
            className="mx-auto my-auto pb-10"
          ></Image>
        </figure>
      </section>
    </>
  );
};

export default Sobremi;
