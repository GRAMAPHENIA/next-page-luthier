import Navegacion from "@/components/Navegacion";

export default function Layout({ children }) {
  return (
    <>
      <section className="mt-2">
        <Navegacion />
      </section>

      <div>{children}</div>
    </>
  );
}
