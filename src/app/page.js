import Image from "next/image";
import Header from "@/components/Header.jsx";
import Body from "@/components/Body.jsx";

import Instrumentos from "@/components/Instrumentos.jsx";
import Reparaciones from "@/components/Reparaciones.jsx";
import Galeria from "@/components/Galeria.jsx";
import Sobremi from "@/components/Sobremi.jsx";
import Comentarios from "@/components/Comentarios.jsx";
import Contactos from "@/components/Contactos.jsx";
import EnConstruccion from "@/components/EnConstruccion";

export default function Home() {
  return (
    <main>
      {/* <EnConstruccion /> */}
      <Header />
      <Body />
      <Instrumentos />
      <Reparaciones />
      <Galeria />
      {/* <Sobremi /> */}
      <Comentarios />
      <Contactos />
    </main>
  );
}
