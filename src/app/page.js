import Image from "next/image";
import Header from "@/components/Header.jsx";
import Body from "@/components/Body.jsx";

import Galeria from "@/components/Galeria.jsx";
import Contactos from "@/components/Contactos.jsx";
import Comentarios from "@/components/Comentarios.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <Body />
      <Galeria />
      <Comentarios />
      <Contactos />
    </main>
  );
}
