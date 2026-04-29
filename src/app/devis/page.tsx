import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { company } from "@/lib/company";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { DevisForm } from "@/components/devis-form";

export const metadata: Metadata = {
  title: `Demande de devis · ${company.brand}`,
  description: `Demande de devis pour approvisionnement maritime, fournitures techniques, pièces de rechange ou logistique portuaire. Réponse rapide, astreinte 24/7.`,
};

export default function DevisPage() {
  return (
    <main>
      <section className="relative overflow-hidden hero-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 blueprint-grid-dark opacity-50 pointer-events-none"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <SectionLabel
            index="Devis"
            title="Demande rapide"
            variant="dark"
          />
          <h1 className="display-xl mt-6">
            Demande de <span className="text-yellow">devis.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed">
            Envoyez-nous votre demande et recevez une réponse rapide adaptée à
            vos besoins. Pour les escales urgentes, contactez-nous directement
            par WhatsApp — notre équipe est joignable 24/7.
          </p>
        </div>
      </section>

      <Marquee
        variant="yellow"
        items={[
          "DEVIS RAPIDE",
          "ASTREINTE 24/7",
          `WHATSAPP ${company.contact.whatsapp.toUpperCase()}`,
          `EMAIL ${company.contact.email.toUpperCase()}`,
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <SectionLabel index="01" title="Formulaire" />
              <h2 className="display-md mt-5 mb-9 text-navy">
                Détails de l&apos;<span className="text-blue-600">escale.</span>
              </h2>
              <Reveal>
                <DevisForm />
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9 space-y-10 lg:sticky lg:top-28 lg:self-start">
              <div>
                <SectionLabel index="02" title="Contact direct" />
                <ul className="mt-6 bg-white border border-rule divide-y divide-rule">
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
                    icon={<MessageCircle size={18} className="text-yellow-deep" />}
                    label="WhatsApp · 24/7"
                    value={
                      <a
                        href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                        className="link-underline tnum"
                      >
                        {company.contact.whatsapp}
                      </a>
                    }
                  />
                  <ContactRow
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
                  <ContactRow
                    icon={<Clock size={18} className="text-yellow-deep" />}
                    label="Disponibilité"
                    value={company.contact.hours}
                  />
                </ul>
              </div>

              <div className="bg-bg-soft border border-rule p-6">
                <p className="label-mono text-yellow-deep">Conseil</p>
                <p className="mt-3 text-steel-700 leading-relaxed text-sm">
                  Pour accélérer le traitement de votre demande, indiquez-nous
                  l&apos;ETA, le port d&apos;escale, le type de navire, ainsi
                  que la liste des références ou la nature précise du besoin
                  (alimentaire, technique, urgence).
                </p>
              </div>
            </aside>
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
