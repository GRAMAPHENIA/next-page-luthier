import React from "react";
import Testimonios from "../components/Testimonios";
import Image from "next/image";

import User from "/public/user.svg";

const Comentarios = () => {
  const testimoniosData = [
    {
      comment:
        "Gran profesional, dispuesto y dedicado al trabajo. Llevé 2 instrumentos para calibración y reparación y realizó un trabajo espectacular.",
      author: "Renzo Di Lorenzo",
      img: "/miniaturas/comentarios/dilorenzo.png",
    },
    {
      comment: "Un lujoooo, sigan asi.",
      author: "Martin Cioffi",
      img: "/miniaturas/comentarios/martin_cioffi.png",
    },
    {
      comment: "Excelente servicio!!!",
      author: "Juan L.",
      img: "/miniaturas/comentarios/juanl.png",
    },
    {
      comment: "Zarpado lugar.",
      author: "Franco Fuentes",
      img: "/miniaturas/comentarios/francofuentes.png",
    },
    {
      comment:
        "Super recomendable, buena predisposición, la mejor onda, un grande Esteban!",
      author: "Emiliano Foglia",
      img: "/miniaturas/comentarios/emilianofoglia.png",
    },
    {
      comment: "Recomiendo.",
      author: "Ezequiel Carpena",
      img: "/miniaturas/comentarios/carpena.png",
    },
  ];

  return (
    <>
      <section
        className="w-full grid lg:grid-cols-4 my-2 gap-2 "
        id="contactos"
      >
        <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl w-full">
          <h1 className="text-center font-extralight text-[#7d8c9d] mb-4">
            comentarios
          </h1>
        </figure>
        <aside className="flex flex-col align-middle justify-center p-4 lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
            <Image
              width={80}
              height={80}
              src={User}
              alt="User"
              priority={true}
              className="mx-auto my-auto"
            ></Image>
        </aside>
      </section>
      <section className="w-full my-2 gap-2" id="comentarios">
        <figure className="flex flex-col align-middle justify-center px-8 py-8 bg-[#14181b] rounded-2xl w-full">
          <div className="mx-auto font-light text-amber-100">
            <Testimonios testimonio={testimoniosData} />
          </div>
        </figure>
      </section>
    </>
  );
};

export default Comentarios;
