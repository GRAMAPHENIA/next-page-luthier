import Image from "next/image";
import Link from "next/link";

import Instagram from "@/public/instagram.svg";
import Facebook from "@/public/facebook.svg";
import Youtube from "@/public/youtube.svg";
import Wsap from "@/public/wsap.svg";
import Email from "@/public/email.svg";

export default function BodyBuconero() {
  return (
    <>
      <section className="grid grid-cols-3 lg:grid-cols-6 w-full gap-2 text-center">
        <Link
          href="/"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
        >
          <Image src={Instagram}></Image>
        </Link>
        <Link
          href="/"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
        >
          <Image src={Facebook}></Image>
        </Link>
        <Link
          href="/"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
        >
          <Image src={Youtube}></Image>
        </Link>
        <Link
          href="/"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
        >
          <Image src={Wsap}></Image>
        </Link>
        <Link
          href="/"
          className="flex justify-center p-2 bg-[#14181b] rounded-full hover:bg-[#171c1f] hover:text-amber-100"
        >
          <Image src={Email}></Image>
        </Link>
      </section>
      <section className="w-full grid lg:grid-cols-4 my-2 gap-2" id="contactos">
        <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl w-full">
          <h1>B</h1>
        </figure>
        <aside className="flex flex-col align-middle justify-center p-4 lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
          <h1>A</h1>
        </aside>
      </section>
    </>
  );
}
