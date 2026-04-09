import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import InstitutionalSection from "@/components/InstitutionalSection";
import NewsCards from "@/components/NewsCards";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Highlights />
        <NewsCards />
        <InstitutionalSection />
        <ContactSection />
        <MapSection />
      </main>

      <Footer />
    </>
  );
}