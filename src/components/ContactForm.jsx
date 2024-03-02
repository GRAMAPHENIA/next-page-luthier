"use client";

import React, { useState } from "react";
import submitAction from "@/actions/submitAction.js";
import { useFormState, useFormStatus } from "react-dom";

const ContactForm = () => {
  const [state, action] = useFormState(submitAction, { message: "" });
  const { pending } = useFormStatus();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newState = await submitAction(state, {});
    action(newState);
    setFormSubmitted(true);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 4000);

    // Limpiar los campos del formulario después de enviarlo
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
      {formSubmitted && showSuccessMessage && (
        <div className="bg-green-200/10 text-white text-center p-2 rounded">
          <span className="mr-2"><span className="text-emerald-400">&#10003;</span></span>El formulario se ha enviado con
          éxito
        </div>
      )}
      <p className="flex flex-col text-8xl lg:text-8xl font-light text-center my-10">
        Envia
        <span className="text-4xl text-[#7d8c9d]">Tu Consulta</span>
      </p>
      <div className="mb-4">
        <label
          className="block text-[var(--text-light)] text-sm font-light mb-2"
          htmlFor="name"
        >
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-[#393c40] rounded bg-[#171c1f] text-white"
          required
        />
      </div>
      <div className="mb-4 flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:pr-2">
          <label
            className="block text-[var(--text-light)] text-sm font-light mb-2"
            htmlFor="email"
          >
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-[#393c40] rounded bg-[#171c1f] text-white"
            required
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-2 mt-4">
          <label
            className="block text-[var(--text-light)] text-sm font-light mb-2"
            htmlFor="phone"
          >
            Teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-2 border border-[#393c40] rounded bg-[#171c1f] text-white"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-[var(--text-light)] text-sm font-light mb-2"
          htmlFor="message"
        >
          Mensaje:
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border border-[#393c40] rounded bg-[#171c1f] text-white"
          rows="4"
          maxLength="300"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="text-xl text-slate-300 text-center w-[150px] py-1 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full gap-2 mt-7"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
