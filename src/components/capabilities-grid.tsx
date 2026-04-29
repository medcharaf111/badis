import Link from "next/link";
import {
  ArrowUpRight,
  Wrench,
  HardHat,
  Cog,
  Disc3,
  Flame,
  Droplet,
  Truck,
  SprayCan,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { capabilities } from "@/lib/company";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

const icons: Record<string, LucideIcon> = {
  "01": Wrench,
  "02": Cog,
  "03": HardHat,
  "04": Disc3,
  "05": Flame,
  "06": Droplet,
  "07": Truck,
  "08": SprayCan,
};

export function CapabilitiesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02" title="Nos capacités" />
            <h2 className="display-lg mt-5 text-navy">
              Tout ce dont votre site a besoin —{" "}
              <span className="text-blue-600">sourcé, négocié, livré.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-steel-700 leading-relaxed">
              Huit familles couvrant l&apos;essentiel de la maintenance, du
              chantier et de l&apos;atelier. Pour les références hors catalogue,
              transmettez-nous vos spécifications — sourcing sur-mesure.
            </p>
            <Link
              href="/capacites"
              className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-blue-600 hover:text-blue-700"
            >
              Catalogue complet
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((c, i) => {
            const Icon = icons[c.no] ?? Wrench;
            return (
              <Reveal key={c.no} delay={(i % 4) * 60}>
                <article className="tool-card p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 grid place-items-center bg-blue-50 text-blue-600 rounded-sm">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <span className="label-mono text-yellow-deep tnum">
                      {c.no}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-extrabold text-navy leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-1 label-mono text-steel-500">{c.sub}</p>
                  <p className="mt-4 text-sm leading-relaxed text-steel-700 flex-1">
                    {c.body}
                  </p>
                  <Link
                    href="/capacites"
                    className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-sm text-blue-600 hover:text-yellow-deep transition-colors"
                  >
                    En savoir plus
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
