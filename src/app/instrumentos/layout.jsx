import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <section className="mt-2">
        <Header />
      </section>
      <div>{children}</div>
      <Footer />
    </>
  );
}
