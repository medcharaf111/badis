import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { company } from "@/lib/company";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function ContactCTA() {
  return (
    <section className="bg-bg-soft relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28 relative">
        <SectionLabel index="07" title="Urgence · Devis" />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display-xl text-navy">
              Besoin d&apos;une livraison{" "}
              <span className="text-yellow">urgente?</span>
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-steel-700 max-w-xl">
              Notre équipe est joignable 24/7 pour les demandes d&apos;urgence.
              Indiquez ETA, port d&apos;escale et nature des besoins — nous
              activons immédiatement le réseau.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/devis" className="btn-primary">
                Demander un devis
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </Link>
              <a
                href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                className="btn-ghost"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={150}>
            <div className="bg-white border border-rule">
              <div className="bg-navy text-white px-5 py-4 flex items-center justify-between">
                <span className="font-display font-bold uppercase tracking-wide text-sm">
                  Coordonnées
                </span>
                <span className="label-mono text-yellow">24/7</span>
              </div>
              <ul className="divide-y divide-rule">
                <Row
                  icon={<MapPin size={18} className="text-yellow-deep" />}
                  label="Siège"
                  value={
                    <>
                      {company.address.street}
                      <br />
                      {company.address.postalCode} {company.address.city}
                    </>
                  }
                />
                <Row
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
                <Row
                  icon={<MessageCircle size={18} className="text-yellow-deep" />}
                  label="WhatsApp"
                  value={
                    <a
                      className="link-underline tnum"
                      href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    >
                      {company.contact.whatsapp}
                    </a>
                  }
                />
                <Row
                  icon={<Mail size={18} className="text-yellow-deep" />}
                  label="Email"
                  value={
                    <span className="leading-relaxed">
                      <a
                        className="link-underline block"
                        href={`mailto:${company.contact.email}`}
                      >
                        {company.contact.email}
                      </a>
                      <a
                        className="link-underline block text-steel-700 mt-0.5"
                        href={`mailto:${company.contact.emailSales}`}
                      >
                        {company.contact.emailSales}
                      </a>
                    </span>
                  }
                />
                <Row
                  icon={<Clock size={18} className="text-yellow-deep" />}
                  label="Horaires"
                  value={company.contact.hours}
                />
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="px-5 py-4 flex items-start gap-4">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div className="flex-1">
        <div className="label-mono text-steel-500">{label}</div>
        <div className="mt-1 text-ink leading-relaxed">{value}</div>
      </div>
    </li>
  );
}
