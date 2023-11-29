import Image from "next/image";
import Pua from "@/public/pua.svg";
import NavegacionMenu from "@/components/NavegacionMenu.jsx";

export default function Modal() {
  return (
    <>
      <figure className="flex justify-end col-start-4 col-end-5">
        <label for="btn-modal">
          <Image
            className="text-center p-2 border-2 border-[#20262b] rounded-full hover:bg-[#20262b] cursor-pointer"
            src={Pua}
            alt="imagen de menu"
            width="auto"
            height="auto"
          />
        </label>
      </figure>

      <input type="checkbox" id="btn-modal" />

      <div class="container-modal">
        <div class="content-modal">
          
          <NavegacionMenu />
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
      </div>
    </>
  );
}
