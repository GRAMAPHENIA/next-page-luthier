import Image from "next/image";
import Pua from "@/public/pua.svg";
import NavegacionMenu from "@/components/NavegacionMenu.jsx";

export default function Modal() {
  return (
    <>
      <figure className="flex justify-end col-start-4 col-end-5">
        <label for="btn-modal">
          <Image
            className="text-center p-2 border-2 border-[#20262b] rounded-full hover:bg-[#20262b]"
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
          <h2 className="text-center text-4xl text-amber-200 pb-10">
            <span className="text-6xl flex justify-center mb-5 text-gray-300">
              ¡Bienvenidos!
            </span>{" "}
            El Menú
          </h2>

          {/* NAVEGACION */}
          <NavegacionMenu />

          {/* <div class="btn-cerrar pt-10">
            <label for="btn-modal">Cerrar</label>
          </div> */}
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
      </div>
    </>
  );
}
