import Image from "next/image";
import Menu from "@/public/menu.svg";
import NavegacionMenu from "@/components/NavegacionMenu.jsx";

export default function Modal() {
  return (
    <>
      <figure className="flex justify-end col-start-4 col-end-5">
        <label htmlFor="btn-modal">
          <Image
            className="text-center p-2 border-2 border-[#20262b] rounded-full hover:bg-[#20262b] cursor-pointer"
            src={Menu}
            alt="imagen de menu"
            width="auto"
            height="auto"
            priority={true}
          />
        </label>
      </figure>

      <input type="checkbox" id="btn-modal" />

      <div className="container-modal">
        <div className="content-modal">
          <NavegacionMenu />
        </div>
        <label htmlFor="btn-modal" className="cerrar-modal"></label>
      </div>
    </>
  );
}
