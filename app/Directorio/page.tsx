"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { MouseEvent, useRef, useState } from "react";
import {
  FaEnvelope,
  FaUserTie,
  FaChevronRight,
  FaBriefcase,
  FaTimes,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const miembros = [
  {
    nombre: "Miembro 1",
    cargo: "Presidenta",
    imagen: "/MIEMBROO1.png",
    area: "Dirección institucional",
    descripcion:
      "Lidera la representación institucional del Colegio, impulsando la ética profesional y el fortalecimiento del ejercicio contable.",
    correo: "presidencia@cclapaz.org",
  },
  {
    nombre: "Miembro 2",
    cargo: "Vicepresidente",
    imagen: "/MIEMBRO2.png",
    area: "Coordinación ejecutiva",
    descripcion:
      "Apoya la planificación estratégica y coordinación de actividades institucionales.",
    correo: "vicepresidencia@cclapaz.org",
  },
  {
    nombre: "Miembro 3",
    cargo: "Secretaría General",
    imagen: "/MIEMBRO3.png",
    area: "Gestión documental",
    descripcion:
      "Gestiona la documentación oficial y seguimiento administrativo del directorio.",
    correo: "secretaria@cclapaz.org",
  },
  {
    nombre: "Miembro 4",
    cargo: "Tesorería",
    imagen: "/MIEMBRO4.png",
    area: "Gestión financiera",
    descripcion:
      "Supervisa los recursos económicos institucionales con transparencia.",
    correo: "tesoreria@cclapaz.org",
  },
  {
    nombre: "Miembro 5",
    cargo: "Vocal de Capacitación",
    imagen: "/MIEMBRO5.png",
    area: "Formación continua",
    descripcion:
      "Promueve cursos y actividades académicas para el desarrollo profesional.",
    correo: "capacitacion@cclapaz.org",
  },
  {
    nombre: "Miembro 6",
    cargo: "Vocal Institucional",
    imagen: "/MIEMBRO6.png",
    area: "Relaciones institucionales",
    descripcion:
      "Fortalece vínculos con entidades públicas, privadas y académicas.",
    correo: "institucional@cclapaz.org",
  },
  {
    nombre: "Miembro 7",
    cargo: "Vocal de Asociados",
    imagen: "/MIEMBRO7.png",
    area: "Atención al colegiado",
    descripcion: "Canaliza consultas y propuestas de los asociados del Colegio.",
    correo: "asociados@cclapaz.org",
  },
  {
    nombre: "Miembro 8",
    cargo: "Vocal de Normativas",
    imagen: "/MIEMBRO8.png",
    area: "Normativas",
    descripcion: "Apoya la revisión y difusión de reglamentos institucionales.",
    correo: "normativas@cclapaz.org",
  },
  {
    nombre: "Miembro 9",
    cargo: "Vocal de Comunicación",
    imagen: "/MIEMBRO9.png",
    area: "Comunicación institucional",
    descripcion:
      "Impulsa la difusión de actividades y contenidos institucionales.",
    correo: "comunicacion@cclapaz.org",
  },
];

type Miembro = (typeof miembros)[number];

function DirectorioCard({
  miembro,
  index,
  onSelect,
}: {
  miembro: Miembro;
  index: number;
  onSelect: (miembro: Miembro) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.35 });
  const mouseY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.35 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  const imageX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(miembro)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.52, delay: index * 0.035 }}
      className="group relative h-[380px] w-full cursor-pointer text-left outline-none sm:h-[420px] lg:h-[455px]"
      style={{ perspective: 1200 }}
    >
      <motion.div className="absolute inset-0 rounded-[24px] bg-slate-950/14 blur-2xl transition duration-500 group-hover:translate-y-5 group-hover:scale-95" />

      <motion.article
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.14)] transition-shadow duration-500 group-hover:shadow-[0_35px_90px_rgba(15,23,42,0.24)] sm:rounded-[28px]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_45%,#eef2f1_100%)]" />

        <div
          className="absolute left-4 top-4 z-30 rounded-full bg-white/90 px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-slate-800 shadow-lg backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-[10px]"
          style={{ transform: "translateZ(35px)" }}
        >
          Directorio
        </div>

        <div
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#007636] text-white shadow-xl transition duration-500 group-hover:rotate-12 group-hover:bg-[#b61b19] sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          style={{ transform: "translateZ(45px)" }}
        >
          <FaUserTie />
        </div>

        {/* Modificado el fondo a bg-white de manera fija */}
        <div className="relative h-[300px] overflow-hidden bg-white sm:h-[335px] lg:h-[370px]">
          <motion.div
            style={{ x: imageX, y: imageY, transformStyle: "preserve-3d" }}
            className="absolute inset-0"
          >
            <div
              className="relative h-full w-full"
              style={{ transform: "translateZ(70px)" }}
            >
              <Image
                src={miembro.imagen}
                alt={miembro.nombre}
                fill
                priority={index < 3}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-contain object-top px-4 pt-2 drop-shadow-[0_25px_30px_rgba(0,0,0,0.28)] transition duration-700 group-hover:scale-[1.12] sm:px-5"
              />
            </div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 z-20 bg-white px-5 py-4 sm:px-7 sm:py-5"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="text-xs font-bold text-slate-500 sm:text-sm">
              Ver más información
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition duration-500 group-hover:translate-x-1 group-hover:bg-[#007636] sm:h-11 sm:w-11">
              <FaChevronRight />
            </span>
          </div>
        </div>
      </motion.article>
    </motion.button>
  );
}

