import Image from "next/image";
import PageTemplate from "@/components/PageTemplate";
import { ArrowUpRight } from "lucide-react";
import { convenios } from "@/lib/convenios";

export default function ConveniosPage() {
  return (
    <PageTemplate
      title="Convenios"
      description="Convenios institucionales, alianzas estratégicas, beneficios y acuerdos vigentes."
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {convenios.map((item) => (
          <a
            key={item.nombre}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[390px] flex-col items-center justify-between overflow-hidden rounded-[34px] bg-white p-7 text-center transition-all duration-500 hover:-translate-y-2 sm:min-h-[420px]"
            style={{
              boxShadow:
                "18px 18px 45px rgba(15,23,42,0.12), -18px -18px 45px rgba(255,255,255,0.95)",
            }}
          >
            <div className="absolute inset-x-10 top-0 h-1.5 rounded-full bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />

            <div className="flex h-40 w-full items-center justify-center bg-white p-6 transition duration-500 group-hover:scale-[1.04]">
              <Image
                src={item.imagen}
                alt={item.nombre}
                width={320}
                height={170}
                className="max-h-28 w-auto object-contain"
              />
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-green-700">
                Convenio institucional
              </p>

              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {item.nombre}
              </h2>

              <p className="mt-2 text-sm font-bold text-red-700">
                {item.subtitulo}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.22em] text-slate-800 transition duration-500 group-hover:text-red-700">
              Visitar sitio
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[8px_8px_18px_rgba(15,23,42,0.12),-8px_-8px_18px_rgba(255,255,255,1)] transition duration-500 group-hover:rotate-12 group-hover:bg-red-700 group-hover:text-white">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageTemplate>
  );
}