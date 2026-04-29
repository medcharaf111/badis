import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { capabilities, sectors, company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { images, img, type ImageKey } from "@/lib/images";

const galleryKeys: { key: ImageKey; tag: string }[] = [
  { key: "toolsRack", tag: "Outillage" },
  { key: "grinderSparks", tag: "Abrasifs" },
  { key: "drill", tag: "Électroportatif" },
];

export const metadata: Metadata = {
  title: `Capacités · ${company.brand}`,
  description: `Familles de produits distribuées par ${company.brand} : outillage, EPI, fixations, abrasifs, soudure, lubrifiants, manutention, maintenance.`,
};

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

const sublines: Record<string, string[]> = {
  "01": [
    "Perceuses, visseuses, perforateurs",
    "Meuleuses & scies",
    "Coffrets douilles & clés",
    "Outils de mesure",
  ],
  "02": [
    "Visserie acier zingué & inox",
    "Boulonnerie HR",
    "Ancrages & chevilles",
    "Rivets, colliers, cosses",
  ],
  "03": [
    "Casques, lunettes, masques",
    "Chaussures S1P à S3",
    "Gants tous risques",
    "Harnais & antichute",
  ],
  "04": [
    "Disques de coupe & ébarbage",
    "Disques diamant",
    "Toiles abrasives & bandes",
    "Brosses métalliques",
  ],
  "05": [
    "Postes MIG / MAG / TIG",
    "Électrodes enrobées",
    "Fils & flux",
    "Accessoires soudure",
  ],
  "06": [
    "Huiles hydrauliques ISO VG",
    "Graisses multi-usages",
    "Dégrippants & pénétrants",
    "Fluides de coupe",
  ],
  "07": [
    "Diables & transpalettes",
    "Sangles & élingues",
    "Palans manuels",
    "Rayonnages & bacs",
  ],
  "08": [
    "Dégraissants industriels",
    "Papiers d'essuyage",
    "Sacs & contenants",
    "Signalétique d'atelier",
  ],
};

export default function CapacitesPage() {
  return (
    <main>
      <section className="relative overflow-hidden hero-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel
            index="Catalogue"
            title="Familles de produits"
            variant="dark"
          />
          <h1 className="display-xl mt-6">
            Outillage, EPI, fixations <span className="text-yellow">&</span>{" "}
            consommables.
          </h1>
          <div className="mt-9 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-lg lg:text-xl text-white/80 leading-relaxed">
              Huit familles de produits couvrant l&apos;essentiel de la
              maintenance industrielle, du chantier et de l&apos;atelier. Pour
              les références hors catalogue, transmettez-nous vos
              spécifications — sourcing sur-mesure assuré.
            </p>
            <div className="lg:col-span-4 lg:col-start-9 flex lg:items-end">
              <Link href="/contact" className="btn-primary">
                Demander un devis
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip — feature gallery */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 -mt-10 lg:-mt-14 relative z-10">
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {galleryKeys.map(({ key, tag }) => (
              <figure
                key={key}
                className="relative aspect-[4/5] overflow-hidden border border-rule bg-navy"
              >
                <Image
                  src={img(key, 800, 75)}
                  alt={images[key].alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 33vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent"
                />
                <figcaption className="absolute bottom-3 left-3 bg-yellow text-navy-deep px-2.5 py-1.5 font-display font-bold text-xs uppercase tracking-wider">
                  {tag}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "OUTILLAGE PROFESSIONNEL",
          "EPI CERTIFIÉS CE",
          "FIXATIONS HR",
          "ABRASIFS INDUSTRIELS",
          "SOUDURE MIG / TIG",
          "FLUIDES TECHNIQUES",
          "MANUTENTION & STOCKAGE",
          "MAINTENANCE GÉNÉRALE",
        ]}
      />

      {/* Catalog */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <SectionLabel index="01" title="Familles de produits" />

          <ul className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {capabilities.map((c, i) => {
              const Icon = icons[c.no] ?? Wrench;
              return (
                <Reveal as="li" key={c.no} delay={i * 50}>
                  <article className="tool-card p-7 lg:p-8 h-full">
                    <div className="flex items-start gap-5">
                      <div className="h-14 w-14 grid place-items-center bg-blue-50 text-blue-600 shrink-0">
                        <Icon size={28} strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="label-mono text-yellow-deep tnum">
                            {c.no}
                          </span>
                          <Link
                            href="/contact"
                            className="label-mono text-blue-600 hover:text-yellow-deep flex items-center gap-1.5 transition-colors"
                          >
                            Devis
                            <ArrowUpRight size={12} />
                          </Link>
                        </div>
                        <h2 className="font-display text-3xl font-extrabold text-navy mt-3 leading-tight">
                          {c.title}
                        </h2>
                        <p className="mt-1 label-mono text-steel-500">
                          {c.sub}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-steel-700 leading-relaxed">
                      {c.body}
                    </p>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(sublines[c.no] ?? []).map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-sm text-steel-700"
                        >
                          <Check
                            size={16}
                            className="text-yellow-deep mt-0.5 shrink-0"
                            strokeWidth={2.4}
                          />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Sectors recap */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-24">
          <SectionLabel index="02" title="Pour qui" />
          <h2 className="display-md mt-5 max-w-3xl text-navy">
            Nos clients <span className="text-blue-600">type.</span>
          </h2>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {sectors.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-wide px-4 py-3 bg-white border border-rule hover:border-blue-100 hover:bg-blue-50 transition-colors"
              >
                <span className="h-1.5 w-1.5 bg-yellow rounded-full" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-navy text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-24 lg:py-32 relative">
          <SectionLabel index="03" title="Devis · 48 h" variant="dark" />
          <h2 className="display-xl mt-6 max-w-[14ch]">
            Une référence <span className="text-yellow">précise?</span>
          </h2>
          <p className="mt-7 max-w-xl text-white/80 text-lg leading-relaxed">
            Envoyez-nous vos spécifications et quantités — nous revenons vers
            vous avec un tarif clair sous 48 h ouvrées.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn-primary">
              Démarrer une demande
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
