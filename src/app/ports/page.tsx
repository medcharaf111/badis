import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Anchor,
  CheckCircle2,
  Globe2,
  Ship,
} from "lucide-react";
import { ports, company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { images, img, type ImageKey } from "@/lib/images";

export const metadata: Metadata = {
  title: `Ports couverts · ${company.brand}`,
  description: `Zones d'intervention de GMSS en Méditerranée — Marseille-Fos, Gênes et autres ports sur demande. Capacité de réponse rapide et flexible.`,
};

type PortDetail = {
  hero: ImageKey;
};

const portImages: PortDetail[] = [
  { hero: "shipBlueCranes" },
  { hero: "mediterraneanShip" },
  { hero: "containersSunset" },
];

export default function PortsPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden hero-navy text-white">
        <div aria-hidden className="absolute inset-0">
          <Image
            src={img("portQuay", 2000, 70)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/90 to-navy/65" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel
            index="Ports"
            title="Zones d'intervention"
            variant="dark"
          />
          <h1 className="display-xl mt-6">
            Les ports{" "}
            <span className="text-yellow">stratégiques</span> de la
            Méditerranée.
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed">
            GMSS intervient dans les principaux ports méditerranéens, avec une
            capacité de réponse rapide et flexible. Pour toute autre escale,
            contactez-nous — notre réseau est extensible sur demande.
          </p>
        </div>
      </section>

      <Marquee
        variant="yellow"
        items={[
          "MARSEILLE-FOS",
          "GÊNES",
          "MÉDITERRANÉE",
          "DISPONIBILITÉ 24/7",
          "ASTREINTE",
          "SUR DEMANDE",
        ]}
      />

      {/* Port details */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <ul className="space-y-16 lg:space-y-24">
            {ports.map((p, i) => {
              const isReversed = i % 2 === 1;
              const heroKey = portImages[i]?.hero ?? "portQuay";
              return (
                <Reveal as="li" key={p.name} delay={50}>
                  <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div
                      className={
                        "lg:col-span-6 " +
                        (isReversed ? "lg:order-2 lg:col-start-7" : "")
                      }
                    >
                      <div className="relative aspect-[16/11] overflow-hidden border border-rule bg-navy">
                        <Image
                          src={img(heroKey, 1400, 78)}
                          alt={images[heroKey].alt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent"
                        />
                        <div className="absolute top-4 left-4 bg-yellow text-navy-deep px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                          <Anchor size={12} strokeWidth={2.4} />
                          {p.code}
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        "lg:col-span-5 " +
                        (isReversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")
                      }
                    >
                      <div className="label-mono text-yellow-deep tnum">
                        0{i + 1} / 0{ports.length}
                      </div>
                      <h2 className="display-md mt-4 text-navy">
                        {p.name}
                      </h2>
                      <p className="mt-1 label-mono text-steel-500">
                        {p.country}
                      </p>
                      <p className="mt-6 text-steel-700 leading-relaxed text-lg">
                        {p.body}
                      </p>
                      <ul className="mt-7 space-y-2.5">
                        {p.capabilities.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-3 text-steel-700"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-yellow-deep shrink-0 mt-0.5"
                              strokeWidth={2}
                            />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/devis"
                        className="mt-8 inline-flex items-center gap-2 font-display font-semibold text-blue-600 hover:text-yellow-deep transition-colors"
                      >
                        Demander un devis pour ce port
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Coverage map / explanatory */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-24">
          <SectionLabel index="—" title="Couverture extensible" />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="display-md text-navy">
                Un autre port en{" "}
                <span className="text-blue-600">Méditerranée?</span>
              </h2>
              <p className="mt-7 text-steel-700 text-lg leading-relaxed max-w-xl">
                Notre réseau de fournisseurs et de partenaires logistiques
                nous permet d&apos;activer rapidement de nouvelles zones
                d&apos;intervention. Communiquez-nous le port d&apos;escale et
                la nature des besoins — nous évaluons la faisabilité dans
                l&apos;heure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Nous contacter
                  <ArrowUpRight size={14} />
                </Link>
                <Link href="/devis" className="btn-ghost">
                  Lancer une demande
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 grid grid-cols-1 gap-3">
              <Stat icon={<Globe2 size={20} />} title="Méditerranée" body="Couverture transfrontalière France-Italie et au-delà sur demande." />
              <Stat icon={<Ship size={20} />} title="Tous types de navires" body="Cargos, porte-conteneurs, vraquiers, RoRo, navires spécialisés." />
              <Stat icon={<Anchor size={20} />} title="Coordination agent" body="Liaison directe avec les agents maritimes locaux pour fluidifier la livraison." />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-rule p-5 hover:border-blue-100 transition-colors">
      <div className="text-yellow-deep">{icon}</div>
      <div className="mt-3 font-display text-lg font-extrabold text-navy">
        {title}
      </div>
      <p className="mt-2 text-sm text-steel-700 leading-relaxed">{body}</p>
    </div>
  );
}
