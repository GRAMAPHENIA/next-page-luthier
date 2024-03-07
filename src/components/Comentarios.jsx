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
      img: "/miniaturas/comentarios/dilorenzo.svg",
    },
    {
      comment: "Un lujoooo, sigan asi.",
      author: "Martin Cioffi",
      img: "/miniaturas/comentarios/martin_cioffi.svg",
    },
    {
      comment: "Excelente servicio!!!",
      author: "Juan L.",
      img: "/miniaturas/comentarios/juanl.svg",
    },
    {
      comment: "Zarpado lugar.",
      author: "Franco Fuentes",
      img: "/miniaturas/comentarios/francofuentes.svg",
    },
    {
      comment:
        "Super recomendable, buena predisposición, la mejor onda, un grande Esteban!",
      author: "Emiliano Foglia",
      img: "/miniaturas/comentarios/emilianofoglia.svg",
    },
    {
      comment: "Recomiendo.",
      author: "Ezequiel Carpena",
      img: "/miniaturas/comentarios/carpena.svg",
    },
  ];

  return (
    <>
      <section className="animate w-full my-2 gap-2" id="comentarios">
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
