"use client";

import { useEffect, useState, type ComponentType } from "react";
import PageTemplate from "@/components/PageTemplate";
import {
  AlarmClock,
  ClipboardList,
  ScrollText,
  RefreshCcw,
  IdCard,
  QrCode,
  CreditCard,
  Landmark,
  GraduationCap,
} from "lucide-react";

type AsociadoItem = {
  title: string;
  subtitle: string;
  image: string;
  Icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
};

const asociadosItems: AsociadoItem[] = [
  {
    title: "Horarios de atención",
    subtitle: "Consulta los horarios oficiales de atención institucional.",
    image: "/HORARIOS_DE_ATENCION.png",
    Icon: AlarmClock,
  },
  {
    title: "Requisitos Contador Público",
    subtitle: "Documentación requerida para contador público.",
    image: "/REQUISITOS CONTADOR PÚBLICO.png",
    Icon: ClipboardList,
  },
  {
    title: "Requisitos Contador General",
    subtitle: "Requisitos para contador general.",
    image: "/REQUISITOS CONTADOR GENERAL.png",
    Icon: ScrollText,
  },
  {
    title: "Actualización de datos",
    subtitle: "Información para actualización de datos institucionales.",
    image: "/REQUISITOS ACTUALIZACIÓN DE DATOS.png",
    Icon: RefreshCcw,
  },
  {
    title: "Recarnetización",
    subtitle: "Proceso de renovación y emisión de carnet institucional.",
    image: "/RECARNETIZACION.png",
    Icon: IdCard,
  },
  {
    title: "QR Cuotas 2026",
    subtitle: "Código QR oficial para cuotas gestión 2026.",
    image: "/QR CUOTAS 2026.png",
    Icon: QrCode,
  },
  {
    title: "QR Cuotas y Servicios",
    subtitle: "Pagos rápidos mediante código QR.",
    image: "/QR CUOTAS Y SERVICIOS.png",
    Icon: CreditCard,
  },
  {
    title: "Depósito y transferencia",
    subtitle: "Datos bancarios para depósitos y transferencias.",
    image: "/DEPÓSITO Y TRANSFERENCIA CUENTAS.png",
    Icon: Landmark,
  },
  {
    title: "Requisito de inscripción",
    subtitle: "Requisitos para inscripción al Colegio de Contadores.",
    image: "/REQUISITO DE INSCRIPCION AL COLEGIO DE CONTADORES.png",
    Icon: GraduationCap,
  },
];

export default function AsociadosPage() {
  const [selected, setSelected] = useState<AsociadoItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <PageTemplate
        title="Asociados"
        description="Página destinada a brindar información para los asociados, servicios disponibles, consultas y orientación institucional."
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {asociadosItems.map((item) => {
            const Icon = item.Icon;

            return (
              <button
                type="button"
                key={item.title}
                onClick={() => setSelected(item)}
                className="group relative min-h-[210px] overflow-hidden rounded-[26px] border border-white/80 bg-[#fffefa] p-5 text-left shadow-[0_14px_38px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:min-h-[230px] sm:rounded-[30px] sm:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-slate-200/50 opacity-70 blur-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-white/70 sm:h-32 sm:w-32" />

                <div className="relative flex items-start gap-4 sm:gap-5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_14px_35px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-16 sm:w-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/30 to-slate-200/30" />
                    <div className="absolute left-2 top-2 h-5 w-8 rounded-full bg-white/80 blur-md" />

                    <Icon
                      size={28}
                      strokeWidth={2.2}
                      className="relative z-10 text-slate-900 drop-shadow-[0_6px_14px_rgba(15,23,42,0.18)] sm:h-8 sm:w-8"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-base font-black uppercase leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-red-700 sm:text-lg">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-slate-100 pt-4 sm:bottom-6 sm:left-6 sm:right-6 sm:pt-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-700 sm:text-xs">
                    Ver información
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white transition-all duration-500 group-hover:translate-x-1 group-hover:bg-red-700 sm:h-10 sm:w-10">
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </PageTemplate>

      {selected && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/80 px-3 py-5 backdrop-blur-md sm:px-4 sm:py-8"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[24px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:rounded-[30px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-red-700 via-red-600 to-green-800 px-4 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70 sm:text-xs sm:tracking-[0.28em]">
                  Información institucional
                </p>

                <h3 className="mt-1 truncate text-base font-black text-white sm:text-xl">
                  {selected.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl font-black text-white transition hover:bg-white hover:text-red-700 sm:h-11 sm:w-11"
              >
                ×
              </button>
            </div>

            <div className="max-h-[78vh] overflow-auto bg-slate-100 p-3 sm:p-4 md:p-6">
              <div className="rounded-2xl bg-white p-2 shadow-inner sm:p-3">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="mx-auto h-auto max-h-[72vh] w-auto max-w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}