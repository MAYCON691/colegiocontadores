"use client";

import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaUsersCog,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";

const items = [
  {
    icon: <FaUsersCog />,
    title: "Atención a asociados",
    text: "Orientación institucional, acompañamiento y atención a consultas para fortalecer la relación con los profesionales colegiados.",
    color: "bg-[#007636]",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Capacitación y eventos",
    text: "Espacios académicos, cursos y actividades orientadas a la actualización y crecimiento del profesional contador.",
    color: "bg-[#b61b19]",
  },
  {
    icon: <FaFileDownload />,
    title: "Información y recursos",
    text: "Acceso a información institucional, documentos, comunicados, resoluciones y material de interés para la comunidad.",
    color: "bg-slate-800",
  },
  {
    icon: <FaHandshake />,
    title: "Vínculo institucional",
    text: "Una presencia digital moderna fortalece la imagen del Colegio y mejora la comunicación con asociados y visitantes.",
    color: "bg-[#b61b19]",
  },
];

export default function InstitutionalSection() {
  return (
    <section id="servicios" className="py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="section-title">Servicios y áreas clave</h2>
          <p className="section-text mt-5">
            Esta propuesta organiza los contenidos principales del sitio para
            comunicar mejor los servicios, la atención institucional y el valor
            que ofrece el Colegio de Contadores La Paz.
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