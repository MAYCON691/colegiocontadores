"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Si estamos en /tour360, los enlaces internos deben volver al inicio con hash.
  const prefix = pathname === "/" ? "" : "/";

  const links = useMemo(
    () => [
      { label: "Inicio", href: `${prefix}#inicio` },
      { label: "Institucional", href: `${prefix}#institucional` },
      { label: "Servicios", href: `${prefix}#servicios` },
      { label: "Contacto", href: `${prefix}#contactenos` },
      { label: "Tour 360", href: "/tour360" },
    ],
    [prefix]
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* Barra superior */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="bg-[#007636] text-white"
      >
        <div className="section-container flex flex-col gap-2 py-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="opacity-90">Síguenos en:</span>

            {/* Cambia estos href por los reales del colegio si ya los tienes */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

          <div className="flex flex-col gap-2 text-sm md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white/90" />
              <span>colegio.contadores.lapaz@cclapaz.org</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white/90" />
              <span>+591 715 63068</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Barra principal */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/92 shadow-xl backdrop-blur-xl"
            : "bg-white/96 shadow-md"
        }`}
      >
        <div className="section-container flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex min-w-fit items-center gap-3">
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <Image
                src="/logo-contador.png"
                alt="Logo Colegio de Contadores La Paz"
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b61b19]">
                Colegio de
              </p>
              <h1 className="text-lg font-extrabold text-slate-800">
                Contadores La Paz
              </h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-700 lg:flex">
            {links.map((item) => {
              const isTour = item.label === "Tour 360";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`menu-link ${
                    isTour ? "font-semibold text-[#007636]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={`${prefix}#contactenos`}
              className="hidden rounded-full bg-[#b61b19] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#991816] md:inline-flex"
            >
              Solicitar información
            </Link>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-800 lg:hidden"
              aria-label="Abrir menú"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="border-t border-slate-200 bg-white lg:hidden"
            >
              <div className="section-container flex flex-col gap-4 py-5">
                {links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href={`${prefix}#contactenos`}
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-fit items-center rounded-full bg-[#b61b19] px-5 py-3 text-sm font-semibold text-white"
                >
                  Solicitar información
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}