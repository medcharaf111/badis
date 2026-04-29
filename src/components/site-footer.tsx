import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Clock, Phone } from "lucide-react";
import { company, nav } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-deep text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-20 pb-10">
        {/* CTA strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-14 border-b border-white/10">
          <div className="lg:col-span-8">
            <p className="label-mono text-yellow">Devis sous 48h ouvrées</p>
            <h2 className="display-lg mt-3 max-w-2xl">
              Un besoin précis ? <span className="text-yellow">Parlons-en.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contact" className="btn-primary">
              Demander un devis
              <ArrowUpRight size={14} strokeWidth={2.4} />
            </Link>
            <a
              href={`mailto:${company.contact.email}`}
              className="btn-ghost !text-white !border-white/40 hover:!bg-white hover:!text-navy"
            >
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 grid place-items-center bg-yellow text-navy-deep font-display font-black text-2xl">
                G
              </span>
              <span>
                <span className="block font-display text-3xl font-extrabold leading-none">
                  {company.brand}
                </span>
                <span className="block label-mono text-white/60 mt-1">
                  {company.legalName}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-white/75 leading-relaxed">
              Distributeur B2B de fournitures et équipements industriels basé à
              Paris 12<sup>e</sup>. Outillage, EPI, fixations, abrasifs, soudure
              et lubrifiants — sourcés et livrés en Île-de-France.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-yellow font-bold uppercase tracking-wider text-sm">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="link-underline text-white/85 hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-display text-yellow font-bold uppercase tracking-wider text-sm">
              Coordonnées
            </p>
            <ul className="mt-5 space-y-4 text-white/85">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow mt-1 shrink-0" />
                <span className="leading-relaxed">
                  {company.address.street}<br />
                  {company.address.postalCode} {company.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-yellow mt-1 shrink-0" />
                <a
                  href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="link-underline tnum"
                >
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-yellow mt-1 shrink-0" />
                <a href={`mailto:${company.contact.email}`} className="link-underline">
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-yellow mt-1 shrink-0" />
                <span>{company.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <h2
            className="font-display font-black uppercase leading-[0.85] tracking-[-0.025em] text-white/8 select-none"
            style={{ fontSize: "clamp(4rem, 14vw, 14rem)", color: "rgba(255,255,255,0.06)" }}
            aria-hidden
          >
            G.M.S.S
          </h2>
        </div>

        {/* Legal block */}
        <div className="mt-2 grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-white/10 pt-8 label-mono text-white/60">
          <div>
            <div className="text-white/40">SIREN</div>
            <div className="mt-1 text-white tnum">{company.siren}</div>
          </div>
          <div>
            <div className="text-white/40">SIRET</div>
            <div className="mt-1 text-white tnum">{company.siret}</div>
          </div>
          <div>
            <div className="text-white/40">TVA INTRA.</div>
            <div className="mt-1 text-white tnum">{company.vat}</div>
          </div>
          <div>
            <div className="text-white/40">CODE APE</div>
            <div className="mt-1 text-white tnum">{company.naf}</div>
          </div>
          <div>
            <div className="text-white/40">RCS</div>
            <div className="mt-1 text-white">{company.rcs}</div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 label-mono text-white/45">
          <span>
            © {new Date().getFullYear()} {company.legalName} · {company.brand}.
            Tous droits réservés.
          </span>
          <span>{company.legalForm}</span>
        </div>
      </div>
    </footer>
  );
}
