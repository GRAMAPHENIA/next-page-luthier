import React from "react";
import Testimonios from "../components/Testimonios";

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
