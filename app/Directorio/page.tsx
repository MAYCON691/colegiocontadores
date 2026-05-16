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
  FaTimes,
  FaUserTie,
  FaChevronRight,
  FaBriefcase,
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
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 2",
    cargo: "Vicepresidente",
    imagen: "/MIEMBRO2.png",
    area: "Coordinación ejecutiva",
    descripcion:
      "Apoya la planificación estratégica y coordinación de actividades institucionales.",
    correo: "vicepresidencia@cclapaz.org",
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 3",
    cargo: "Secretaría General",
    imagen: "/MIEMBRO3.png",
    area: "Gestión documental",
    descripcion:
      "Gestiona la documentación oficial y seguimiento administrativo del directorio.",
    correo: "secretaria@cclapaz.org",
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 4",
    cargo: "Tesorería",
    imagen: "/MIEMBRO4.png",
    area: "Gestión financiera",
    descripcion:
      "Supervisa los recursos económicos institucionales con transparencia.",
    correo: "tesoreria@cclapaz.org",
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 5",
    cargo: "Vocal de Capacitación",
    imagen: "/MIEMBRO5.png",
    area: "Formación continua",
    descripcion:
      "Promueve cursos y actividades académicas para el desarrollo profesional.",
    correo: "capacitacion@cclapaz.org",
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 6",
    cargo: "Vocal Institucional",
    imagen: "/MIEMBRO6.png",
    area: "Relaciones institucionales",
    descripcion:
      "Fortalece vínculos con entidades públicas, privadas y académicas.",
    correo: "institucional@cclapaz.org",
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 7",
    cargo: "Vocal de Asociados",
    imagen: "/MIEMBRO7.png",
    area: "Atención al colegiado",
    descripcion:
      "Canaliza consultas y propuestas de los asociados del Colegio.",
    correo: "asociados@cclapaz.org",
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 8",
    cargo: "Vocal de Normativas",
    imagen: "/MIEMBRO8.png",
    area: "Normativas",
    descripcion:
      "Apoya la revisión y difusión de reglamentos institucionales.",
    correo: "normativas@cclapaz.org",
    gestion: "Gestión institucional 2026",
  },
  {
    nombre: "Miembro 9",
    cargo: "Vocal de Comunicación",
    imagen: "/MIEMBRO9.png",
    area: "Comunicación institucional",
    descripcion:
      "Impulsa la difusión de actividades y contenidos institucionales.",
    correo: "comunicacion@cclapaz.org",
    gestion: "Gestión institucional 2026",
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

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const imageX = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

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
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.04 }}
      className="group relative h-[525px] w-full cursor-pointer text-left outline-none"
      style={{ perspective: 1300 }}
    >
      <motion.div className="absolute inset-0 rounded-[26px] bg-slate-950/20 blur-2xl transition duration-500 group-hover:translate-y-6 group-hover:scale-95" />

      <motion.article
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.16)] transition-shadow duration-500 group-hover:shadow-[0_45px_110px_rgba(15,23,42,0.28)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_50%,#eef2f1_100%)]" />

        <div
          className="absolute left-5 top-5 z-30 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-800 shadow-lg"
          style={{ transform: "translateZ(45px)" }}
        >
          Directorio
        </div>

        <div
          className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#007636] text-white shadow-xl transition duration-500 group-hover:rotate-12 group-hover:bg-[#b61b19]"
          style={{ transform: "translateZ(55px)" }}
        >
          <FaUserTie />
        </div>

        <div className="relative h-[425px] overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#f1f5f3_52%,#e4ebe7_100%)]">
          <motion.div
            style={{ x: imageX, y: imageY, transformStyle: "preserve-3d" }}
            className="absolute inset-0"
          >
            <div
              className="relative h-full w-full"
              style={{ transform: "translateZ(90px)" }}
            >
              <Image
                src={miembro.imagen}
                alt={miembro.nombre}
                fill
                priority={index < 3}
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-contain object-bottom px-4 pt-6 drop-shadow-[0_30px_35px_rgba(0,0,0,0.34)] transition duration-500 group-hover:scale-[1.12]"
              />
            </div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 z-20 bg-white px-7 py-5"
          style={{ transform: "translateZ(35px)" }}
        >
          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="text-sm font-bold text-slate-500">
              Ver más información
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white transition duration-500 group-hover:translate-x-1 group-hover:bg-[#007636]">
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
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f7f6f2] pb-24 pt-[205px]">
        <section className="relative">
          <div className="absolute left-[-220px] top-0 h-[440px] w-[440px] rounded-full bg-[#007636]/10 blur-3xl" />
          <div className="absolute right-[-220px] top-28 h-[440px] w-[440px] rounded-full bg-[#b61b19]/10 blur-3xl" />

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="gold-line mx-auto mb-5" />
              <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl">
                Directorio
              </h1>
            </motion.div>

            <motion.div
              ref={heroRef}
              style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
              className="mx-auto mt-14 max-w-6xl"
            >
              <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white p-3 shadow-[0_35px_100px_rgba(15,23,42,0.18)]">
                <Image
                  src="/DIRECTORIO_COMPLETO.png"
                  alt="Directorio completo del Colegio de Contadores La Paz"
                  width={1400}
                  height={760}
                  priority
                  className="relative h-auto w-full rounded-[26px] object-cover"
                />

                <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[26px] bg-slate-950/72 p-6 text-white backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                    Directorio institucional
                  </p>
                  <h2 className="mt-2 text-2xl font-black md:text-3xl">
                    Colegio de Contadores La Paz
                  </h2>
                </div>
              </div>
            </motion.div>

            <div className="mt-20 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid w-full max-w-[760px] overflow-hidden rounded-[24px] bg-white shadow-[0_35px_90px_rgba(0,0,0,0.45)] md:grid-cols-[0.9fr_1fr]"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-[#b61b19]"
              >
                <FaTimes className="text-sm" />
              </button>

              <div className="relative h-[390px] bg-[linear-gradient(180deg,#ffffff_0%,#eef4ef_100%)] md:h-[430px]">
                <Image
                  src={selected.imagen}
                  alt={selected.nombre}
                  fill
                  sizes="330px"
                  className="object-contain object-bottom px-6 pb-0 pt-8 drop-shadow-[0_24px_30px_rgba(0,0,0,0.24)]"
                />
              </div>

              <div className="flex flex-col justify-center px-7 py-8 md:px-8">
                <div className="mb-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#b61b19] via-[#c8a23a] to-[#007636]" />

                <span className="w-fit rounded-full bg-[#b61b19] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-md">
                  {selected.cargo}
                </span>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 md:text-4xl">
                  {selected.nombre}
                </h2>

                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#007636]">
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

                    <div>
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

                    <div>
                      <h4 className="text-sm font-black text-slate-900">
                        Contacto
                      </h4>
                      <a
                        href={`mailto:${selected.correo}`}
                        className="text-sm font-bold text-[#007636] hover:underline"
                      >
                        {selected.correo}
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="mt-5 w-fit rounded-full bg-slate-950 px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#b61b19]"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}