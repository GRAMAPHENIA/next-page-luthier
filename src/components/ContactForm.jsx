"use client";

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario (puedes implementar aquí la llamada a la API, etc.)
    console.log("Formulario enviado:", { name, email, phone, message });
    // Puedes resetear los estados después de enviar el formulario si es necesario.
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form className="max-w-md mx-auto my-8" onSubmit={handleSubmit}>
      <p className="text-4xl lg:text-6xl font-light text-center my-10">
        Envia
        <br />
        <span className="text-[#7d8c9d]">Tu Consulta</span>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-[#393c40] rounded bg-[#171c1f] text-white"
            required
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-2">
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-[#393c40] rounded bg-[#171c1f] text-white"
          rows="4"
          maxLength="300"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="text-xl text-slate-300 text-center w-[150px] py-1 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full gap-2 mt-7"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
