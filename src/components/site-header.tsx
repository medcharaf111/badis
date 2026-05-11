"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { nav, company } from "@/lib/company";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar — 24/7 + email */}
      <div className="hidden lg:block bg-navy-deep text-white/85">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 flex items-center justify-between py-2 label-mono">
          <span className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-yellow animate-pulse" />
              {company.contact.hours}
            </span>
            <span>{company.address.formatted}</span>
          </span>
          <a
            href={`mailto:${company.contact.email}`}
            className="link-underline"
          >
            {company.contact.email}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(14,42,71,0.10)]"
            : "bg-white"
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-stretch px-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3 py-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpg"
              alt={`${company.brand} — ${company.brandFull}`}
              className="h-12 w-12 object-cover rounded-lg ring-1 ring-navy/10 group-hover:opacity-90 transition-opacity"
              width={48}
              height={48}
            />
            <span className="leading-none">
              <span className="block font-display text-2xl font-extrabold tracking-tight text-navy">
                {company.brand}
              </span>
              <span className="block label-mono text-steel-500 mt-1">
                {company.brandFull}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline font-display font-semibold text-[15px] text-ink hover:text-blue-600 py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center ml-8 gap-3">
            <a
              href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 px-3 py-2 text-steel-700 hover:text-navy transition-colors"
            >
              <Phone size={16} className="text-yellow" />
              <span className="font-display font-semibold text-sm tnum">
                {company.contact.phone}
              </span>
            </a>
            <Link href="/devis" className="btn-primary">
              Demander un devis
              <ArrowUpRight size={14} strokeWidth={2.4} />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden ml-auto p-2 -mr-2 text-navy"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={cn(
            "lg:hidden fixed inset-0 top-[68px] bg-white z-50 transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <nav className="flex flex-col gap-2 mt-2">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display font-bold text-3xl flex items-baseline gap-4 py-3 border-b border-rule hover:text-blue-600 transition-colors"
                >
                  <span className="label-mono text-yellow tnum">
                    0{i + 1}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-10">
              <Link
                href="/devis"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Demander un devis
                <ArrowUpRight size={14} />
              </Link>
              <a
                href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="mt-3 btn-ghost w-full justify-center"
              >
                <Phone size={14} />
                {company.contact.phone}
              </a>
              <p className="label-mono text-steel-500 mt-6 text-center">
                {company.contact.hours}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
