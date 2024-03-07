import AsideBuconero from "@/components/AsideBuconero";
import PresentacionBuconero from "@/components/PresentacionBuconero";

export default function BodyBuconero() {
  return (
    <section id="galeria" className="animate w-full grid lg:grid-cols-4 my-2 gap-2">
      <aside className=" lg:col-start-1 lg:col-end-2 bg-[#14181b] rounded-2xl">
        <AsideBuconero />
      </aside>
      <figure className="flex flex-col align-middle justify-center p-4 lg:col-start-2 lg:col-end-5 bg-[#14181b] rounded-2xl w-full">
        <PresentacionBuconero />
      </figure> 
    </section>
  );
}
