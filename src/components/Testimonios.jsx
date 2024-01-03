import Image from "next/image";

export default function Testimonios({ testimonio }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonio.map((testimonio, index) => (
          <div
            key={index}
            className="bg-[#171c1f] p-8 rounded-xl border border-[var(--hover-button)]"
          >
            <section className="flex items-center gap-4">
              <Image
                width={45}
                height={45}
                src={testimonio.img}
                alt="Croquis de guitarra buconero"
                priority={true}
                className="rounded-full border-2 border-[var(--border-light)]"
              ></Image>
              <strong className="text-[var(--text-extralight)]">{testimonio.author}</strong>
            </section>
            <div className="mt-4">
              <span className="text-[var(--text-light)]"> {testimonio.comment}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
