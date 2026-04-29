import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { images, img } from "@/lib/images";

export function AboutPreview() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-rule">
              <Image
                src={img("mediterraneanShip", 1000, 78)}
                alt={images.mediterraneanShip.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent"
              />
              <div className="absolute top-4 left-4 bg-yellow text-navy-deep px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider">
                Méditerranée
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel index="—" title="À propos" />
            <h2 className="display-lg mt-5 text-navy">
              Une société française,{" "}
              <span className="text-blue-600">au cœur du shipping méditerranéen.</span>
            </h2>
            <div className="mt-7 space-y-5 text-steel-700 text-lg leading-relaxed">
              <p>
                Global Marine Supply Service (GMSS) est une société basée en
                France, spécialisée dans l&apos;approvisionnement des navires
                et les services logistiques portuaires.
              </p>
              <p>
                Grâce à un réseau de fournisseurs fiables et une parfaite
                connaissance du secteur maritime, nous intervenons rapidement
                dans les ports stratégiques de la Méditerranée.
              </p>
            </div>
            <Link href="/a-propos" className="mt-9 btn-navy">
              En savoir plus
              <ArrowUpRight size={14} strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
