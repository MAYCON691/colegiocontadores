import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colegio de Contadores La Paz",
  description:
    "Sitio institucional moderno del Colegio de Contadores La Paz: información institucional, actividades, contacto y recorrido virtual 360.",
  keywords: [
    "Colegio de Contadores La Paz",
    "contadores",
    "La Paz",
    "institucional",
    "tour 360",
    "contabilidad",
  ],
  authors: [{ name: "Colegio de Contadores La Paz" }],
  openGraph: {
    title: "Colegio de Contadores La Paz",
    description:
      "Portal institucional del Colegio de Contadores La Paz con información, contacto y tour virtual 360.",
    url: "https://cclapaz.org",
    siteName: "Colegio de Contadores La Paz",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8f6f1] text-slate-800">
        {children}
      </body>
    </html>
  );
}