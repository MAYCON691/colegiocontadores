import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActividadesTabs from "@/components/ActividadesTabs";

export default function AmbientesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pb-20 pt-[210px]">
        <section className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-medium text-slate-700 md:text-5xl">
            Ambientes
          </h1>

          

          <ActividadesTabs />
        </section>
      </main>

      <Footer />
    </>
  );
}