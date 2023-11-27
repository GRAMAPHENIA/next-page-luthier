import Image from "next/image";
import Logo from "/public/croquis/croquis-buconero-numerado.png";

export const metadata = {
  title: "Modelo Buconero",
};

export default function Buconero() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-6 gap-2 ">
        <figure className="relative bg-[#14181b] rounded-2xl col-span-4 p-10 lg:p-10">
          1
          <Image src={Logo} alt="asd" width={1000} height={330} />
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
