import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: `Contact · ${company.brand}`,
  description: `Contactez ${company.brand} (${company.legalName}) — devis sous 48 h pour vos fournitures et équipements industriels en Île-de-France.`,
};

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden hero-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel index="Contact" title="Demande de devis" variant="dark" />
          <h1 className="display-xl mt-6">
            Parlons de votre <span className="text-yellow">besoin.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed">
            Demande de devis, sourcing sur-mesure, ouverture de compte
            professionnel — décrivez-nous votre besoin et nous revenons vers
            vous sous 48 h ouvrées.
          </p>
        </div>
      </section>

      <Marquee
        variant="yellow"
        items={[
          "DEVIS · 48H",
          "PARIS 12ᵉ",
          "LIVRAISON IDF",
          `EMAIL ${company.contact.email.toUpperCase()}`,
          `SIREN ${company.siren}`,
        ]}
      />

      {/* Form + sidebar */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <SectionLabel index="01" title="Formulaire" />
              <h2 className="display-md mt-5 mb-9 text-navy">
                Demande de <span className="text-blue-600">devis.</span>
              </h2>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9 space-y-10 lg:sticky lg:top-28 lg:self-start">
              <div>
                <SectionLabel index="02" title="Coordonnées" />
                <ul className="mt-6 bg-white border border-rule divide-y divide-rule">
                  <ContactRow
                    icon={<MapPin size={18} className="text-yellow-deep" />}
                    label="Siège"
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
                  <ContactRow
                    icon={<Mail size={18} className="text-yellow-deep" />}
                    label="Email"
                    value={
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="link-underline"
                      >
                        {company.contact.email}
                      </a>
                    }
                  />
                  <ContactRow
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
                  <ContactRow
                    icon={<Clock size={18} className="text-yellow-deep" />}
                    label="Horaires"
                    value={company.contact.hours}
                  />
                </ul>
              </div>

              <div>
                <SectionLabel index="03" title="Identité légale" />
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
          <SectionLabel index="04" title="Localisation" />
          <h2 className="display-md mt-5 max-w-2xl text-navy">
            Paris 12<sup>e</sup> · proximité{" "}
            <span className="text-blue-600">Gare de Lyon.</span>
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
              <g stroke="#2270c4" strokeWidth="2.2" fill="none">
                <path d="M280 200 L660 180" />
              </g>
              <g transform="translate(420,200)">
                <circle r="42" fill="rgba(245,180,23,0.18)" />
                <circle r="22" fill="rgba(245,180,23,0.32)" />
                <circle r="9" fill="#f5b417" stroke="#0e2a47" strokeWidth="1.8" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="-58"
                  stroke="#0e2a47"
                  strokeDasharray="3 3"
                />
                <text
                  x="10"
                  y="-58"
                  fill="#0e2a47"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                  letterSpacing="0.18em"
                  fontWeight="600"
                >
                  G.M.S.S
                </text>
                <text
                  x="10"
                  y="-44"
                  fill="#0e2a47"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="10"
                  letterSpacing="0.1em"
                >
                  61 RUE DE LYON
                </text>
              </g>
            </svg>
            <div className="absolute top-4 left-4 label-mono text-steel-700 bg-white/85 px-3 py-1.5">
              Plan d&apos;accès · indicatif
            </div>
            <div className="absolute bottom-4 right-4 label-mono text-steel-700 bg-white/85 px-3 py-1.5 tnum">
              48.8466° N · 2.3729° E
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactRow({
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
