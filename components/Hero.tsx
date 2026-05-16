"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import BuildingModel from "@/components/BuildingModel";

const slides = ["/IMAGEN_1.jpg", "/IMAGEN_2.jpg", "/IMAGEN_3.jpg"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[760px] overflow-hidden pt-[140px] sm:pt-[150px] md:min-h-[720px] md:pt-[165px] xl:pt-[175px]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full scale-[1.03] bg-cover bg-center brightness-[0.95] contrast-[1.08] saturate-[1.08]"
            style={{ backgroundImage: `url('${slides[index]}')` }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/20" />
      <div className="bg-grid absolute inset-0 opacity-10" />

      <div className="section-container relative z-10 grid min-h-[600px] items-center gap-8 py-10 md:min-h-[540px] lg:grid-cols-[1fr_0.82fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="max-w-[620px]"
        >
          <div className="mb-5 h-[3px] w-[110px] rounded-full bg-gradient-to-r from-[#b61b19] to-[#007636]" />

          <div className="mb-5 inline-flex max-w-full rounded-full border border-white/20 bg-white/12 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-xs">
            Excelencia profesional · Ética · Representación institucional
          </div>

          <h1 className="text-[3rem] font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-[3.5rem] md:text-[4rem] xl:text-[4.2rem]">
            Colegio de
            <br />
            Contadores
            <br />
            La Paz
          </h1>

          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-white/92 sm:text-lg">
            Institución comprometida con la ética profesional, la representación
            gremial y el fortalecimiento permanente del ejercicio contable en el
            departamento de La Paz.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="#institucional"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#b61b19] px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#991816]"
            >
              Ver área institucional
              <FaArrowRight />
            </Link>

            <Link
              href="/tour360"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#007636] px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#005a29]"
            >
              Explorar Tour 360
              <FaPlayCircle />
            </Link>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide}
                type="button"
                onClick={() => setIndex(slideIndex)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  slideIndex === index
                    ? "w-10 bg-white"
                    : "w-3 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Ir al slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 65 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.12 }}
          className="hidden justify-center lg:flex xl:justify-end xl:pr-10"
        >
          <div className="hero-slide-shadow w-full max-w-[390px] overflow-hidden rounded-[28px] border border-white/15 bg-white/12 p-3 backdrop-blur-md">
            <BuildingModel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}