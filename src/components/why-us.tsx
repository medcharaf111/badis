import Image from "next/image";
import { principles } from "@/lib/company";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { Zap, Globe2, ShieldCheck, Ship } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { images, img } from "@/lib/images";

const icons: Record<string, LucideIcon> = {
  "01": Zap,
  "02": Globe2,
  "03": ShieldCheck,
  "04": Ship,
};

export function WhyUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionLabel index="06" title="Pourquoi nous choisir" />
            <h2 className="display-lg mt-5 text-navy">
              Le sérieux d&apos;un opérateur européen,{" "}
              <span className="text-blue-600">la souplesse</span> d&apos;une
              structure agile.
            </h2>
            <p className="mt-7 text-steel-700 leading-relaxed max-w-md">
              GMSS combine la rigueur d&apos;une société française avec la
              réactivité d&apos;une équipe courte. Un seul interlocuteur, du
              devis à la livraison à quai.
            </p>

            <div className="mt-9 relative aspect-[4/3] overflow-hidden border border-rule">
              <Image
                src={img("hullDetail", 900, 75)}
                alt={images.hullDetail.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-yellow text-navy-deep px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider">
                À pied de coque
              </div>
            </div>
          </div>

          <ul className="lg:col-span-7 lg:col-start-7 space-y-5">
            {principles.map((p, i) => {
              const Icon = icons[p.label] ?? Zap;
              return (
                <Reveal key={p.label} delay={i * 80} as="li">
                  <article className="group bg-bg-soft border border-rule p-7 hover:bg-white hover:border-blue-100 hover:shadow-[var(--shadow-card)] transition-all">
                    <div className="flex items-start gap-5">
                      <div className="h-12 w-12 shrink-0 grid place-items-center bg-navy text-yellow rounded-sm group-hover:bg-yellow group-hover:text-navy transition-colors">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="label-mono text-yellow-deep tnum">
                            {p.label}
                          </span>
                          <h3 className="font-display text-2xl font-extrabold text-navy leading-tight">
                            {p.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-steel-700 leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
