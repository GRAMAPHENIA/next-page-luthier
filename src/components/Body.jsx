import Aside from "@/components/Aside";
import Presentacion from "@/components/Presentacion";

export default function Body() {
  return (
    <section className="w-full grid lg:grid-cols-4 my-2 gap-2">
      <figure className="p-4 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl w-full">
        <Presentacion />
      </figure>
      <aside className="p-4 lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl">
        <Aside />
      </aside>
    </section>
  );
}
