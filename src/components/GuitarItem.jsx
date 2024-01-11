"use client";

import React, { useState } from "react";
import Image from "next/image";

const Modal = ({ guitar, onClose }) => {
  const { alt, titulo, descripcion, foto_de_portada } = guitar;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ">
      <div className=" flex flex-col justify-between bg-[var(--secondary)] rounded-md text-center h-[600px] w-[600px]">
        <h2 className="text-2xl font-bold m-4">{titulo}</h2>
        <p className="text-lg p-10">{descripcion}</p>
        {/* Agregar más detalles según sea necesario */}
        <p>detalles</p>
        {/* Otras especificaciones */}
        <button
          className="px-4 py-2 m-10 w-60 mx-auto rounded-full bg-[var(--hover-button)]"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const GuitarItem = ({ guitar }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { alt, titulo, descripcion, foto_de_portada } = guitar;

  return (
    <>
      <section
        className="relative rounded-xl overflow-auto px-0 my-4 group"
        onClick={openModal}
      >
        <figure className="overflow-hidden relative max-w-sm mx-auto ring-1 ring-black/5 rounded-xl flex items-center hover:text-[var(--text-extra-light)] bg-[var(--dark)] hover:bg-[var(--secondary)] cursor-pointer border border-white/10">
          <Image
            className="absolute -left-6 w-24 h-24 rounded-full shadow-lg border-4 border-white/10"
            src={foto_de_portada}
            alt={titulo}
            width={96}
            height={96}
          />
          <div className="flex flex-col py-5 pl-24">
            <strong className="text-lg font-light text-[var(--text-light)] group-hover:text-[var(--text-extralight)]">
              {titulo}
            </strong>
          </div>
        </figure>
      </section>

      {modalOpen && <Modal guitar={guitar} onClose={closeModal} />}
    </>
  );
};

export default GuitarItem;
