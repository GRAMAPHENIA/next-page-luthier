import Image from "next/image";
import croquiBuconero from "@/public/croquis/velluto.png";

export default function AsideBuconero() {
  return (
    <aside className="flex justify-center align-middle col-span-1 p-10 ">
      <figure>
        <Image
          width="150"
          height="auto"
          src={croquiBuconero} 
          alt="Foto de la guitarra Buconero"
          priority={true}
        />
      </figure>
    </aside>
  );
}
