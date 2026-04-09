"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaExpand,
  FaCompress,
  FaArrowLeft,
  FaLocationArrow,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PanolensModule = typeof import("panolens");

export default function Tour360Page() {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const viewerInstanceRef = useRef<any>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentScene, setCurrentScene] = useState("Escena 1");
  const [isLoading, setIsLoading] = useState(true);
  const [hasViewerError, setHasViewerError] = useState(false);

  useEffect(() => {
    let mounted = true;
    let PANOLENS: PanolensModule | null = null;

    const initViewer = async () => {
      try {
        if (!viewerRef.current) return;

        setIsLoading(true);
        setHasViewerError(false);

        // Import dinámico para evitar problemas SSR en Next/Vercel
        PANOLENS = await import("panolens");

        if (!mounted || !viewerRef.current) return;

        const viewer = new PANOLENS.Viewer({
          container: viewerRef.current,
          autoRotate: false,
          controlBar: false,
          output: "console",
        });

        viewerInstanceRef.current = viewer;

        // Panoramas
        const pano1 = new PANOLENS.ImagePanorama("/IMAGEN360_1.jpg");
        const pano2 = new PANOLENS.ImagePanorama("/IMAGEN360_2.jpg");

        // Flecha de avance
        const goToSecond = new PANOLENS.Infospot(
          420,
          PANOLENS.DataImage.Arrow
        );
        goToSecond.position.set(5000, -250, -1800);
        goToSecond.addHoverText("Ir a la siguiente vista");
        goToSecond.addEventListener("click", () => {
          viewer.setPanorama(pano2);
          setCurrentScene("Escena 2");
        });

        // Flecha de retorno
        const goToFirst = new PANOLENS.Infospot(
          420,
          PANOLENS.DataImage.Arrow
        );
        goToFirst.position.set(-5000, -250, 1800);
        goToFirst.addHoverText("Volver a la vista anterior");
        goToFirst.addEventListener("click", () => {
          viewer.setPanorama(pano1);
          setCurrentScene("Escena 1");
        });

        pano1.add(goToSecond);
        pano2.add(goToFirst);

        // Cuando termine de entrar un panorama, ocultamos loader y forzamos resize
        const handleEnterPano1 = () => {
          if (!mounted) return;
          setCurrentScene("Escena 1");
          setIsLoading(false);

          requestAnimationFrame(() => {
            window.dispatchEvent(new Event("resize"));
          });
        };

        const handleEnterPano2 = () => {
          if (!mounted) return;
          setCurrentScene("Escena 2");
          setIsLoading(false);

          requestAnimationFrame(() => {
            window.dispatchEvent(new Event("resize"));
          });
        };

        pano1.addEventListener("enter-fade-start", handleEnterPano1);
        pano2.addEventListener("enter-fade-start", handleEnterPano2);

        viewer.add(pano1, pano2);
        viewer.setPanorama(pano1);

        // Resize de seguridad para que no aparezca el visor mal calculado
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 250);

        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 900);
      } catch (error) {
        console.error("Error al iniciar el Tour 360:", error);
        if (mounted) {
          setHasViewerError(true);
          setIsLoading(false);
        }
      }
    };

    initViewer();

    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));

      // Forzamos recalcular tamaño cuando cambia fullscreen
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 200);
    };

    const onResize = () => {
      if (viewerInstanceRef.current) {
        // Disparamos resize global para que Panolens recalcule el canvas
        window.dispatchEvent(new Event("resize"));
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    window.addEventListener("orientationchange", onResize);

    return () => {
      mounted = false;
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      window.removeEventListener("orientationchange", onResize);

      try {
        if (viewerInstanceRef.current) {
          viewerInstanceRef.current.dispose();
          viewerInstanceRef.current = null;
        }
      } catch (error) {
        console.warn("Error al liberar el visor 360:", error);
      }
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!wrapperRef.current) return;

      if (!document.fullscreenElement) {
        await wrapperRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("No se pudo cambiar a pantalla completa:", error);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1018] px-4 pb-16 pt-[140px] md:px-8 md:pb-20 md:pt-[150px]">
        <div className="section-container">
          {/* Encabezado */}
          <div className="mb-8 text-center">
            <div className="gold-line mx-auto mb-5" />
            <h1 className="text-4xl font-black text-white md:text-5xl">
              Tour 360 Institucional
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Navega entre las vistas panorámicas con flechas tipo Street View,
              dentro de un visor moderno, estable y preparado para crecer a más
              escenas del recorrido institucional.
            </p>
          </div>

          {/* Caja principal */}
          <div
            ref={wrapperRef}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-[#12161d] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            {/* Cabecera */}
            <div className="flex flex-col gap-4 border-b border-white/10 bg-white/5 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#007636]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7ce3a9]">
                  <FaLocationArrow />
                  {currentScene}
                </span>

                <h2 className="mt-3 text-xl font-bold text-white md:text-2xl">
                  Recorrido panorámico del Colegio de Contadores La Paz
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={toggleFullscreen}
                  className="inline-flex items-center gap-2 rounded-full bg-[#b61b19] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#991816]"
                >
                  {isFullscreen ? <FaCompress /> : <FaExpand />}
                  {isFullscreen
                    ? "Cerrar pantalla completa"
                    : "Pantalla completa"}
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <FaArrowLeft />
                  Volver al inicio
                </Link>
              </div>
            </div>

            {/* Contenido */}
            <div className="grid lg:grid-cols-[1fr_320px]">
              <div className="bg-black">
                <div className="tour-viewer">
                  {/* Contenedor del visor */}
                  <div ref={viewerRef} className="h-full w-full" />

                  {/* Loader mientras carga */}
                  {isLoading && !hasViewerError && (
                    <div className="tour-loader">
                      <div className="tour-loader-box">
                        <div className="tour-spinner" />
                        <div>
                          <p className="text-lg font-bold">
                            Cargando recorrido 360...
                          </p>
                          <p className="mt-2 text-sm text-white/70">
                            Espere un momento mientras se inicializa el visor.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error amigable */}
                  {hasViewerError && (
                    <div className="tour-loader">
                      <div className="tour-loader-box max-w-md px-6">
                        <p className="text-xl font-bold text-white">
                          No se pudo cargar el Tour 360
                        </p>
                        <p className="text-sm leading-7 text-white/75">
                          Verifique que existan correctamente las imágenes
                          <strong> /public/IMAGEN360_1.jpg </strong> y
                          <strong> /public/IMAGEN360_2.jpg</strong>.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <aside className="tour-panel border-t border-white/10 bg-[#0f141a] p-6 text-white lg:border-l lg:border-t-0">
                <h3 className="text-xl font-bold">Indicaciones</h3>

                <ul className="mt-5 space-y-4 text-sm leading-7 text-white/75">
                  <li>• Use el mouse o el dedo para mirar alrededor.</li>
                  <li>• Haga clic en la flecha dentro de la imagen para avanzar.</li>
                  <li>• En la segunda escena podrá volver a la anterior.</li>
                  <li>• Puede abrir el recorrido en pantalla completa.</li>
                  <li>• Este visor está preparado para futuras ampliaciones.</li>
                </ul>

                <div className="mt-8 rounded-3xl bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                    Estado del recorrido
                  </p>

                  <p className="mt-3 text-lg font-bold text-[#7ce3a9]">
                    Conexión activa entre IMAGEN360_1 e IMAGEN360_2
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    El sistema ya admite crecimiento hacia más panoramas,
                    señalización institucional y puntos de información.
                  </p>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm font-semibold text-white">
                    Recomendación técnica
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Para una demo impecable frente al presidente, conviene usar
                    imágenes panorámicas optimizadas y de buena resolución para
                    evitar demoras de carga.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}