import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#101114] text-white">
      <div className="section-container grid gap-10 py-16 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h3 className="text-2xl font-black">Colegio de Contadores La Paz</h3>
          <p className="mt-4 leading-7 text-white/75">
            Institución colegiada comprometida con la ética profesional, la
            formación continua y la representación del profesional contador.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {/* Cambia por redes reales si ya las tienes */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#007636]"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#b61b19]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Enlaces rápidos</h4>
          <div className="mt-5 grid gap-3 text-white/75">
            <Link href="/#inicio" className="footer-link">
              Inicio
            </Link>
            <Link href="/#institucional" className="footer-link">
              Institucional
            </Link>
            <Link href="/#servicios" className="footer-link">
              Servicios
            </Link>
            <Link href="/tour360" className="footer-link">
              Tour 360
            </Link>
            <Link href="/#contactenos" className="footer-link">
              Contáctenos
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Contacto</h4>
          <div className="mt-5 space-y-3 text-white/75">
            <p>Calle Colombia N° 172</p>
            <p>Edificio el Contador, Piso 4</p>
            <p>Zona San Pedro, La Paz - Bolivia</p>
            <p>+591 715 63068</p>
            <p className="break-all">colegio.contadores.lapaz@cclapaz.org</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Mensaje institucional</h4>
          <p className="mt-5 leading-7 text-white/75">
            Un portal moderno debe transmitir orden, seriedad y excelencia.
            Esta propuesta está diseñada para que el sitio se vea fuerte,
            elegante y visualmente memorable.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col gap-3 py-5 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Colegio de Contadores La Paz. Todos los
            derechos reservados.
          </p>
          <p>Diseño moderno · institucional · profesional</p>
        </div>
      </div>
    </footer>
  );
}