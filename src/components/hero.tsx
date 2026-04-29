"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDownRight,
  Anchor,
  Globe2,
  Zap,
  ShieldCheck,
  Ship,
  Wrench,
  Package,
  Truck,
  Users,
  Siren,
} from "lucide-react";
import { company } from "@/lib/company";
import { images, img } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-14 lg:pt-20 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 label-mono text-yellow">
              <span aria-hidden className="h-1.5 w-1.5 bg-yellow rounded-full animate-pulse" />
              Astreinte 24/7 · Méditerranée
            </div>

            <h1 className="display-xl mt-7">
              Global Marine <br />
              Supply <span className="text-yellow">Service.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/85 leading-relaxed">
              {company.tagline}.
            </p>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-white/70 leading-relaxed">
              Basée en France, GMSS accompagne les armateurs, agents maritimes
              et opérateurs portuaires avec des solutions rapides, fiables et
              sur mesure dans les principaux ports méditerranéens.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/devis" className="btn-primary">
                Demander un devis
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </Link>
              <Link
                href="/services"
                className="btn-ghost !text-white !border-white/40 hover:!bg-white hover:!text-navy"
              >
                Nos services
                <ArrowDownRight size={14} strokeWidth={2.4} />
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src={img("portCranesSky", 1200, 80)}
                alt={images.portCranesSky.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/15 to-transparent"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-yellow text-navy-deep px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider">
                <Anchor size={12} strokeWidth={2.4} />
                À quai
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="label-mono text-yellow">Couverture</div>
                  <div className="font-display text-2xl font-extrabold">
                    Marseille · Gênes
                  </div>
                </div>
                <div className="label-mono text-white/60 tnum">
                  MED · 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <TrustChip icon={<Zap size={20} />} metric="24/7" label="Réactivité & disponibilité" />
          <TrustChip icon={<Globe2 size={20} />} metric="EU" label="Société basée en Europe" />
          <TrustChip icon={<ShieldCheck size={20} />} metric="✓" label="Fournisseurs qualifiés" />
          <TrustChip icon={<Ship size={20} />} metric="MED" label="Expertise maritime" />
        </div>
      </div>

      {/* Service strip */}
      <div className="relative bg-navy-deep border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70">
          <span className="label-mono text-yellow">Services</span>
          {[
            { icon: <Ship size={14} />, label: "Ship supply" },
            { icon: <Wrench size={14} />, label: "Fournitures techniques" },
            { icon: <Package size={14} />, label: "Pièces de rechange" },
            { icon: <Truck size={14} />, label: "Logistique" },
            { icon: <Users size={14} />, label: "Crew" },
            { icon: <Siren size={14} />, label: "Urgence 24/7" },
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
