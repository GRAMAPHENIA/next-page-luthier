import React from "react";
import Testimonios from "../components/Testimonios";

const Comentarios = () => {
  const testimoniosData = [
    {
      comment: "Estoy encantado con el producto, ¡es increíble!",
      author: "Juan Pérez",
      company: "Cliente Feliz S.A.",
      img: "/miniaturas/eira-standart.png"
    },
    {
      comment:
        "El servicio al cliente fue excepcional. Recomiendo esta tienda.",
      author: "María Gómez",
      company: "Experiencias Positivas Ltd.",
      img: "/miniaturas/eira-standart.png"
    },
    {
      comment:
        "El servicio al cliente fue excepcional. Recomiendo esta tienda.",
      author: "María Gómez",
      company: "Experiencias Positivas Ltd.",
      img: "/miniaturas/eira-standart.png"
    },
    {
      comment:
        "El servicio al cliente fue excepcional. Recomiendo esta tienda.",
      author: "María Gómez",
      company: "Experiencias Positivas Ltd.",
      img: "/miniaturas/eira-standart.png"
    },
    {
      comment:
        "El servicio al cliente fue excepcional. Recomiendo esta tienda.",
      author: "María Gómez",
      company: "Experiencias Positivas Ltd.",
      img: "/miniaturas/eira-standart.png"
    },
    {
      comment:
        "El servicio al cliente fue excepcional. Recomiendo esta tienda.",
      author: "María Gómez",
      company: "Experiencias Positivas Ltd.",
      img: "/miniaturas/eira-standart.png"
    },
  ];

  return (
    <>
      <section
        className="w-full  my-2 gap-2"
        id="comentarios"
      >
        <figure className="flex flex-col align-middle justify-center px-8 pb-8 bg-[#14181b] rounded-2xl w-full">
          <div className="mx-auto font-light">
            <h1 className="text-3xl text-white sm:text-4xl lg:text-6xl my-8 text-center">
              CLIENTES
            </h1>
            <Testimonios testimonio={testimoniosData} />
          </div>
        </figure>
      </section>
    </>
  );
};

export default Comentarios;
