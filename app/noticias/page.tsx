import Image from "next/image";
import PageTemplate from "@/components/PageTemplate";
import {
  CalendarDays,
  Newspaper,
  ArrowUpRight,
  Megaphone,
  Clock,
  Laptop,
  UserRound,
} from "lucide-react";

const noticias = [
  {
    titulo: "Capacitación virtual: Llenado del Formulario 605 – SIAT Desktop",
    categoria: "Capacitación",
    fecha: "25 de mayo",
    hora: "19:00",
    modalidad: "Virtual",
    imagen: "/noticia1.jpg",
    destacado: true,
    descripcion:
      "El Colegio de Contadores de La Paz invita a dominar la presentación de Estados Financieros Digitales en el SIAT Desktop.",
    detalles: [
      "Duración: 2 horas",
      "Público externo: Bs. 70",
      "Asociados al CCLP: Bs. 50",
      "Capacitadora: Lic. Mary Bell Maldonado Alba",
      "Marco normativo y obligados a presentar EEFF",
      "Instalación, registro, cargado, empaquetado y presentación del Form. 605",
    ],
  },
  {
    titulo: "Comunicado importante - CCLP",
    categoria: "Comunicado",
    fecha: "Atención institucional",
    hora: "08:30 a 16:30",
    modalidad: "Horario continuo",
    imagen: "/noticia2.jpg",
    destacado: false,
    descripcion:
      "Debido a la coyuntura social que atraviesa La Paz, el Colegio de Contadores de La Paz informa que la atención en oficinas será en horario continuo.",
    detalles: [
      "Horario de atención: 08:30 a 16:30 horas",
      "La medida busca resguardar la seguridad del personal y asociados.",
      "Gracias por su comprensión.",
    ],
  },
];

export default function NoticiasPage() {
  const principal = noticias[0];
  const secundaria = noticias[1];

  return (
    <PageTemplate
      title="Noticias"
      description="Noticias, comunicados, anuncios importantes, capacitaciones y novedades institucionales del Colegio de Contadores La Paz."
    >
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="group relative overflow-hidden rounded-[34px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(15,23,42,0.25)]">
          <div className="absolute inset-x-8 top-0 z-20 h-1.5 rounded-full bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />

          <div className="relative h-[360px] overflow-hidden sm:h-[450px]">
            <Image
              src={principal.imagen}
              alt={principal.titulo}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-red-700 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg">
              <Newspaper size={15} />
              Nota principal
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                  <CalendarDays size={14} />
                  {principal.fecha}
                </span>

                <span className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                  <Clock size={14} />
                  {principal.hora}
                </span>

                <span className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                  <Laptop size={14} />
                  {principal.modalidad}
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
                {principal.titulo}
              </h2>
            </div>
          </div>

          <div className="p-7">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-green-700">
              {principal.categoria}
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              {principal.descripcion}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {principal.detalles.map((detalle) => (
                <div
                  key={detalle}
                  className="rounded-2xl bg-[#f8f6f1] px-4 py-3 text-sm font-semibold leading-6 text-slate-700"
                >
                  {detalle}
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-slate-800">
                Ver capacitación
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white transition duration-500 group-hover:rotate-12 group-hover:bg-red-700">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-[34px] bg-white shadow-[0_20px_65px_rgba(15,23,42,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
          <div className="absolute inset-x-8 top-0 z-20 h-1.5 rounded-full bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />

          <div className="relative h-[300px] overflow-hidden">
            <Image
              src={secundaria.imagen}
              alt={secundaria.titulo}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-xl">
              <Megaphone size={23} />
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <span className="rounded-full bg-red-700 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                {secundaria.categoria}
              </span>

              <h3 className="mt-4 text-2xl font-black leading-tight text-white">
                {secundaria.titulo}
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-5 grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl bg-[#f8f6f1] p-4">
                <Clock className="text-red-700" size={20} />

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Horario
                  </p>
                  <p className="font-black text-slate-950">
                    {secundaria.hora} horas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-[#f8f6f1] p-4">
                <UserRound className="text-green-700" size={20} />

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Modalidad
                  </p>
                  <p className="font-black text-slate-950">
                    {secundaria.modalidad}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              {secundaria.descripcion}
            </p>

            <div className="mt-5 space-y-3">
              {secundaria.detalles.map((detalle) => (
                <p
                  key={detalle}
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]"
                >
                  {detalle}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </PageTemplate>
  );
}