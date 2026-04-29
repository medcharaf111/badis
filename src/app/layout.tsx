import type { Metadata } from "next";
import { Saira, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const display = Saira({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GMSS — Global Marine Supply Service · Approvisionnement maritime",
  description:
    "GMSS (Global Marine Supply Service) — Ship supply et services logistiques portuaires en Méditerranée. Marseille-Fos, Gênes et autres ports sur demande. Devis 24/7.",
  keywords: [
    "ship supply",
    "approvisionnement maritime",
    "fournitures navire",
    "logistique portuaire",
    "Marseille",
    "Fos",
    "Gênes",
    "Méditerranée",
    "GMSS",
    "Global Marine Supply Service",
    "spare parts",
    "crew assistance",
  ],
  authors: [{ name: "GMSS · Global Marine Supply Service" }],
  openGraph: {
    title: "GMSS — Global Marine Supply Service",
    description:
      "Approvisionnement et services logistiques pour les navires en escale en Méditerranée. 24/7.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
