import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { images, img, type ImageKey } from "@/lib/images";

type Tile = {
  key: ImageKey;
  tag: string;
  title: string;
  span: "wide" | "tall" | "square";
};

const tiles: Tile[] = [
  { key: "shipAtQuay", tag: "Escale", title: "Navire à quai · assistance", span: "wide" },
  { key: "containersDusk", tag: "Logistique", title: "Parc à conteneurs", span: "tall" },
  { key: "produceCrates", tag: "Ship supply", title: "Produits frais à embarquer", span: "square" },
  { key: "containersSunset", tag: "Méditerranée", title: "Crépuscule sur le terminal", span: "square" },
];

export function Atelier() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03" title="Notre quotidien" />
            <h2 className="display-lg mt-5 text-navy">
              Du fournisseur{" "}
              <span className="text-blue-600">au pied du quai.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-steel-700 leading-relaxed">
              Aperçu des environnements que nous opérons : terminaux de
              Marseille-Fos, ports italiens, parcs logistiques de
              Méditerranée. Chaque escale impose ses contraintes — nous
              adaptons l&apos;approvisionnement.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4">
          {tiles.map((t, i) => (
            <Reveal
              key={t.key}
              delay={i * 80}
              className={
                t.span === "wide"
                  ? "col-span-2 lg:col-span-7 lg:row-span-2"
                  : t.span === "tall"
                  ? "col-span-2 lg:col-span-5 lg:row-span-2"
                  : "col-span-1 lg:col-span-6"
              }
            >
              <figure
                className={
                  "group relative overflow-hidden bg-navy " +
                  (t.span === "wide"
                    ? "aspect-[16/10] lg:aspect-[16/13]"
                    : t.span === "tall"
                    ? "aspect-[3/4] lg:aspect-[5/8]"
                    : "aspect-[4/3]")
                }
              >
                <Image
                  src={img(t.key, 1400, 75)}
                  alt={images[t.key].alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 lg:p-6 text-white">
                  <div className="label-mono text-yellow">{t.tag}</div>
                  <div className="mt-1 font-display text-xl lg:text-2xl font-extrabold leading-tight">
                    {t.title}
                  </div>
                </figcaption>
                <span
                  aria-hidden
                  className="absolute top-4 right-4 h-2 w-2 rounded-full bg-yellow"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
