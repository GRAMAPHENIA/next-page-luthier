import Image from "next/image";
import croquiVelluto from "@/public/croquis/aside-velluto.svg";

export default function AsideBuconero() {
  return (
    <aside className="flex justify-center align-middle col-span-1 p-10 ">
      <figure>
        <Image
          width="150"
          height="auto"
          src={croquiVelluto} 
          alt="Foto de la guitarra Velluto"
          priority={true}
        />
      </figure>
    </aside>
  );
}
