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
  title: "G.M.S.S — Fournitures & équipements industriels · Paris",
  description:
    "G.M.S.S. (SARRAJ AKRAM) — Distribution B2B de fournitures et équipements industriels à Paris et en Île-de-France. Outillage, EPI, fixations, abrasifs, soudure, lubrifiants.",
  keywords: [
    "fournitures industrielles",
    "équipements industriels",
    "grossiste",
    "Paris",
    "Île-de-France",
    "EPI",
    "outillage",
    "G.M.S.S",
    "SARRAJ AKRAM",
  ],
  authors: [{ name: "G.M.S.S — SARRAJ AKRAM" }],
  openGraph: {
    title: "G.M.S.S — Fournitures & équipements industriels",
    description:
      "Distribution B2B pour ateliers, chantiers et industries d'Île-de-France.",
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
