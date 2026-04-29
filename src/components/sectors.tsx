import Image from "next/image";
import { sectors } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { CheckCircle2 } from "lucide-react";
import { images, img } from "@/lib/images";

export function Sectors() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* Full-bleed background image — construction site cranes */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={img("constructionCranes", 2000, 70)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-navy/60" />
        <div className="absolute inset-0 blueprint-grid-dark opacity-30" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <SectionLabel index="04" title="Pour qui" variant="dark" />

        <Reveal>
          <h2 className="display-lg mt-5 max-w-[20ch]">
            Conçu pour les <span className="text-yellow">métiers</span> qui
            tiennent le pays.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-white/80 leading-relaxed text-lg">
              Chaque secteur a ses tolérances, ses certifications, ses urgences.
              Nous travaillons avec des opérateurs de terrain — pas des
              centrales d&apos;achat anonymes — pour comprendre la contrainte
              avant de proposer la pièce.
            </p>
          </Reveal>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sectors.map((s, i) => (
              <li
                key={s}
                className="bg-navy-deep/70 backdrop-blur-sm border border-white/15 p-4 flex items-center gap-3 hover:bg-navy-deep/90 hover:border-yellow/40 transition-colors"
              >
                <CheckCircle2
                  size={18}
                  className="text-yellow shrink-0"
                  strokeWidth={2}
                />
                <span className="font-display font-semibold text-base">
                  {s}
                </span>
                <span className="ml-auto label-mono text-white/35 tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo credit, discreet */}
        <div className="mt-10 label-mono text-white/30">
          Photo · {images.constructionCranes.credit}
        </div>
      </div>

      <Marquee
        variant="yellow"
        items={[
          "DEVIS SOUS 48H",
          "LIVRAISON ÎLE-DE-FRANCE",
          "CONFORMITÉ CE",
          "FACTURATION B2B",
          "SOURCING SUR-MESURE",
          "COMPTES PROFESSIONNELS",
        ]}
      />
    </section>
  );
}
