import AsideBuconero from "@/components/AsideBuconero";
import PresentacionBuconero from "@/components/PresentacionBuconero";

export default function BodyBuconero() {
  return (
    <section className="w-full grid lg:grid-cols-4 my-2 gap-2">
      <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-1 lg:col-end-4 bg-[#14181b] rounded-2xl w-full">
        <h1>B</h1>
      </figure>
      <aside className="flex flex-col align-middle justify-center p-4 lg:col-start-4 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
        <h1>A</h1>
      </aside>
    </section>
  );
}
