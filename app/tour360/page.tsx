"use client";

import { useEffect, useRef, useState } from "react";
import { FaExpand, FaCompress, FaHome } from "react-icons/fa";
import Navbar from "@/components/Navbar";

type PanolensModule = typeof import("panolens");

type HotspotLink = {
  target: string;
  label: string;
  position: [number, number, number];
};

type PanoramaItem = {
  id: string;
  file: string;
  links: HotspotLink[];
};

const panoramasData: PanoramaItem[] = [
  {
    id: "afuera",
    file: "/EDIFICIO_AFUERA.jpg",
    links: [
      {
        target: "planta",
        label: "ENTRAR A COLEGIO DE CONTADORES",
        position: [4797.87, 882.32, 1071.76],
      },
    ],
  },
  {
    id: "planta",
    file: "/PLANTA%20BAJA.jpg",
    links: [
      {
        target: "afuera",
        label: "SALIR AFUERA",
        position: [-4956.46, -368.58, -532.13],
      },
      {
        target: "asensor",
        label: "ENTRAR A ASENSOR",
        position: [970.64, -538.81, 4868.54],
      },
    ],
  },
  {
    id: "asensor",
    file: "/ASENSOR.jpg",
    links: [
      {
        target: "planta",
        label: "PLANTA BAJA",
        position: [4684.47, -1007.95, 1398.54],
      },
      {
        target: "pisoColegio",
        label: "PISO COLEGIO DE CONTADORES",
        position: [4523.48, -1677.73, 1277.16],
      },
      {
        target: "pisoAuditorio",
        label: "PISO DE AUDITORIO",
        position: [4184.78, -2513.07, 1046.18],
      },
    ],
  },
  {
    id: "pisoColegio",
    file: "/PISO%20DE%20COLEGIO%20DE%20CONTADORES.jpg",
    links: [
      {
        target: "asensor",
        label: "ENTRAR A ASENSOR",
        position: [-4948.75, -510.12, -417.72],
      },
      {
        target: "recepcion",
        label: "ENTRAR A RECEPCION",
        position: [4953.76, -501.41, 341.77],
      },
    ],
  },
  {
    id: "recepcion",
    file: "/RECEPCION.jpg",
    links: [
      {
        target: "pisoColegio",
        label: "SALIDA",
        position: [-4986.89, -323.43, 7.64],
      },
    ],
  },
  {
    id: "pisoAuditorio",
    file: "/PISO%20DE%20AUDITORIO.jpg",
    links: [
      {
        target: "asensor",
        label: "ENTRAR A ASENSOR",
        position: [63.43, -558.67, 4961.57],
      },
      {
        target: "auditorio",
        label: "ENTRAR A AUDITORIO",
        position: [4948.41, -476.32, 500.5],
      },
    ],
  },
  {
    id: "auditorio",
    file: "/AUDITORIO.jpg",
    links: [
      {
        target: "pisoAuditorio",
        label: "PISO DE AUDITORIO",
        position: [4989.81, -93.85, -124.0],
      },
    ],
  },
];

export default function Tour360Page() {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const viewerInstanceRef = useRef<any>(null);
  const panoramasRef = useRef<Record<string, any>>({});

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let PANOLENS: PanolensModule | null = null;

    const initViewer = async () => {
      try {
        if (!viewerRef.current) return;

        PANOLENS = await import("panolens");

        if (!mounted || !viewerRef.current) return;

        const viewer = new PANOLENS.Viewer({
          container: viewerRef.current,
          autoRotate: false,
          controlBar: false,
          output: "console",
          cameraFov: 75,
          reverseDragging: false,
        });

        viewerInstanceRef.current = viewer;

        const panoramaMap: Record<string, any> = {};

        panoramasData.forEach((item) => {
          const panorama = new PANOLENS.ImagePanorama(item.file);

          panorama.addEventListener("enter-fade-start", () => {
            if (!mounted) return;

            setTimeout(() => {
              setIsLoading(false);
              window.dispatchEvent(new Event("resize"));
            }, 250);
          });

          panoramaMap[item.id] = panorama;
        });

        const goToPanorama = (target: string) => {
          const destination = panoramaMap[target];
          if (!destination || !viewerInstanceRef.current) return;

          setIsLoading(true);

          setTimeout(() => {
            viewerInstanceRef.current.setPanorama(destination);
          }, 120);

          setTimeout(() => {
            setIsLoading(false);
            window.dispatchEvent(new Event("resize"));
          }, 750);
        };

        panoramasData.forEach((item) => {
          const currentPanorama = panoramaMap[item.id];

          item.links.forEach((link) => {
            const infospot = new PANOLENS.Infospot(
              item.id === "asensor" ? 340 : 430,
              PANOLENS.DataImage.Arrow
            );

            infospot.position.set(
              link.position[0],
              link.position[1],
              link.position[2]
            );

            infospot.addHoverText(link.label, 45);

            infospot.addEventListener("click", () => {
              goToPanorama(link.target);
            });

            currentPanorama.add(infospot);
          });
        });

        Object.values(panoramaMap).forEach((panorama) => {
          viewer.add(panorama);
        });

        panoramasRef.current = panoramaMap;

        viewer.setPanorama(panoramaMap.afuera);

        setTimeout(() => {
          setIsLoading(false);
          window.dispatchEvent(new Event("resize"));
        }, 900);
      } catch (error) {
        console.error("Error al iniciar Tour 360:", error);
        setIsLoading(false);
      }
    };

    initViewer();

    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
      setTimeout(() => window.dispatchEvent(new Event("resize")), 200);
    };

    const onResize = () => {
      setTimeout(() => window.dispatchEvent(new Event("resize")), 150);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    window.addEventListener("orientationchange", onResize);

    return () => {
      mounted = false;

      document.removeEventListener("fullscreenchange", onFullscreenChange);
      window.removeEventListener("orientationchange", onResize);

      try {
        viewerInstanceRef.current?.dispose?.();
        viewerInstanceRef.current = null;
        panoramasRef.current = {};
      } catch (error) {
        console.warn("Error al liberar visor 360:", error);
      }
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!wrapperRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await wrapperRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("No se pudo cambiar a pantalla completa:", error);
    }
  };

  const goHome = () => {
    const panorama = panoramasRef.current.afuera;

    if (!viewerInstanceRef.current || !panorama) return;

    setIsLoading(true);

    setTimeout(() => {
      viewerInstanceRef.current.setPanorama(panorama);
    }, 120);

    setTimeout(() => {
      setIsLoading(false);
      window.dispatchEvent(new Event("resize"));
    }, 750);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05080d] pt-[150px]">
        <section
          ref={wrapperRef}
          className="relative h-[calc(100vh-150px)] w-full overflow-hidden bg-black"
        >
          <div ref={viewerRef} className="h-full w-full" />

          {isLoading && (
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/45 backdrop-blur-sm">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
            </div>
          )}

          <div className="absolute right-5 top-5 z-30 flex gap-3">
            <button
              type="button"
              onClick={goHome}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white shadow-xl backdrop-blur-md transition hover:bg-[#007636]"
              aria-label="Volver al inicio del tour"
            >
              <FaHome />
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white shadow-xl backdrop-blur-md transition hover:bg-[#b61b19]"
              aria-label="Pantalla completa"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </section>
      </main>
    </>
  );
}