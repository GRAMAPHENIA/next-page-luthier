// import Navegacion from "@/components/Navegacion";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <section className="mt-2">
        {/* <Navegacion /> */}
        <Header />
      </section>

      <div>{children}</div>
    </>
  );
}