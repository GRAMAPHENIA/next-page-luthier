import Image from "next/image";
import CroquisBuconero from "/public/croquis/croquis-buconero-numerado.png";

export const metadata = {
  title: "Acerca de",
};

export default function AcercaDe() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-6 gap-2 ">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-4 p-10 lg:p-10">
          1
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          2
        </figure>

        <figure className="relative bg-[#14181b] rounded-2xl col-span-2 p-10 lg:p-10">
          3
        </figure>
      </section>
    </>
  );
}
