import Link from "next/link";
import Image from "next/image";

import Eira from "/public/croquis/svgs/eira.svg";

export default function Instrumentos() {
  return (
    <section className="w-full grid lg:grid-cols-4 my-2 gap-2">
      <aside className=" lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
        <Image
          width={200}
          height={200}
          src={Eira}
          alt="User"
          priority={true}
          className="mx-auto my-auto p-8"
        ></Image>
      </aside>
      <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-2 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
        <p className="text-3xl font-light font-sans text-[#7d8c9d] mb-5 sm:text-2xl lg:text-7xl p-6 lg:p-10">
          <span className="text-white">Instrumentos,</span> para músicos
          clásicos o contemporáneos.
        </p>

        <section className="flex justify-start ">
          <Link
            className="detalles text-xl text-slate-300 text-center w-[200px] px-4 py-3 ml-8 border-2 border-[#393c40]  hover:bg-[#171c1f] hover:text-amber-100 rounded-full gap-2 "
            href="/instrumentos"
          >
            ver modelos
          </Link>
        </section>
      </figure>
    </section>
  );
}
