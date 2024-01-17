"use client";

import React, { useState } from "react";
import Image from "next/image";

import Slider from "@/components/Slider";

const Modal = ({ guitar, onClose }) => {
  const { titulo, descripcion, foto_de_portada, galeria } = guitar;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-80 z-50">
  <div className="relative flex flex-col justify-center bg-[var(--primary)] rounded-md text-center h-[95dvh] w-[100dvh] m-8 border border-[--border-light] backdrop-filter backdrop-blur-md">
    {/* <h2 className="flex justify-center align-middle text-xl font-extralight lg:text-4xl my-6">
      {titulo}
    </h2> */}

    <Slider images={galeria} />
    {/* <p className="text-lg m-10">{descripcion}</p> */}
    <button
      className="absolute px-4 py-2 m-2 lg:m-4 right-0 top-0 bg-[var(--primary)] text-center  rounded-full hover:bg-[var(--secondary)] cursor-pointer border border-[--border-light]"
      onClick={onClose}
    >
      X
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

  const { titulo, descripcion, foto_de_portada, galeria } = guitar;

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
