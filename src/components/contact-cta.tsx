import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Clock, Phone } from "lucide-react";
import { company } from "@/lib/company";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function ContactCTA() {
  return (
    <section className="bg-bg-soft relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28 relative">
        <SectionLabel index="07" title="Contact · Devis" />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display-xl text-navy">
              Un besoin précis<span className="text-yellow">?</span>
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-steel-700 max-w-xl">
              Décrivez-nous votre demande — référence, quantité, délai. Nous
              revenons vers vous sous 48 h ouvrées avec un devis détaillé.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Lancer un devis
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </Link>
              <a href={`mailto:${company.contact.email}`} className="btn-ghost">
                <Mail size={14} />
                {company.contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={150}>
            <div className="bg-white border border-rule">
              <div className="bg-navy text-white px-5 py-4 flex items-center justify-between">
                <span className="font-display font-bold uppercase tracking-wide text-sm">
                  Coordonnées
                </span>
                <span className="label-mono text-yellow">G.M.S.S</span>
              </div>
              <ul className="divide-y divide-rule">
                <Row
                  icon={<MapPin size={18} className="text-yellow-deep" />}
                  label="Adresse"
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
                  icon={<Mail size={18} className="text-yellow-deep" />}
                  label="Email"
                  value={
                    <a
                      className="link-underline"
                      href={`mailto:${company.contact.email}`}
                    >
                      {company.contact.email}
                    </a>
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
