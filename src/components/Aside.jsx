import Image from "next/image";
import croquiBuconero from "@/public/croquis/croqui-buconero.svg";

export default function Aside() {
  return (
    <aside className="flex justify-center align-middle col-span-1 p-10 ">
      <figure>
        <Image
          width="150"
          height="auto"
          src={croquiBuconero}
          alt="Croquis de guitarra buconero"
          priority={true}
        />
      </figure>
    </aside>
  );
}
