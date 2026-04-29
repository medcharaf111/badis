import Link from "next/link";
import {
  ArrowUpRight,
  Ship,
  Wrench,
  Package,
  Truck,
  Users,
  Siren,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/lib/company";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

const icons: Record<string, LucideIcon> = {
  "01": Ship,
  "02": Wrench,
  "03": Package,
  "04": Truck,
  "05": Users,
  "06": Siren,
};

export function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02" title="Nos services" />
            <h2 className="display-lg mt-5 text-navy">
              Une gamme complète d&apos;approvisionnement{" "}
              <span className="text-blue-600">et de logistique maritime.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-steel-700 leading-relaxed">
              Adaptés aux besoins de chaque escale — du ravitaillement
              alimentaire à la livraison de pièces critiques, en passant par
              les services équipage et la logistique douanière.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-blue-600 hover:text-blue-700"
            >
              Détail des services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = icons[s.no] ?? Ship;
            return (
              <Reveal key={s.no} delay={(i % 3) * 60}>
                <article className="tool-card p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 grid place-items-center bg-blue-50 text-blue-600 rounded-sm">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <span className="label-mono text-yellow-deep tnum">
                      {s.no}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-extrabold text-navy leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-1 label-mono text-steel-500">{s.sub}</p>
                  <p className="mt-4 text-sm leading-relaxed text-steel-700 flex-1">
                    {s.body}
                  </p>
                  <Link
                    href="/services"
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
