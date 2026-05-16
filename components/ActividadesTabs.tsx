"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "MOSTRAR TODO", href: "/actividades" },
  { label: "EVENTOS", href: "/actividades/eventos" },
  { label: "BOLETINES", href: "/actividades/boletin" },
  { label: "SOLVENCIAS", href: "/actividades/servicios/solvencias" },
  { label: "LEGALIZACIONES", href: "/actividades/servicios/legalizaciones" },
  { label: "AMBIENTES", href: "/actividades/servicios/ambientes" },
];

export default function ActividadesTabs() {
  const pathname = usePathname();

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-7">
      {tabs.map((tab) => {
        const active = pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={
              active
                ? "rounded-full bg-[#fff0ed] px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#b61b19] transition hover:bg-[#ffe2dc]"
                : "rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100 hover:text-[#b61b19]"
            }
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}