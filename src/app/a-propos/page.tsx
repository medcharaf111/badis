import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Target,
  Eye,
  GraduationCap,
  Anchor,
} from "lucide-react";
import { company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { images, img } from "@/lib/images";

export const metadata: Metadata = {
  title: `À propos · ${company.brand}`,
  description: `${company.brand} (${company.brandFull}) — société française spécialisée dans l'approvisionnement maritime et les services logistiques portuaires en Méditerranée.`,
};

export default function AProposPage() {
  return (
    <main>
      <section className="relative overflow-hidden hero-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel index="À propos" title="L'entreprise" variant="dark" />
          <h1 className="display-xl mt-6">
            Une société{" "}
            <span className="text-yellow">au service du shipping</span>{" "}
            méditerranéen.
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed">
            Global Marine Supply Service (GMSS) est une entreprise spécialisée
            dans l&apos;approvisionnement maritime et les services logistiques
            portuaires, basée en France et opérant sur l&apos;ensemble du
            bassin méditerranéen.
          </p>
        </div>
      </section>

      <Marquee
        variant="yellow"
        items={[
          `EST. ${company.foundedYear}`,
          "FRANCE · EU",
          "RCS PARIS",
          "MÉDITERRANÉE",
          "MARSEILLE-FOS",
          "GÊNES",
          "24/7",
        ]}
      />

      {/* Présentation */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel index="01" title="Présentation" />
              <h2 className="display-md mt-5 text-navy">
                Au plus près des{" "}
                <span className="text-blue-600">opérations portuaires.</span>
              </h2>

              <Reveal className="mt-9">
                <div className="relative aspect-[4/5] overflow-hidden border border-rule">
                  <Image
                    src={img("shipBlueCranes", 900, 75)}
                    alt={images.shipBlueCranes.alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-yellow text-navy-deep px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider">
                    Terminal · Méditerranée
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-steel-700 leading-relaxed text-lg">
              <Reveal>
                <p>
                  Global Marine Supply Service (GMSS) est une entreprise
                  spécialisée dans l&apos;approvisionnement maritime et les
                  services logistiques portuaires, basée en France et opérant
                  sur l&apos;ensemble du bassin méditerranéen.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  Nous accompagnons les armateurs, agents maritimes et
                  exploitants de navires en leur offrant des solutions
                  rapides, fiables et adaptées à leurs contraintes
                  opérationnelles.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  Du ravitaillement alimentaire à la livraison de pièces de
                  rechange critiques, en passant par les services équipage et
                  la logistique douanière, nous couvrons l&apos;ensemble de la
                  chaîne d&apos;approvisionnement à l&apos;escale.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission · Vision · Expertise */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <SectionLabel index="02" title="Mission · Vision · Expertise" />
          <h2 className="display-md mt-5 max-w-3xl text-navy">
            Trois piliers,{" "}
            <span className="text-blue-600">un seul cap.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <PillarCard
              icon={<Target size={26} strokeWidth={1.8} />}
              tag="Mission"
              title="Réduire les temps d'escale."
              body="Fournir des services d'approvisionnement maritime efficaces, en garantissant qualité, rapidité et compétitivité, afin de réduire les temps d'escale et optimiser les opérations de nos clients."
            />
            <PillarCard
              icon={<Eye size={26} strokeWidth={1.8} />}
              tag="Vision"
              title="Référence en Méditerranée."
              body="Devenir un acteur de référence dans le domaine du ship supply en Méditerranée, en développant un réseau solide et des solutions innovantes."
            />
            <PillarCard
              icon={<GraduationCap size={26} strokeWidth={1.8} />}
              tag="Expertise"
              title="Connaissance opérationnelle."
              body="Grâce à une solide expérience dans le secteur maritime et à une parfaite connaissance des opérations portuaires, GMSS assure une gestion efficace des demandes, même les plus urgentes."
            />
          </div>
        </div>
      </section>

      {/* Identité juridique */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-24">
          <SectionLabel index="03" title="Identité juridique" />
          <h2 className="display-md mt-5 max-w-3xl text-navy">
            Toutes les informations légales —{" "}
            <span className="text-blue-600">à plat.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { k: "Raison sociale", v: company.legalName },
              { k: "Nom commercial", v: `${company.brand} — ${company.brandFull}` },
              { k: "Dirigeant", v: company.director },
              { k: "SIREN", v: company.siren },
              { k: "SIRET (siège)", v: company.siret },
              { k: "TVA intracommunautaire", v: company.vat },
              { k: "Code APE / NAF", v: company.naf },
              { k: "Forme juridique", v: company.legalForm },
              { k: "Date de création", v: company.founded },
              { k: "Inscription RCS", v: company.rcsRegisteredAt },
              { k: "Numéro RCS", v: company.rcs },
              { k: "Domiciliation", v: company.domiciliation },
              { k: "Activité", v: company.domain },
              { k: "Adresse du siège", v: company.address.formatted },
              { k: "Statut", v: "Actif · à jour de ses obligations" },
            ].map((row) => (
              <div
                key={row.k}
                className="bg-bg-soft border border-rule p-5 hover:border-blue-100 hover:bg-white transition-colors"
              >
                <div className="label-mono text-steel-500">{row.k}</div>
                <div className="mt-2 text-ink">{row.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direction */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel index="04" title="Direction" />
              <div className="mt-7 bg-white border border-rule p-6 lg:p-8">
                <div className="aspect-[4/5] hero-navy relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 blueprint-grid-dark opacity-30"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-white text-9xl font-black tracking-tight">
                      AS
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 label-mono text-white/60">
                    Direction
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-yellow animate-pulse" />
                    <Anchor size={16} className="text-yellow" />
                  </div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="label-mono text-steel-500">Dirigeant</div>
                    <div className="mt-1 font-display text-2xl font-extrabold text-navy">
                      {company.director}
                    </div>
                  </div>
                  <span className="label-mono text-yellow-deep">
                    Fondateur · {company.foundedYear}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="display-md text-navy">
                Une seule personne décide.{" "}
                <span className="text-blue-600">C&apos;est voulu.</span>
              </h2>
              <div className="mt-7 space-y-5 text-steel-700 text-lg leading-relaxed">
                <p>
                  Travailler avec GMSS, c&apos;est parler à la personne qui
                  négocie avec les fournisseurs, qui valide le devis, et qui
                  coordonne la livraison à quai. Pas trois interlocuteurs, pas
                  de ticket perdu, pas de délai administratif.
                </p>
                <p>
                  Cette structure courte impose une discipline : sourcing
                  rigoureux, marges transparentes, conformité documentaire,
                  réactivité 24/7. Le shipping ne pardonne pas
                  l&apos;à-peu-près — et c&apos;est précisément ce que nos
                  clients viennent chercher.
                </p>
              </div>

              <Link href="/contact" className="mt-9 btn-primary">
                Discuter d&apos;une escale
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PillarCard({
  icon,
  tag,
  title,
  body,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal>
      <article className="bg-white border border-rule p-7 lg:p-8 h-full hover:border-blue-100 hover:shadow-[var(--shadow-card)] transition-all">
        <div className="flex items-center justify-between">
          <div className="h-14 w-14 grid place-items-center bg-yellow text-navy-deep">
            {icon}
          </div>
          <span className="label-mono text-yellow-deep">{tag}</span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-extrabold text-navy leading-tight">
          {title}
        </h3>
        <p className="mt-4 text-steel-700 leading-relaxed">{body}</p>
      </article>
    </Reveal>
  );
}
