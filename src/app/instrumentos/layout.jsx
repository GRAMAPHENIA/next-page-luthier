import Image from "next/image";
import Link from "next/link";

import Navegacion from "@/components/Navegacion";

import Volver from "@/public/volver.svg";
import Arrow from "@/public/galeria/arrow-right.svg";

export default function Layout({ children }) {
  return (
    <>
    <section className="mt-2">
      
    </section>
      <Navegacion />
      <div>{children}</div>
    </>
  );
}
