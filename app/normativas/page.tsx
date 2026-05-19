"use client";

import { useMemo, useState, type ComponentType } from "react";
import PageTemplate from "@/components/PageTemplate";
import {
  FileText,
  Download,
  Scale,
  Landmark,
  ClipboardCheck,
  BookOpen,
  FileSignature,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Normativa = {
  title: string;
  description?: string;
  file: string;
  type: "PDF" | "WORD";
  Icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
};

const normativas: Normativa[] = [
  {
    title: "RESOLUCIÓN N°12 COMITÉ ELECTORAL",
    file: "/00173bd68a5cac77ce936e335145e6c7.pdf",
    type: "PDF",
    Icon: ShieldCheck,
  },
  {
    title: "RESOLUCIÓN N° 5-COMITÉ ELECTORAL",
    file: "/41a6e9cd90bb7b2b3a9ee4b1ac6305bd.pdf",
    type: "PDF",
    Icon: ShieldCheck,
  },
  {
    title: "FÓRMULAS HABILITADAS",
    file: "/e306502e4f18abfad6d14cfd33447208.pdf",
    type: "PDF",
    Icon: ClipboardCheck,
  },
  {
    title: "RESOLUCIÓN N° 3-COMITÉ ELECTORAL",
    file: "/c67df6740741f668c126236741a30639.pdf",
    type: "PDF",
    Icon: ShieldCheck,
  },
  {
    title: "RESOLUCIÓN N° 2-COMITÉ ELECTORAL",
    file: "/f88351e4172c537fe53d56ede865b2c2.pdf",
    type: "PDF",
    Icon: ShieldCheck,
  },
  {
    title: "DECRETO SUPREMO N° 5503-DICIEMBRE 2025",
    file: "/011e6b05770f3562272b34968df99518.pdf",
    type: "PDF",
    Icon: Landmark,
  },
  {
    title: "Impugnación SIN",
    file: "/60813221f3f8d7e18677c55f2cec4364.pdf",
    type: "PDF",
    Icon: FileSignature,
  },
  {
    title: "PLANTILLA DOCENTES GENERAL",
    description: "Plantilla para desarrollo de cursos de capacitación continua.",
    file: "/11987628ed7b4a30a2e312d4842b27ec.docx",
    type: "WORD",
    Icon: FileText,
  },
  {
    title: "FORMULARIO DE QUEJAS Y RECLAMOS",
    file: "/4e7a058d20cb46659301df859a17165e.pdf",
    type: "PDF",
    Icon: FileSignature,
  },
  {
    title:
      "Manual Uso-Presentación de Formulario de Reclamos o Sugerencias ante entes reguladores",
    file: "/e5e5a15d4e847d000d1ed089712c5a65.pdf",
    type: "PDF",
    Icon: BookOpen,
  },
  {
    title: "DECRETO SUPREMO N° 5200",
    file: "/c01ec2e66df5b269092fa62d57c69322.pdf",
    type: "PDF",
    Icon: Landmark,
  },
  {
    title: "DECRETO SUPREMO N° 5196",
    file: "/9cc28ab3b70d2eb96f9a6a1df704ba5c.pdf",
    type: "PDF",
    Icon: Landmark,
  },
  {
    title: "LEY N° 1582 LEY DE 01 DE OCTUBRE DE 2024",
    description: "Modificación de la Ley de Pensiones.",
    file: "/15a433c86f2cf73ce2165a31c7bdf01b.pdf",
    type: "PDF",
    Icon: Scale,
  },
  {
    title: "BANCARIZACIÓN",
    file: "/888bff3405058f5244c2eecdec9dda13.pdf",
    type: "PDF",
    Icon: Landmark,
  },
  {
    title: "RESOLUCIÓN NORMATIVA DE DIRECTORIO Nº 102400000031",
    description:
      "Modificaciones a la RND N° 101900000010 y RND N° 102000000025.",
    file: "/529dd08a860879b90ef4fd3d24c84d41.pdf",
    type: "PDF",
    Icon: FileText,
  },
  {
    title: "RESOLUCIÓN NORMATIVA DE DIRECTORIO Nº 102400000032",
    description: "Prórroga para la presentación y pago del Formulario 608.",
    file: "/c59bae34ce09b22b5007882a80036dba.pdf",
    type: "PDF",
    Icon: FileText,
  },
  {
    title: "RESOLUCIÓN NORMATIVA DE DIRECTORIO Nº 102500000011",
    description:
      "Prórroga de vencimiento para el envío del registro auxiliar de bancarización.",
    file: "/f4fa11847f22c706dca0d879b8215461.pdf",
    type: "PDF",
    Icon: FileText,
  },
  {
    title: "RESOLUCIÓN NORMATIVA DE DIRECTORIO Nº 102500000028",
    description:
      "Prórroga de vencimientos para el cumplimiento de obligaciones tributarias.",
    file: "/3a362f292edb5bc0151dd6e47bd1c719.pdf",
    type: "PDF",
    Icon: FileText,
  },
  {
    title: "Resolución Administrativa SEPREC N°301/2025",
    file: "/492be7aefc9bdf39dddbf17481de9a46.pdf",
    type: "PDF",
    Icon: FileText,
  },
  {
    title: "Resolución Normativa N° 102500000015",
    description:
      "Prórroga para la presentación física y digital de obligaciones tributarias del IUE.",
    file: "/45df8a9f1baeae0e3008933043cc218f.pdf",
    type: "PDF",
    Icon: FileText,
  },
  {
    title:
      "PROPUESTA OFICIAL DE ANTEPROYECTO DE LEY DE CÓDIGO TRIBUTARIO BOLIVIANO",
    file: "/2469952cd74bae619489038f470e441c.pdf",
    type: "PDF",
    Icon: Scale,
  },
  {
    title: "Ley N° 1178",
    description: "Ley de Administración y Control Gubernamentales.",
    file: "/693605a238deab743944c49186ba5672.pdf",
    type: "PDF",
    Icon: Scale,
  },
  {
    title: "Ley N° 2492",
    description: "Código Tributario de Bolivia.",
    file: "/0c8f8c8896eaa4a5cfd74b613a95f23c.pdf",
    type: "PDF",
    Icon: Scale,
  },
  {
    title: "Ley del trabajo",
    description: "Ley General del Trabajo.",
    file: "/20d9d747af9b998a280d3f14f70607fb.pdf",
    type: "PDF",
    Icon: Scale,
  },
  {
    title: "Ley Nº 14379",
    description: "Código de Comercio.",
    file: "/cd50deb45ab816f4316382f5c69987bb.pdf",
    type: "PDF",
    Icon: Scale,
  },
];

const PER_PAGE = 9;

export default function NormativasPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(normativas.length / PER_PAGE);

  const visibleItems = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return normativas.slice(start, start + PER_PAGE);
  }, [page]);

  const goPage = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageTemplate
      title="Normativas"
      description="Documentos normativos, resoluciones, leyes, decretos, formularios y material institucional disponible para descarga."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {visibleItems.map((item) => {
          const Icon = item.Icon;

          return (
            <article
              key={item.title}
              className="group relative min-h-[260px] overflow-hidden rounded-[30px] border border-white/80 bg-[#fffefa] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-200/50 opacity-70 blur-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-white/70" />

              <div className="relative flex items-start gap-5">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_14px_35px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/30 to-slate-200/30" />
                  <div className="absolute left-2 top-2 h-5 w-8 rounded-full bg-white/80 blur-md" />

                  <Icon
                    size={31}
                    strokeWidth={2.2}
                    className="relative z-10 text-slate-900 drop-shadow-[0_6px_14px_rgba(15,23,42,0.18)]"
                  />
                </div>

                <div className="min-w-0">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                    {item.type}
                  </span>

                  <h2 className="mt-4 text-base font-black uppercase leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-red-700 sm:text-lg">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-green-700">
                  Descargar
                </span>

                <a
                  href={item.file}
                  download
                  className="group/download relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-red-700/20 bg-white text-red-700 shadow-[0_12px_30px_rgba(185,28,28,0.18)] transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:border-red-700 hover:text-white hover:shadow-[0_18px_45px_rgba(185,28,28,0.35)]"
                  aria-label={`Descargar ${item.title}`}
                >
                  <span className="absolute inset-x-0 bottom-0 h-0 rounded-full bg-gradient-to-t from-red-800 via-red-600 to-red-500 transition-all duration-500 ease-out group-hover/download:h-full" />
                  <span className="absolute -bottom-2 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-red-400/60 blur-md transition-all duration-500 group-hover/download:bottom-5 group-hover/download:scale-[2.8]" />
                  <span className="absolute left-2 top-2 h-3 w-5 rounded-full bg-white/70 blur-sm opacity-0 transition-all duration-500 group-hover/download:opacity-80" />

                  <Download
                    size={19}
                    strokeWidth={2.4}
                    className="relative z-10 transition-all duration-500 group-hover/download:translate-y-[2px]"
                  />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 flex items-center justify-center gap-2">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => goPage(page - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          const active = pageNumber === page;

          return (
            <button
              type="button"
              key={pageNumber}
              onClick={() => goPage(pageNumber)}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black transition ${
                active
                  ? "bg-red-700 text-white shadow-lg shadow-red-900/20"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-950 hover:text-white"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => goPage(page + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </PageTemplate>
  );
}