"use client";

import { useState } from "react";
import Image from "next/image";
import PageTemplate from "@/components/PageTemplate";
import { CalendarDays, Camera, X, Sparkles } from "lucide-react";

const galeria = [
  {
    titulo: "Juramento y entrega de credenciales",
    fecha: "24 de abril, 10:24 am",
    imagen: "/galeria1.jpg",
    descripcion:
      "El Colegio de Contadores de La Paz realizó un emotivo juramento y entrega de credenciales a sus nuevos asociados, presidido por la Lic. Roxana Mamani. Destacó la importancia de la ética y la formación continua. Los nuevos miembros, orgullosos, inician su camino en la contabilidad.",
  },
  {
    titulo: "Feliz Día del Contador Interamericano",
    fecha: "17 de mayo",
    imagen: "/galeria2.jpg",
    descripcion:
      "El Directorio del Colegio de Contadores de La Paz saluda a todos los contadores y contadoras. Gracias por su ética, trabajo y compromiso con el desarrollo de Bolivia.",
  },
];

export default function GaleriaPage() {
  const [selected, setSelected] = useState<(typeof galeria)[number] | null>(
    null
  );

  return (
    <>
      <PageTemplate
        title="Galería"
        description="Fotografías, actividades, eventos, encuentros institucionales y material visual del Colegio de Contadores La Paz."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {galeria.map((item, index) => (
            <button
              type="button"
              key={item.titulo}
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-[34px] bg-white text-left shadow-[0_22px_65px_rgba(15,23,42,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_95px_rgba(15,23,42,0.24)]"
            >
              <div className="absolute inset-x-8 top-0 z-20 h-1.5 rounded-full bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />

              <div className="relative h-[330px] overflow-hidden sm:h-[400px]">
                <Image
                  src={item.imagen}
                  alt={item.titulo}
                  fill
                  priority={index === 0}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                <div className="absolute left-5 top-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-white backdrop-blur-xl">
                  <Camera size={25} />
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                    <CalendarDays size={14} />
                    {item.fecha}
                  </div>

                  <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                    {item.titulo}
                  </h2>
                </div>
              </div>

              <div className="relative p-6">
                <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-green-700">
                  <Sparkles size={16} />
                  Actividad institucional
                </div>

                <p className="line-clamp-4 text-sm leading-7 text-slate-600">
                  {item.descripcion}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-red-700">
                    Ver publicación
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </PageTemplate>

      {selected && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[30px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white backdrop-blur transition hover:bg-red-700"
            >
              <X size={22} />
            </button>

            <div className="grid max-h-[92vh] overflow-auto lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[360px] bg-slate-100 lg:min-h-[620px]">
                <Image
                  src={selected.imagen}
                  alt={selected.titulo}
                  fill
                  sizes="(max-width:1024px) 100vw, 60vw"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col justify-center p-7">
                <div className="mb-5 h-1 w-28 rounded-full bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />

                <p className="flex w-fit items-center gap-2 rounded-full bg-[#f8f6f1] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-700">
                  <CalendarDays size={14} />
                  {selected.fecha}
                </p>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
                  {selected.titulo}
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-600">
                  {selected.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}