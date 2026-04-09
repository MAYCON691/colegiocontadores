"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="pb-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="overflow-hidden rounded-[34px] bg-white shadow-2xl soft-border"
        >
          <div className="flex flex-col gap-4 border-b border-slate-200 p-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 gold-line" />
              <h2 className="section-title">Ubicación institucional</h2>
              <p className="section-text mt-4 max-w-3xl">
                Mapa de referencia del Colegio de Contadores La Paz para mostrar
                la ubicación de forma clara, útil y profesional.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/COLEGIO+DE+CONTADORES+DE+LA+PAZ/@-16.500807,-68.1355652,432m/data=!3m1!1e3!4m10!1m2!2m1!1scolegio+de+contadores+la+paz!3m6!1s0x915f21747ca9da99:0x8aa2ced9c65fb15f!8m2!3d-16.5007218!4d-68.1343698!15sChxjb2xlZ2lvIGRlIGNvbnRhZG9yZXMgbGEgcGF6kgESYXBhcnRtZW50X2J1aWxkaW5n4AEA!16s%2Fg%2F11ngpr0p6s?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#007636] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#005a29]"
            >
              Abrir en Google Maps
            </a>
          </div>

          <iframe
            title="Mapa Colegio de Contadores La Paz"
            className="map-frame"
            src="https://www.google.com/maps?q=-16.5007218,-68.1343698&z=18&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}