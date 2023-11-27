import Image from "next/image";
import Header from "@/components/Header.jsx";
import Body from "@/components/Body.jsx";
import Navegacion from "@/components/Navegacion.jsx";

import Galeria from "@/components/Galeria.jsx";
import Contactos from "@/components/Contactos.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <Body />
      <Navegacion />
      <Galeria />
      <Contactos />
    </main>
  );
}
