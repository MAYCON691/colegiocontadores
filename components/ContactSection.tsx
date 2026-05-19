"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-[#f8f6f1] py-20 sm:py-24">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[34px] bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.13)] soft-border md:p-10"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rotate-45 bg-[#b61b19]/10" />
            <div className="gold-line mb-5" />

            <h2 className="section-title">Contáctenos</h2>

            <p className="section-text mt-5">
              Canales oficiales del Colegio de Contadores La Paz para atención
              institucional, consultas y orientación a asociados.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+Colombia+172+La+Paz+Bolivia"
                target="_blank"
                className="flex gap-4 rounded-[24px] bg-[#f8f6f1] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#b61b19] text-white">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3 className="font-black text-slate-950">Dirección</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Calle Colombia N° 172, Edificio El Contador, Piso 4, Zona
                    San Pedro, La Paz - Bolivia.
                  </p>
                </div>
              </a>

              <a
                href="tel:+5912337363"
                className="flex gap-4 rounded-[24px] bg-[#f8f6f1] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#007636] text-white">
                  <FaPhoneAlt />
                </span>
                <div>
                  <h3 className="font-black text-slate-950">Teléfonos</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    2337363 · 2337844 · 2313877
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/59171563068"
                target="_blank"
                className="flex gap-4 rounded-[24px] bg-[#f8f6f1] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#007636] text-white">
                  <FaWhatsapp />
                </span>
                <div>
                  <h3 className="font-black text-slate-950">WhatsApp</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    +591 715 63068
                  </p>
                </div>
              </a>

              <a
                href="mailto:colegio.contadores.lapaz@cclapaz.org"
                className="flex gap-4 rounded-[24px] bg-[#f8f6f1] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#b61b19] text-white">
                  <FaEnvelope />
                </span>
                <div>
                  <h3 className="font-black text-slate-950">Correo</h3>
                  <p className="mt-1 break-all text-sm leading-6 text-slate-600">
                    colegio.contadores.lapaz@cclapaz.org
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/colegiodecontadoreslpz/?locale=es_LA"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007636] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#b61b19]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/59171563068"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007636] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#b61b19]"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:colegio.contadores.lapaz@cclapaz.org"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#b61b19]"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[34px] bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.13)] soft-border md:p-10"
          >
            <div className="gold-line mb-5" />

            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Solicitar información
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Para consultas institucionales, puede escribirnos directamente al
              correo oficial del Colegio.
            </p>

            <form className="mt-8 grid gap-4">
              <input
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#b61b19]"
                placeholder="Su nombre"
              />
              <input
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#b61b19]"
                placeholder="Su correo electrónico"
              />
              <input
                className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#b61b19]"
                placeholder="Asunto"
              />
              <textarea
                className="min-h-[170px] rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#b61b19]"
                placeholder="Escriba su mensaje"
              />

              <a
                href="mailto:colegio.contadores.lapaz@cclapaz.org?subject=Consulta%20institucional%20CCLP"
                className="mt-2 w-fit rounded-full bg-[#b61b19] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-950"
              >
                Enviar mensaje
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}