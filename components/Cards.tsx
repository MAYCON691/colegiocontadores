"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Asamblea 2026", img: "/IMAGEN_2.jpg" },
  { title: "Cursos Virtuales", img: "/IMAGEN_3.jpg" },
  { title: "Galería", img: "/IMAGEN_1.jpg" },
];

export default function Cards() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >

          <div className="overflow-hidden">
            <motion.img
              src={item.img}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="h-56 w-full object-cover"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="font-bold text-lg mb-3">{item.title}</h3>

            <button className="bg-[#b61b19] text-white px-4 py-2 rounded-full">
              Ver más
            </button>
          </div>

        </motion.div>
      ))}

    </section>
  );
}