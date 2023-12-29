import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <section className="mt-2">
        <Header />
      </section>

      <div>{children}</div>
    </>
  );
}
