import Image from "next/image";
import CroquisBuconero from "@/public/svgs/buconero-detalles.svg";

export const metadata = {
  title: "Modelo Buconero",
};

export default function Buconero() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 gap-2 ">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisBuconero}
            alt="croquis buconero numerado"
            width={1000}
            height="auto"
          />
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-4 p-10 lg:p-10">
          <ol className="space-y-2">
            <li>
              <span className="text-amber-100">1.</span> Acabado poliuretano
              mate y brillante.
            </li>
            <li>
              <span className="text-amber-100">2.</span> Cuerpo de caroba en una
              pieza.
            </li>
            <li>
              <span className="text-amber-100">3.</span> 24 trastes hosco 2.4
              M.
            </li>
            <li>
              <span className="text-amber-100">6.</span> Clavijas Gotoh.
            </li>
            <li>
              <span className="text-amber-100">4.</span> Diapasón de ébano
              macasar, radio 20 .
            </li>
            <li>
              <span className="text-amber-100">5.</span> Incrustación en traste
              12 de ébano Gabón y resina fotoluminiscente.
            </li>
            <li>
              <span className="text-amber-100">6.</span> Mango laminado de
              jequetiva/ guatambú/viraro, perfil fino.
            </li>
            <li>
              <span className="text-amber-100">7.</span> Micrófonos Diliverto C9
              special.
            </li>
            <li>
              <span className="text-amber-100">8.</span> Perillas en madera.
            </li>
            <li>
              <span className="text-amber-100">9.</span> Puente tremolo
              Wilkinson wvp.
            </li>
            <li>
              <span className="text-amber-100">10.</span> Tapa de raíz de maple
              y resina epoxi.
            </li>
            <li>
              <span className="text-amber-100">11.</span> Tensor doble acción
              termosellado.
            </li>
            <li>
              <span className="text-amber-100">13.</span>
            </li>
          </ol>
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-4 p-10 lg:p-10">
          3
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          4
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          5
        </figure>
        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          6
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          7
        </figure>
      </section>
    </>
  );
}
