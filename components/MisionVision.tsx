"use client";

import { motion } from "framer-motion";

export default function MisionVision() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="p-10 rounded-2xl shadow-xl bg-[#007636] text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Misión</h2>
        <p>
          Promover y defender al profesional contador público...
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="p-10 rounded-2xl shadow-xl bg-[#b61b19] text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Visión</h2>
        <p>
          Ser la institución líder del país...
        </p>
      </motion.div>

    </section>
  );
}