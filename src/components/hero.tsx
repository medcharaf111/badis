"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDownRight,
  Wrench,
  HardHat,
  Cog,
  Truck,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { company } from "@/lib/company";
import { images, img } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-14 lg:pt-20 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 label-mono text-yellow">
              <span aria-hidden className="h-1.5 w-1.5 bg-yellow rounded-full" />
              Distributeur B2B · Paris 12<sup>e</sup> · Île-de-France
            </div>

            <h1 className="display-xl mt-7">
              Fournitures <span className="text-yellow">&</span> équipements
              industriels<span className="text-yellow">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/85 leading-relaxed">
              {company.brand} fournit les ateliers, chantiers et sites
              industriels d&apos;Île-de-France en outillage, EPI, fixations,
              abrasifs, soudure, lubrifiants et consommables. Sourcing
              rigoureux, devis sous 48 h, livraison maîtrisée.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Demander un devis
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </Link>
              <Link
                href="/capacites"
                className="btn-ghost !text-white !border-white/40 hover:!bg-white hover:!text-navy"
              >
                Voir nos capacités
                <ArrowDownRight size={14} strokeWidth={2.4} />
              </Link>
            </div>
          </div>

          {/* Hero image — welder in action */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src={img("welder", 1200, 80)}
                alt={images.welder.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              {/* dark gradient overlay for text legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/20 to-transparent"
              />
              {/* corner tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-yellow text-navy-deep px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-navy-deep animate-pulse" />
                En atelier
              </div>
              {/* caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="label-mono text-yellow">Spécialité</div>
                  <div className="font-display text-2xl font-extrabold">
                    Soudure & métallurgie
                  </div>
                </div>
                <div className="label-mono text-white/60 tnum">
                  N° 05
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <TrustChip icon={<Clock size={20} />} metric="48h" label="Délai de devis" />
          <TrustChip icon={<ShieldCheck size={20} />} metric="CE" label="Conformité EPI" />
          <TrustChip icon={<Truck size={20} />} metric="IDF" label="Livraison maîtrisée" />
          <TrustChip icon={<Cog size={20} />} metric="08" label="Familles produits" />
        </div>
      </div>

      {/* Specialities strip */}
      <div className="relative bg-navy-deep border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70">
          <span className="label-mono text-yellow">Spécialités</span>
          {[
            { icon: <Wrench size={14} />, label: "Outillage" },
            { icon: <HardHat size={14} />, label: "EPI" },
            { icon: <Cog size={14} />, label: "Fixations" },
            { icon: <Wrench size={14} />, label: "Abrasifs" },
            { icon: <Cog size={14} />, label: "Soudure" },
            { icon: <Cog size={14} />, label: "Lubrifiants" },
            { icon: <Truck size={14} />, label: "Manutention" },
          ].map((s) => (
            <span
              key={s.label}
              className="flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-wider"
            >
              <span className="text-yellow">{s.icon}</span>
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustChip({
  icon,
  metric,
  label,
}: {
  icon: React.ReactNode;
  metric: string;
  label: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-5 hover:bg-white/10 hover:border-yellow/40 transition-colors">
      <div className="text-yellow">{icon}</div>
      <div className="mt-4 font-display text-3xl font-extrabold tnum">
        {metric}
      </div>
      <div className="label-mono text-white/55 mt-1">{label}</div>
    </div>
  );
}
