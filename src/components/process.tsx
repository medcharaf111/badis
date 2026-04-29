import { process } from "@/lib/company";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ClipboardList, Search, FileCheck2, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "01": ClipboardList,
  "02": Search,
  "03": FileCheck2,
  "04": Truck,
};

export function Process() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="05" title="Méthode · Approvisionnement" />
            <h2 className="display-lg mt-5 text-navy">
              Quatre étapes. <span className="text-blue-600">Aucun bavardage.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-steel-700 leading-relaxed">
              Process court par design. Vous parlez à une personne qui décide —
              pas à un standard. Allers-retours réduits, livraison plus rapide.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((step, i) => {
            const Icon = icons[step.no] ?? ClipboardList;
            return (
              <Reveal key={step.no} delay={i * 100} as="li">
                <article className="relative bg-white border border-rule p-7 h-full hover:border-blue-100 hover:shadow-[var(--shadow-card)] transition-all">
                  {/* Step badge */}
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 grid place-items-center bg-yellow text-navy-deep rounded-sm shadow-[0_8px_18px_-8px_rgba(245,180,23,0.7)]">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <span className="font-display text-5xl font-black text-blue-50 tnum select-none leading-none">
                      {step.no}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-extrabold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-steel-700 leading-relaxed text-sm">
                    {step.body}
                  </p>
                  {i < process.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden lg:block absolute top-1/2 -right-3 z-10 h-px w-6 bg-blue-200"
                    />
                  )}
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
