"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

import Header from "@/components/Header.jsx";
import Body from "@/components/Body.jsx";

import Instrumentos from "@/components/Instrumentos.jsx";
import Reparaciones from "@/components/Reparaciones.jsx";
import Galeria from "@/components/Galeria.jsx";
import Comentarios from "@/components/Comentarios.jsx";
import Contactos from "@/components/Contactos.jsx";
import EnConstruccion from "@/components/EnConstruccion";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledUp(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {/* <EnConstruccion /> */}
      <section className={`fade-in ${!isScrolledUp && "visible"}`}>
        <Header />
      </section>

      <section className={`fade-in ${!isScrolledUp && "visible"}`}>
        <Body />
      </section>

      <section className="fade-in">
        <Instrumentos />
      </section>

      <section className="fade-in">
        <Reparaciones />
      </section>

      <section className="fade-in">
        <Galeria />
      </section>

      <section className="fade-in">
        <Comentarios />
      </section>
      <section className="fade-in">
        <Contactos />
      </section>
      <section className="fade-in">
        <Footer />
      </section>
    </main>
  );
}
