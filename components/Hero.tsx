"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const slides = [
  {
    image: "/IMAGEN_1.jpg",
    title: "Colegio de\nContadores\nLa Paz",
    text: "Institución comprometida con la ética profesional, la representación gremial y el fortalecimiento permanente del ejercicio contable en el departamento de La Paz.",
  },
  {
    image: "/IMAGEN_2.jpg",
    title: "Formación\ninstitucional\ncontinua",
    text: "Impulsamos capacitación, actualización técnica y espacios de crecimiento para consolidar una comunidad profesional moderna, sólida y preparada.",
  },
  {
    image: "/IMAGEN_3.jpg",
    title: "Prestigio,\ntrayectoria y\nconfianza",
    text: "Una presencia digital moderna debe comunicar orden, seriedad y cercanía institucional, proyectando el valor real del Colegio hacia sus asociados y visitantes.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-[132px] md:pt-[140px]"
    >
      {/* Efectos decorativos */}
      <div className="hero-ornament red left-[-100px] top-[180px] h-[240px] w-[240px]" />
      <div className="hero-ornament green bottom-[60px] right-[-120px] h-[280px] w-[280px]" />

      {/* Slide de fondo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.15, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${current.image}')` }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="hero-overlay absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="section-container relative z-10 grid min-h-[calc(100vh-140px)] items-center gap-12 py-10 lg:grid-cols-[1.02fr_0.98fr]">
        {/* Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <div className="mb-6 gold-line" />

          <div className="badge-small mb-5 glass-panel text-white">
            excelencia profesional · ética · representación institucional
          </div>

          <h1 className="hero-title whitespace-pre-line">{current.title}</h1>

          <p className="hero-subtitle mt-7 max-w-2xl">{current.text}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#institucional"
              className="inline-flex items-center gap-2 rounded-full bg-[#b61b19] px-7 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#991816]"
            >
              Ver área institucional
              <FaArrowRight />
            </Link>

            <Link
              href="/tour360"
              className="inline-flex items-center gap-2 rounded-full bg-[#007636] px-7 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#005a29]"
            >
              Explorar Tour 360
              <FaPlayCircle />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setIndex(slideIndex)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  slideIndex === index
                    ? "w-12 bg-white"
                    : "w-3 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Ir al slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.05, delay: 0.12 }}
          className="hidden lg:block"
        >
          <div className="hero-slide-shadow relative ml-auto max-w-[520px] overflow-hidden rounded-[34px] border border-white/15 bg-white/12 p-4 backdrop-blur-md">
            <div
              className="h-[560px] rounded-[28px] bg-cover bg-center"
              style={{ backgroundImage: "url('/IMAGEN_2.jpg')" }}
            />

            <div className="absolute left-6 top-6 rounded-full bg-white/88 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-800">
              Institución · Prestigio · Trayectoria
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-[26px] bg-black/42 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                Colegio de Contadores La Paz
              </p>
              <p className="mt-2 text-lg font-bold">
                Una presencia digital fuerte también comunica autoridad
                institucional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}