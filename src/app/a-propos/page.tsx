import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { images, img } from "@/lib/images";

export const metadata: Metadata = {
  title: `À propos · ${company.brand}`,
  description: `${company.brand} (${company.legalName}) — distributeur B2B de fournitures et équipements industriels basé à Paris 12e.`,
};

export default function AProposPage() {
  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden hero-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel
            index="À propos"
            title="L'entreprise"
            variant="dark"
          />
          <h1 className="display-xl mt-6">
            Une enseigne <span className="text-yellow">parisienne,</span>{" "}
            au service des sites qui livrent.
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed">
            {company.brand} est l&apos;enseigne commerciale de {company.legalName},
            entrepreneur individuel inscrit au RCS de Paris. Une structure
            courte, focalisée sur la distribution B2B de fournitures et
            équipements industriels — un seul interlocuteur, ce qui change tout.
          </p>
        </div>
      </section>

      <Marquee
        variant="yellow"
        items={[
          `EST. ${company.foundedYear}`,
          "MICRO-ENTREPRISE",
          "RCS PARIS",
          "PARIS 12ᵉ",
          `APE ${company.naf}`,
          `SIREN ${company.siren}`,
        ]}
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel index="01" title="Histoire" />
              <h2 className="display-md mt-5 text-navy">
                Pourquoi <span className="text-blue-600">G.M.S.S</span> existe.
              </h2>

              <Reveal className="mt-9">
                <div className="relative aspect-[4/5] overflow-hidden border border-rule">
                  <Image
                    src={img("loadingBays", 900, 75)}
                    alt={images.loadingBays.alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-yellow text-navy-deep px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider">
                    Quai · Paris 12ᵉ
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-steel-700 leading-relaxed text-lg">
              <Reveal>
                <p>
                  {company.brand} a été fondée le {company.founded} par{" "}
                  {company.director}, avec une conviction simple : la
                  distribution industrielle parisienne mérite mieux que des
                  centrales d&apos;achat impersonnelles et des catalogues
                  interminables.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  Nous travaillons en direct avec un réseau de fournisseurs
                  qualifiés — choisis sur la conformité, la fiabilité et le
                  délai — et nous prenons le temps de comprendre la contrainte
                  d&apos;usage avant de proposer la pièce.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  Le résultat : un devis sous 48 h, une livraison
                  Île-de-France maîtrisée, et une relation durable avec les
                  ateliers, chantiers et sites industriels qui nous font
                  confiance.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Identité juridique */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-24">
          <SectionLabel index="02" title="Identité juridique" />
          <h2 className="display-md mt-5 max-w-3xl text-navy">
            Toutes les informations légales —{" "}
            <span className="text-blue-600">à plat.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { k: "Raison sociale", v: company.legalName },
              { k: "Nom commercial", v: company.brand },
              { k: "Dirigeant", v: company.director },
              { k: "SIREN", v: company.siren },
              { k: "SIRET (siège)", v: company.siret },
              { k: "TVA intracommunautaire", v: company.vat },
              { k: "Code APE / NAF", v: `${company.naf} — Comm. de gros` },
              { k: "Forme juridique", v: company.legalForm },
              { k: "Date de création", v: company.founded },
              { k: "Inscription RCS", v: company.rcsRegisteredAt },
              { k: "Numéro RCS", v: company.rcs },
              { k: "Domiciliation", v: company.domiciliation },
              { k: "Activité principale", v: company.domain },
              { k: "Adresse du siège", v: company.address.formatted },
              { k: "Statut", v: "Actif · à jour de ses obligations" },
            ].map((row) => (
              <div
                key={row.k}
                className="bg-white border border-rule p-5 hover:border-blue-100 transition-colors"
              >
                <div className="label-mono text-steel-500">{row.k}</div>
                <div className="mt-2 text-ink">{row.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel index="03" title="Direction" />
              <div className="mt-7 bg-bg-soft border border-rule p-6 lg:p-8">
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
                  <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-yellow" />
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="label-mono text-steel-500">Dirigeant</div>
                    <div className="mt-1 font-display text-2xl font-extrabold text-navy">
                      {company.director}
                    </div>
                  </div>
                  <span className="label-mono text-yellow-deep">Fondateur · 2025</span>
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
                  Travailler avec G.M.S.S, c&apos;est parler à la personne qui
                  négocie avec les fournisseurs, qui valide le devis, et qui
                  suit la livraison. Pas trois interlocuteurs, pas de ticket
                  perdu, pas de délai administratif.
                </p>
                <p>
                  Cette structure courte impose une discipline : sourcing
                  rigoureux, marges transparentes, conformité documentaire.
                  Nous ne pouvons pas nous permettre l&apos;à-peu-près — et
                  c&apos;est précisément ce que nos clients viennent chercher.
                </p>
              </div>

              <Link href="/contact" className="mt-9 btn-primary">
                Discuter d&apos;un projet
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
