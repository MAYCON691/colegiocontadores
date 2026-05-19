"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaBullseye, FaEye, FaUsers } from "react-icons/fa";

const items = [
  {
    icon: <FaBuilding />,
    title: "Institución",
    text: "Fundado el 16 de julio de 1946, el Colegio de Contadores La Paz representa y fortalece el ejercicio profesional contable en el departamento.",
    color: "bg-[#b61b19]",
  },
  {
    icon: <FaBullseye />,
    title: "Misión",
    text: "Promover y defender al profesional contador y contador público, fortaleciendo sus capacidades técnicas, éticas e institucionales.",
    color: "bg-[#007636]",
  },
  {
    icon: <FaEye />,
    title: "Visión",
    text: "Ser una institución colegiada líder, reconocida por la excelencia de sus servicios y su aporte permanente a la sociedad.",
    color: "bg-slate-900",
  },
  {
    icon: <FaUsers />,
    title: "Comunidad",
    text: "Impulsamos integración, capacitación continua, representación gremial y desarrollo profesional para nuestros asociados.",
    color: "bg-[#b61b19]",
  },
];

export default function NewsCards() {
  return (
    <section id="institucional" className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rotate-45 bg-[#b61b19]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rotate-45 bg-[#007636]/10" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="section-title">Área Institucional</h2>
          <p className="section-text mt-5">
            Identidad, representación, ética profesional y compromiso gremial al
            servicio de los profesionales contables de La Paz.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[360px] overflow-hidden rounded-[34px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] soft-border"
            >
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rotate-45 bg-[#b61b19]/10 transition group-hover:bg-[#007636]/10" />
              <div className="absolute bottom-0 left-0 h-20 w-40 -translate-x-16 translate-y-10 rotate-45 bg-[#007636]/10" />

              <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl text-white shadow-xl ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}