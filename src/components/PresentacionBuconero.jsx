import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/info.svg";

export default function PresentacionBuconero() {
  return (
    <>
      <p className="text-3xl font-light font-sans text-[#7d8c9d] mb-5 sm:text-2xl lg:text-7xl p-6 lg:p-10">
        <span className="text-white">Galeria</span>, para músicos clásicos o
        contemporáneos.
      </p>

      <section className="flex justify-start ">
        <Link
          className="detalles text-xl text-slate-300 text-center w-[200px] px-4 py-3 ml-8 border-2 border-[#393c40] hover:bg-[#171c1f] hover:text-amber-100 rounded-full gap-2"
          href="/galeria"
        >
          ver galería
        </Link>
      </section>
    </>
  );
}
