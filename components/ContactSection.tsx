"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contactenos" className="py-24">
      <div className="section-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Columna de información */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="rounded-[30px] bg-white p-8 shadow-2xl soft-border"
        >
          <div className="mb-4 gold-line" />
          <h2 className="section-title">Contáctenos</h2>
          <p className="section-text mt-4">
            Un sitio institucional moderno también debe facilitar la comunicación.
            Aquí el visitante puede encontrar de forma rápida la dirección,
            los teléfonos y el canal de contacto del Colegio.
          </p>

          <div className="mt-8 grid gap-5">
            <div className="flex items-start gap-4 rounded-2xl bg-[#f8f6f1] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b61b19] text-white">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Dirección</h3>
                <p className="mt-1 leading-7 text-slate-600">
                  Calle Colombia N° 172, Edificio el Contador, Piso 4,
                  Zona San Pedro, La Paz - Bolivia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-[#f8f6f1] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#007636] text-white">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Teléfonos</h3>
                <p className="mt-1 leading-7 text-slate-600">
                  2337363 · 2337844 · 2313877 · +591 715 63068
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-[#f8f6f1] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b61b19] text-white">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Correo</h3>
                <p className="mt-1 leading-7 text-slate-600 break-all">
                  colegio.contadores.lapaz@cclapaz.org
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {/* Reemplaza por las redes reales cuando te las pasen */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#007636] text-white transition hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b61b19] text-white transition hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-white transition hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>

        {/* Columna de formulario */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-[30px] bg-white p-8 shadow-2xl soft-border"
        >
          <div className="mb-4 gold-line" />
          <h3 className="text-3xl font-black text-slate-800">
            Solicitar información
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Formulario de demostración listo para futura conexión con correo,
            backend o servicio de contacto.
          </p>

          <form
            className="mt-8 grid gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Su nombre"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="form-input"
              />
            </div>

            <input type="text" placeholder="Asunto" className="form-input" />

            <textarea
              placeholder="Escriba su mensaje"
              rows={7}
              className="form-input resize-none"
            />

            <button
              type="submit"
              className="w-fit rounded-full bg-[#b61b19] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#991816]"
            >
              Enviar mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}