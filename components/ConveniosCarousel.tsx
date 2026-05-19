"use client";

import Image from "next/image";
import { convenios } from "@/lib/convenios";

export default function ConveniosCarousel() {
  const logos = [...convenios, ...convenios];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="section-title">Convenios Institucionales</h2>
          <p className="section-text mt-5">
            Entidades aliadas y enlaces de interés para nuestros asociados.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden bg-white py-8">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-[scrollLogos_34s_linear_infinite] items-center gap-12 px-8">
            {logos.map((item, index) => (
              <a
                key={`${item.nombre}-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 w-52 shrink-0 items-center justify-center bg-white p-6 opacity-75 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={item.imagen}
                  alt={item.nombre}
                  width={220}
                  height={110}
                  className="max-h-20 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}