import PageTemplate from "@/components/PageTemplate";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";

export default function ContactosPage() {
  return (
    <PageTemplate
      title="Contactos"
      description="Canales oficiales de atención institucional del Colegio de Contadores La Paz."
    >
      <section className="overflow-hidden border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 md:p-10">
            <div className="mb-6 h-1 w-24 bg-gradient-to-r from-red-700 via-yellow-500 to-green-700" />

            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              Atención institucional
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Comunícate con el Colegio de Contadores La Paz mediante nuestros
              canales oficiales.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+Colombia+172+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border-b border-slate-100 pb-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8f6f1] text-slate-950 transition group-hover:bg-red-700 group-hover:text-white">
                  <MapPin size={22} />
                </span>

                <div>
                  <h3 className="font-black text-slate-950">Dirección</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Calle Colombia N° 172, Edificio El Contador Piso 4
                  </p>
                </div>
              </a>

              <a
                href="tel:+5912337363"
                className="group flex items-start gap-4 border-b border-slate-100 pb-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8f6f1] text-slate-950 transition group-hover:bg-red-700 group-hover:text-white">
                  <Phone size={22} />
                </span>

                <div>
                  <h3 className="font-black text-slate-950">Teléfonos</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    2337363 - 2337844 - 2313877
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/59171563068"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border-b border-slate-100 pb-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8f6f1] text-slate-950 transition group-hover:bg-green-700 group-hover:text-white">
                  <MessageCircle size={22} />
                </span>

                <div>
                  <h3 className="font-black text-slate-950">WhatsApp</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    +591 715 63068
                  </p>
                </div>
              </a>

              <a
                href="mailto:colegio.contadores.lapaz@cclapaz.org"
                className="group flex items-start gap-4 border-b border-slate-100 pb-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8f6f1] text-slate-950 transition group-hover:bg-red-700 group-hover:text-white">
                  <Mail size={22} />
                </span>

                <div>
                  <h3 className="font-black text-slate-950">
                    Correo institucional
                  </h3>
                  <p className="mt-1 break-all text-sm leading-6 text-slate-600">
                    colegio.contadores.lapaz@cclapaz.org
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8f6f1] text-slate-950">
                  <Clock size={22} />
                </span>

                <div>
                  <h3 className="font-black text-slate-950">
                    Horario de atención
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Lunes a viernes — 08:30 a 16:30
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/59171563068"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-700 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-slate-950"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href="mailto:colegio.contadores.lapaz@cclapaz.org?subject=Consulta%20institucional%20CCLP"
                className="inline-flex items-center justify-center gap-3 bg-red-700 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-slate-950"
              >
                <Send size={18} />
                Correo
              </a>
            </div>
          </div>

          <div className="min-h-[420px] border-t border-slate-200 lg:border-l lg:border-t-0">
            <iframe
              title="Ubicación Colegio de Contadores La Paz"
              src="https://www.google.com/maps?q=Calle%20Colombia%20172%20La%20Paz%20Bolivia&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}