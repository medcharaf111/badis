"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

type FormState = "idle" | "submitting" | "sent";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 800));
    setState("sent");
  }

  if (state === "sent") {
    return (
      <div className="bg-white border border-rule p-8 lg:p-10">
        <div className="flex items-center gap-3 label-mono text-yellow-deep">
          <span className="h-7 w-7 grid place-items-center bg-yellow rounded-full">
            <Check size={14} strokeWidth={2.6} className="text-navy-deep" />
          </span>
          DEMANDE ENREGISTRÉE
        </div>
        <h3 className="mt-6 font-display text-3xl font-extrabold text-navy leading-tight">
          Merci. Nous revenons vers vous sous 48 h ouvrées.
        </h3>
        <p className="mt-4 text-steel-700 leading-relaxed">
          Un accusé de réception a été envoyé à votre adresse. Pour les
          demandes urgentes, contactez-nous directement par email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white border border-rule divide-y divide-rule"
      noValidate
    >
      <Field name="company" label="Société" placeholder="Raison sociale" required />
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-rule">
        <Field name="name" label="Nom · prénom" placeholder="Votre nom" required />
        <Field name="role" label="Fonction" placeholder="Acheteur, responsable maintenance…" />
      </div>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-rule">
        <Field name="email" label="Email pro" placeholder="vous@societe.fr" type="email" required />
        <Field name="phone" label="Téléphone" placeholder="+33 …" type="tel" />
      </div>
      <Field name="siret" label="SIRET (optionnel)" placeholder="14 chiffres" />

      <div className="px-5 py-4">
        <label className="label-mono text-steel-500">Famille de produit</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Outillage",
            "Fixations",
            "EPI",
            "Abrasifs",
            "Soudure",
            "Lubrifiants",
            "Manutention",
            "Maintenance",
            "Autre",
          ].map((tag) => (
            <label
              key={tag}
              className="inline-flex items-center font-display text-sm font-semibold uppercase tracking-wide px-3.5 py-2 border border-rule cursor-pointer hover:border-blue-100 hover:bg-blue-50 transition-colors has-[:checked]:bg-yellow has-[:checked]:text-navy-deep has-[:checked]:border-yellow"
            >
              <input
                type="checkbox"
                name="categories"
                value={tag}
                className="sr-only"
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      <div className="px-5 py-4">
        <label htmlFor="message" className="label-mono text-steel-500">
          Décrivez votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Référence, quantité, délai souhaité, contraintes particulières…"
          className="mt-3 w-full bg-transparent border-0 p-0 outline-none text-ink placeholder:text-steel-300 resize-none focus:ring-0"
        />
      </div>

      <div className="px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-bg-soft">
        <label className="flex items-start gap-3 label-mono text-steel-700 max-w-md">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 accent-yellow"
          />
          <span>
            J&apos;accepte que mes informations soient traitées pour répondre à
            ma demande de devis (RGPD).
          </span>
        </label>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary disabled:opacity-50"
        >
          {state === "submitting" ? "Envoi…" : "Envoyer la demande"}
          <ArrowUpRight size={14} strokeWidth={2.4} />
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="px-5 py-4">
      <label htmlFor={name} className="label-mono text-steel-500">
        {label}
        {required && <span className="text-yellow-deep ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-0 p-0 outline-none text-ink placeholder:text-steel-300 focus:ring-0"
      />
    </div>
  );
}
