import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Ship,
  Wrench,
  Package,
  Truck,
  Users,
  Siren,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services, company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { images, img, type ImageKey } from "@/lib/images";

export const metadata: Metadata = {
  title: `Services · ${company.brand}`,
  description: `Services GMSS : ship supply, fournitures techniques, pièces de rechange, logistique & douane, services équipage, urgence 24/7.`,
};

const icons: Record<string, LucideIcon> = {
  "01": Ship,
  "02": Wrench,
  "03": Package,
  "04": Truck,
  "05": Users,
  "06": Siren,
};

const galleryKeys: { key: ImageKey; tag: string }[] = [
  { key: "produceCrates", tag: "Ship supply" },
  { key: "shipAtQuay", tag: "Logistique" },
  { key: "cargoTugs", tag: "Coordination" },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden hero-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel index="Services" title="Catalogue" variant="dark" />
          <h1 className="display-xl mt-6">
            Solutions complètes <span className="text-yellow">d&apos;approvisionnement</span> et de logistique maritime.
          </h1>
          <div className="mt-9 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-lg lg:text-xl text-white/80 leading-relaxed">
              Nous proposons des solutions complètes d&apos;approvisionnement
              et de logistique maritime, adaptées aux besoins spécifiques de
              chaque navire. Astreinte 24/7 pour les urgences.
            </p>
            <div className="lg:col-span-4 lg:col-start-9 flex lg:items-end">
              <Link href="/devis" className="btn-primary">
                Demander un devis
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
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
          "SHIP SUPPLY",
          "FOURNITURES TECHNIQUES",
          "SPARE PARTS",
          "LOGISTIQUE & DOUANE",
          "CREW ASSISTANCE",
          "URGENCE 24/7",
        ]}
      />

      {/* Catalog */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <SectionLabel index="01" title="Détail des services" />

          <ul className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((s, i) => {
              const Icon = icons[s.no] ?? Ship;
              return (
                <Reveal as="li" key={s.no} delay={i * 50}>
                  <article className="tool-card p-7 lg:p-8 h-full">
                    <div className="flex items-start gap-5">
                      <div className="h-14 w-14 grid place-items-center bg-blue-50 text-blue-600 shrink-0">
                        <Icon size={28} strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="label-mono text-yellow-deep tnum">
                            {s.no}
                          </span>
                          <Link
                            href="/devis"
                            className="label-mono text-blue-600 hover:text-yellow-deep flex items-center gap-1.5 transition-colors"
                          >
                            Devis
                            <ArrowUpRight size={12} />
                          </Link>
                        </div>
                        <h2 className="font-display text-3xl font-extrabold text-navy mt-3 leading-tight">
                          {s.title}
                        </h2>
                        <p className="mt-1 label-mono text-steel-500">
                          {s.sub}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-steel-700 leading-relaxed">
                      {s.body}
                    </p>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2 text-sm text-steel-700"
                        >
                          <Check
                            size={16}
                            className="text-yellow-deep mt-0.5 shrink-0"
                            strokeWidth={2.4}
                          />
                          <span>{it}</span>
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

      {/* CTA */}
      <section className="hero-navy text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-24 lg:py-32 relative">
          <SectionLabel index="02" title="Astreinte · 24/7" variant="dark" />
          <h2 className="display-xl mt-6 max-w-[16ch]">
            Escale imminente <span className="text-yellow">?</span>
          </h2>
          <p className="mt-7 max-w-xl text-white/80 text-lg leading-relaxed">
            Envoyez-nous l&apos;ETA et la liste des besoins — nous activons
            immédiatement le réseau et revenons avec un devis clair.
          </p>
          <div className="mt-9">
            <Link href="/devis" className="btn-primary">
              Démarrer une demande
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
