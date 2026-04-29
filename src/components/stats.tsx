import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: "08", suffix: "+", label: "Familles de produits couvertes" },
  { value: "48h", suffix: "", label: "Délai standard de réponse devis" },
  { value: "100%", suffix: "", label: "Île-de-France livrée" },
  { value: "B2B", suffix: "", label: "Comptes pros, factures conformes" },
];

export function Stats() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-20">
        <SectionLabel index="01" title="Indicateurs" />

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="bg-white border border-rule p-7 lg:p-8 hover:shadow-[var(--shadow-card)] transition-shadow"
            >
              <div className="flex items-baseline gap-1 text-navy">
                <span className="font-display text-5xl lg:text-6xl font-black leading-none tnum">
                  {s.value}
                </span>
                {s.suffix && (
                  <span className="font-display text-2xl text-yellow">
                    {s.suffix}
                  </span>
                )}
              </div>
              <p className="mt-5 max-w-[16rem] text-steel-700 text-sm leading-relaxed">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
