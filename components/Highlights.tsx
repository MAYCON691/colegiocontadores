"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

const items = [
  {
    icon: <FaGraduationCap />,
    title: "Capacitación continua",
    text: "Cursos, seminarios y talleres orientados al fortalecimiento técnico y profesional del contador.",
    color: "bg-[#007636]",
  },
  {
    icon: <FaBriefcase />,
    title: "Representación gremial",
    text: "Defensa institucional del ejercicio profesional con identidad, trayectoria y seriedad.",
    color: "bg-[#b61b19]",
  },
  {
    icon: <FaUsers />,
    title: "Vida colegiada",
    text: "Eventos, integración y participación activa para consolidar una comunidad contable fuerte.",
    color: "bg-[#1f2a44]",
  },
];

export default function Highlights() {
  return (
    <section className="relative z-20 -mt-14 pb-14">
      <div className="section-container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="rounded-[28px] bg-white p-8 shadow-2xl soft-border"
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
    </section>
  );
}