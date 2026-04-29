import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Contact · ${company.brand}`,
  description: `Contactez GMSS — équipe disponible 24/7 pour vos demandes d'approvisionnement maritime, fournitures techniques et logistique portuaire en Méditerranée.`,
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden hero-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel index="Contact" title="Nous joindre" variant="dark" />
          <h1 className="display-xl mt-6">
            Contactez<span className="text-yellow">-nous.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed">
            Notre équipe est disponible pour répondre à toutes vos demandes
            dans les plus brefs délais. Astreinte permanente — la marine ne
            dort pas.
          </p>
        </div>
      </section>

      <Marquee
        variant="yellow"
        items={[
          "RÉPONSE RAPIDE",
          "ASTREINTE 24/7",
          "MARSEILLE-FOS · GÊNES",
          `EMAIL ${company.contact.email.toUpperCase()}`,
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact channels */}
            <div className="lg:col-span-7">
              <SectionLabel index="01" title="Canaux de contact" />
              <h2 className="display-md mt-5 text-navy">
                Le plus rapide :{" "}
                <span className="text-blue-600">téléphone ou WhatsApp.</span>
              </h2>
              <p className="mt-7 text-steel-700 leading-relaxed text-lg max-w-xl">
                Pour les escales urgentes, privilégiez WhatsApp ou
                l&apos;astreinte téléphonique. Pour les demandes structurées,
                utilisez le formulaire de devis ou l&apos;email — nous
                revenons rapidement avec un devis détaillé.
              </p>

              <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ChannelCard
                  icon={<Phone size={22} strokeWidth={2} />}
                  tag="Téléphone"
                  label={company.contact.phone}
                  href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
                  hint="Astreinte 24/7"
                />
                <ChannelCard
                  icon={<MessageCircle size={22} strokeWidth={2} />}
                  tag="WhatsApp"
                  label={company.contact.whatsapp}
                  href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  hint="Réponse rapide"
                />
                <ChannelCard
                  icon={<Mail size={22} strokeWidth={2} />}
                  tag="Email · général"
                  label={company.contact.email}
                  href={`mailto:${company.contact.email}`}
                  hint="Demandes structurées"
                />
                <ChannelCard
                  icon={<Mail size={22} strokeWidth={2} />}
                  tag="Email · commerce"
                  label={company.contact.emailSales}
                  href={`mailto:${company.contact.emailSales}`}
                  hint="Devis & comptes pros"
                />
                <ChannelCard
                  icon={<MapPin size={22} strokeWidth={2} />}
                  tag="Adresse"
                  label={`${company.address.postalCode} ${company.address.city}`}
                  href="#"
                  hint={company.address.street}
                  noLink
                />
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/devis" className="btn-primary">
                  Demander un devis
                  <ArrowUpRight size={14} strokeWidth={2.4} />
                </Link>
                <Link href="/services" className="btn-ghost">
                  Voir nos services
                  <ArrowUpRight size={14} strokeWidth={2.4} />
                </Link>
              </div>
            </div>

            {/* Sidebar — full info card */}
            <aside className="lg:col-span-4 lg:col-start-9 space-y-10 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="bg-white border border-rule">
                  <div className="bg-navy text-white px-5 py-4 flex items-center justify-between">
                    <span className="font-display font-bold uppercase tracking-wide text-sm">
                      Informations
                    </span>
                    <span className="label-mono text-yellow">24/7</span>
                  </div>
                  <ul className="divide-y divide-rule">
                    <InfoRow
                      icon={<MapPin size={18} className="text-yellow-deep" />}
                      label="Siège (France)"
                      value={
                        <>
                          {company.address.street}
                          <br />
                          {company.address.postalCode} {company.address.city}
                          <br />
                          <span className="text-steel-500 label-mono">
                            {company.domiciliation}
                          </span>
                        </>
                      }
                    />
                    <InfoRow
                      icon={<Mail size={18} className="text-yellow-deep" />}
                      label="Email"
                      value={
                        <span className="leading-relaxed">
                          <a
                            href={`mailto:${company.contact.email}`}
                            className="link-underline block"
                          >
                            {company.contact.email}
                          </a>
                          <a
                            href={`mailto:${company.contact.emailSales}`}
                            className="link-underline block mt-0.5"
                          >
                            {company.contact.emailSales}
                          </a>
                        </span>
                      }
                    />
                    <InfoRow
                      icon={<Phone size={18} className="text-yellow-deep" />}
                      label="Téléphone"
                      value={
                        <a
                          href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
                          className="link-underline tnum"
                        >
                          {company.contact.phone}
                        </a>
                      }
                    />
                    <InfoRow
                      icon={<MessageCircle size={18} className="text-yellow-deep" />}
                      label="WhatsApp"
                      value={
                        <a
                          href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                          className="link-underline tnum"
                        >
                          {company.contact.whatsapp}
                        </a>
                      }
                    />
                    <InfoRow
                      icon={<Clock size={18} className="text-yellow-deep" />}
                      label="Disponibilité"
                      value={company.contact.hours}
                    />
                  </ul>
                </div>
              </Reveal>

              <div>
                <SectionLabel index="02" title="Identité légale" />
                <dl className="mt-6 bg-bg-soft border border-rule divide-y divide-rule label-mono">
                  <LegalRow label="SIREN" value={company.siren} />
                  <LegalRow label="SIRET" value={company.siret} />
                  <LegalRow label="TVA" value={company.vat} />
                  <LegalRow label="APE" value={company.naf} />
                  <LegalRow label="RCS" value={company.rcs} />
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-soft">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-24">
          <SectionLabel index="03" title="Localisation" />
          <h2 className="display-md mt-5 max-w-2xl text-navy">
            Siège · Paris 12<sup>e</sup> ·{" "}
            <span className="text-blue-600">opérations en Méditerranée.</span>
          </h2>
          <div className="mt-10 relative h-[420px] border border-rule overflow-hidden bg-white">
            <div
              aria-hidden
              className="absolute inset-0 blueprint-grid opacity-90"
            />
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 420"
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="rgba(19,74,133,0.18)" strokeWidth="1.2" fill="none">
                <path d="M-50 90 L850 60" />
                <path d="M-50 180 L850 200" />
                <path d="M-50 290 L850 280" />
                <path d="M-50 380 L850 360" />
                <path d="M120 -50 L160 470" />
                <path d="M280 -50 L320 470" />
                <path d="M460 -50 L420 470" />
                <path d="M620 -50 L660 470" />
              </g>
              {/* Mediterranean route line: Paris → Marseille → Genoa */}
              <g stroke="#2270c4" strokeWidth="2.2" fill="none" strokeDasharray="6 6">
                <path d="M180 130 Q 320 280, 420 320" />
                <path d="M420 320 L 580 310" />
              </g>
              {/* Paris (HQ) */}
              <g transform="translate(180,130)">
                <circle r="22" fill="rgba(245,180,23,0.18)" />
                <circle r="9" fill="#f5b417" stroke="#0e2a47" strokeWidth="1.8" />
                <text
                  x="14"
                  y="-6"
                  fill="#0e2a47"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="10"
                  letterSpacing="0.18em"
                  fontWeight="600"
                >
                  PARIS · SIÈGE
                </text>
              </g>
              {/* Marseille */}
              <g transform="translate(420,320)">
                <circle r="14" fill="rgba(34,112,196,0.22)" />
                <circle r="6" fill="#2270c4" stroke="#0e2a47" strokeWidth="1.5" />
                <text
                  x="10"
                  y="6"
                  fill="#0e2a47"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="10"
                  letterSpacing="0.16em"
                  fontWeight="600"
                >
                  MARSEILLE-FOS
                </text>
              </g>
              {/* Genoa */}
              <g transform="translate(580,310)">
                <circle r="14" fill="rgba(34,112,196,0.22)" />
                <circle r="6" fill="#2270c4" stroke="#0e2a47" strokeWidth="1.5" />
                <text
                  x="10"
                  y="6"
                  fill="#0e2a47"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="10"
                  letterSpacing="0.16em"
                  fontWeight="600"
                >
                  GÊNES
                </text>
              </g>
            </svg>
            <div className="absolute top-4 left-4 label-mono text-steel-700 bg-white/85 px-3 py-1.5">
              Carte indicative · zones d&apos;intervention
            </div>
            <div className="absolute bottom-4 right-4 label-mono text-steel-700 bg-white/85 px-3 py-1.5">
              FRANCE · ITALIE · MÉDITERRANÉE
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ChannelCard({
  icon,
  tag,
  label,
  href,
  hint,
  noLink,
}: {
  icon: React.ReactNode;
  tag: string;
  label: string;
  href: string;
  hint: string;
  noLink?: boolean;
}) {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <div className="h-12 w-12 grid place-items-center bg-yellow text-navy-deep">
          {icon}
        </div>
        <span className="label-mono text-yellow-deep">{tag}</span>
      </div>
      <div className="mt-5 font-display text-lg lg:text-xl font-extrabold text-navy break-all">
        {label}
      </div>
      <div className="mt-1 label-mono text-steel-500">{hint}</div>
    </>
  );
  if (noLink) {
    return (
      <div className="bg-bg-soft border border-rule p-6">{content}</div>
    );
  }
  return (
    <a
      href={href}
      className="block bg-bg-soft border border-rule p-6 hover:bg-white hover:border-blue-100 hover:shadow-[var(--shadow-card)] transition-all"
    >
      {content}
    </a>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="p-5 flex items-start gap-4">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <div className="label-mono text-steel-500">{label}</div>
        <div className="mt-1 leading-relaxed">{value}</div>
      </div>
    </li>
  );
}

function LegalRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-3 flex items-center justify-between gap-4">
      <dt className="text-steel-500">{label}</dt>
      <dd className="text-ink tnum text-right">{value}</dd>
    </div>
  );
}