export default function DirectorioPage() {
  const [selected, setSelected] = useState<Miembro | null>(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f7f6f2] pb-16 pt-[155px] sm:pb-20 sm:pt-[175px] lg:pb-24 lg:pt-[205px]">
        <section className="relative">
          <div className="absolute left-[-180px] top-0 h-[320px] w-[320px] rounded-full bg-[#007636]/10 blur-3xl sm:h-[440px] sm:w-[440px]" />
          <div className="absolute right-[-180px] top-24 h-[320px] w-[320px] rounded-full bg-[#b61b19]/10 blur-3xl sm:h-[440px] sm:w-[440px]" />

          <div className="section-container relative z-10px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="gold-line mx-auto mb-4" />

              <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl md:text-6xl">
                Directorio
              </h1>
            </motion.div>

            <motion.div
              ref={heroRef}
              style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
              className="mx-auto mt-10 max-w-6xl sm:mt-14"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white p-2 shadow-[0_25px_75px_rgba(15,23,42,0.16)] sm:rounded-[34px] sm:p-3">
                <Image
                  src="/DIRECTORIO_COMPLETO.png"
                  alt="Directorio completo del Colegio de Contadores La Paz"
                  width={1400}
                  height={760}
                  priority
                  className="relative h-auto min-h-[230px] w-full rounded-[18px] object-cover object-center sm:min-h-0 sm:rounded-[26px]"
                />

                <div className="absolute bottom-3 left-3 right-3 z-20 rounded-[20px] bg-slate-950/72 p-4 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[26px] sm:p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 sm:text-xs sm:tracking-[0.25em]">
                    Directorio institucional
                  </p>

                  <h2 className="mt-2 text-xl font-black sm:text-2xl md:text-3xl">
                    Colegio de Contadores La Paz
                  </h2>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-7 sm:mt-16 sm:grid-cols-2 lg:gap-8 xl:mt-18 xl:grid-cols-3">
              {miembros.map((miembro, index) => (
                <DirectorioCard
                  key={miembro.nombre}
                  miembro={miembro}
                  index={index}
                  onSelect={setSelected}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 px-3 py-4 backdrop-blur-md sm:px-4 sm:py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[92vh] w-full max-w-[760px] overflow-auto rounded-[22px] bg-white shadow-[0_35px_90px_rgba(0,0,0,0.45)] md:grid md:grid-cols-[0.9fr_1fr] md:overflow-hidden md:rounded-[24px]"
            >
              {/* Botón de cerrar (X) en la esquina superior derecha */}
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-[100] flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/10 text-slate-800 transition hover:bg-[#b61b19] hover:text-white md:right-5 md:top-5"
                aria-label="Cerrar ventana"
              >
                <FaTimes className="text-base" />
              </button>

              <div className="relative hidden h-[430px] bg-[linear-gradient(180deg,#ffffff_0%,#eef4ef_100%)] md:block">
                <Image
                  src={selected.imagen}
                  alt={selected.nombre}
                  fill
                  sizes="330px"
                  className="object-contain object-bottom px-6 pb-0 pt-8 drop-shadow-[0_24px_30px_rgba(0,0,0,0.24)]"
                />
              </div>

              <div className="flex flex-col justify-center px-5 py-8 sm:px-7 md:px-8">
                <div className="mb-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#b61b19] via-[#c8a23a] to-[#007636]" />

                <span className="w-fit rounded-full bg-[#b61b19] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-md">
                  {selected.cargo}
                </span>

                <h2 className="mt-4 text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl md:text-4xl">
                  {selected.nombre}
                </h2>

                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#007636]">
                  {selected.area}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {selected.descripcion}
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="flex items-center gap-3 rounded-[18px] bg-[#f8f6f1] p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#007636] text-white">
                      <FaBriefcase className="text-sm" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-slate-900">
                        Responsabilidad
                      </h4>
                      <p className="text-sm text-slate-600">
                        {selected.area}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-[18px] bg-[#f8f6f1] p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                      <FaEnvelope className="text-sm" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-slate-900">
                        Contacto
                      </h4>
                      <a
                        href={`mailto:${selected.correo}`}
                        className="break-all text-sm font-bold text-[#007636] hover:underline"
                      >
                        {selected.correo}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}