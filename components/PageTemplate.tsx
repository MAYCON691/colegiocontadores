import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  title: string;
  description: string;
};

export default function PageTemplate({ title, description }: Props) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] px-4 pb-20 pt-[170px]">
        <section className="section-container rounded-[34px] bg-white p-8 shadow-2xl soft-border md:p-12">
          <div className="gold-line mb-5" />

          <h1 className="section-title">{title}</h1>

          <p className="section-text mt-5 max-w-4xl">{description}</p>

          <div className="mt-10 rounded-3xl bg-[#f8f6f1] p-6">
            <p className="text-slate-600">
              Esta sección está lista para agregar contenido institucional,
              imágenes, documentos, enlaces o formularios según corresponda.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}