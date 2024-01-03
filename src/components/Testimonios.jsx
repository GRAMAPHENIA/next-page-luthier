import Image from "next/image";
import Estrella from "/public/estrella.svg";

export default function Testimonios({ testimonio }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonio.map((testimonio, index) => (
          <div
            key={index}
            className="bg-[#171c1f] p-8 rounded-xl border border-[var(--hover-button)] flex flex-col justify-between"
          >
            <section className="flex items-center gap-4">
              <Image
                width={45}
                height={45}
                src={testimonio.img}
                alt="Croquis de guitarra buconero"
                priority={true}
                className="rounded-full object-cover border-2 border-[var(--border-light)]"
              ></Image>
              <strong className="text-[var(--text-extralight)]">
                {testimonio.author}
              </strong>
            </section>
            <div className="mt-4">
              <span className="text-[var(--text-light)]">
                {testimonio.comment}
              </span>
            </div>
            <div className="flex justify-center mt-4">
              <Image
                width={15}
                height={15}
                src={Estrella}
                alt="Croquis de guitarra buconero"
                priority={true}
              ></Image>
              <Image
                width={15}
                height={15}
                src={Estrella}
                alt="Croquis de guitarra buconero"
                priority={true}
              ></Image>
              <Image
                width={15}
                height={15}
                src={Estrella}
                alt="Croquis de guitarra buconero"
                priority={true}
              ></Image>
              <Image
                width={15}
                height={15}
                src={Estrella}
                alt="Croquis de guitarra buconero"
                priority={true}
              ></Image>
              <Image
                width={15}
                height={15}
                src={Estrella}
                alt="Croquis de guitarra buconero"
                priority={true}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
