import Image from "next/image";
import Link from "next/link";
import { ports } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { CheckCircle2, ArrowUpRight, Anchor } from "lucide-react";
import { images, img } from "@/lib/images";

export function PortsOverview() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <Image
          src={img("terminalAerial", 2000, 70)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/90 to-navy/65" />
        <div className="absolute inset-0 blueprint-grid-dark opacity-25" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <SectionLabel index="04" title="Zones d'intervention" variant="dark" />

        <Reveal>
          <h2 className="display-lg mt-5 max-w-[20ch]">
            Les ports{" "}
            <span className="text-yellow">stratégiques</span> de la
            Méditerranée.
          </h2>
        </Reveal>

        <Reveal className="mt-7 max-w-2xl text-white/80 leading-relaxed text-lg" delay={120}>
          <p>
            Nous opérons principalement dans les ports suivants. Pour toute
            autre escale en Méditerranée, contactez-nous — notre réseau est
            extensible sur demande.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {ports.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} as="li">
              <article className="bg-navy-deep/70 backdrop-blur-sm border border-white/15 p-7 h-full hover:border-yellow/40 transition-colors flex flex-col">
                <div className="flex items-center justify-between">
                  <Anchor size={22} className="text-yellow" strokeWidth={2} />
                  <span className="label-mono text-white/40 tnum">
                    {p.code}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-3xl font-extrabold leading-tight">
                  {p.name}
                </h3>
                <p className="mt-1 label-mono text-white/55">{p.country}</p>
                <p className="mt-4 text-white/80 leading-relaxed text-sm">
                  {p.body}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/85">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-yellow shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/ports"
            className="inline-flex items-center gap-2 font-display font-semibold text-yellow hover:text-white transition-colors"
          >
            Détail des zones d&apos;intervention
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10 label-mono text-white/30">
          Photo · {images.terminalAerial.credit}
        </div>
      </div>

      <Marquee
        variant="yellow"
        items={[
          "DISPONIBILITÉ 24/7",
          "ASTREINTE PERMANENTE",
          "MARSEILLE-FOS",
          "GÊNES",
          "MÉDITERRANÉE",
          "DEVIS RAPIDE",
          "RÉSEAU FOURNISSEURS",
        ]}
      />
    </section>
  );
}
