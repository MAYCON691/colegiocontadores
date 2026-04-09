"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaBullseye, FaEye, FaUsers } from "react-icons/fa";

export default function NewsCards() {
  const items = [
    {
      icon: <FaBuilding />,
      title: "Institución",
      text: "Fundado el 16 de julio de 1946, el Colegio de Contadores La Paz es una entidad que representa y fortalece el ejercicio profesional contable en el departamento.",
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
      text: "Ser la institución colegiada líder del país, reconocida por la excelencia de sus servicios y su permanente aporte a la sociedad.",
      color: "bg-slate-800",
    },
    {
      icon: <FaUsers />,
      title: "Comunidad",
      text: "Impulsamos integración, capacitación continua, representación gremial y desarrollo profesional para nuestros asociados.",
      color: "bg-[#b61b19]",
    },
  ];

  return (
    <section id="institucional" className="bg-[#f8f6f1] py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="section-title">Área Institucional</h2>
          <p className="section-text mt-5">
            Presentamos la esencia institucional del Colegio de Contadores La Paz
            con una estructura clara, moderna y profesional, orientada a
            transmitir solidez, identidad y confianza.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-[28px] bg-white p-8 shadow-xl soft-border"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-xl text-white ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-800">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}