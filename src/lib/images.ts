/**
 * Curated stock photography (Unsplash CDN).
 * Each entry was visually verified for relevance to industrial supplies / B2B distribution.
 * Swap any URL freely — `images.unsplash.com` is whitelisted in next.config.ts.
 */

const UNSPLASH = "https://images.unsplash.com/photo-";

export const images = {
  /** Welder w/ helmet & sparks — soudure, EPI in action. Strong hero. */
  welder: {
    src: `${UNSPLASH}1504328345606-18bbc8c9d7d1`,
    alt: "Soudeur en EPI, projection d'étincelles dans un atelier",
    credit: "Unsplash",
  },

  /** Angle grinder, bokeh sparks — abrasifs / outillage électroportatif. */
  grinderSparks: {
    src: `${UNSPLASH}1504917595217-d4dc5ebe6122`,
    alt: "Meuleuse d'angle en action avec étincelles",
    credit: "Unsplash",
  },

  /** Pliers / hand tools rack — quincaillerie, outillage à main. */
  toolsRack: {
    src: `${UNSPLASH}1530124566582-a618bc2615dc`,
    alt: "Présentoir de pinces et d'outils à main professionnels",
    credit: "Unsplash",
  },

  /** Automotive assembly line w/ robotic arms — secteur automobile. */
  automotive: {
    src: `${UNSPLASH}1567789884554-0b844b597180`,
    alt: "Ligne d'assemblage automobile avec bras robotisés",
    credit: "Unsplash",
  },

  /** Industrial machinery + operator hands — métallurgie, atelier. */
  machineHands: {
    src: `${UNSPLASH}1581092335397-9583eb92d232`,
    alt: "Mains d'opérateur sur une machine-outil industrielle",
    credit: "Unsplash",
  },

  /** Warehouse aisle — manutention, stockage, logistique. */
  warehouse: {
    src: `${UNSPLASH}1553413077-190dd305871c`,
    alt: "Allée centrale d'un entrepôt logistique avec rayonnages",
    credit: "Unsplash",
  },

  /** Construction site w/ tower cranes — BTP, second œuvre. */
  constructionCranes: {
    src: `${UNSPLASH}1565008447742-97f6f38c985c`,
    alt: "Chantier de construction avec grues à tour",
    credit: "Unsplash",
  },

  /** DeWalt cordless drill on white — outillage portatif (product shot). */
  drill: {
    src: `${UNSPLASH}1572981779307-38b8cabb2407`,
    alt: "Perceuse-visseuse sans-fil professionnelle",
    credit: "Unsplash",
  },

  /** Blue loading-dock doors w/ yellow bollards — colors match palette exactly. */
  loadingBays: {
    src: `${UNSPLASH}1517490232338-06b912a786b5`,
    alt: "Portes de quai de chargement industrielles bleues",
    credit: "Unsplash",
  },

  /** Stanley toolbox + technical drawing + hands — sourcing, brief, méthode. */
  briefDesk: {
    src: `${UNSPLASH}1581092160562-40aa08e78837`,
    alt: "Plan technique, boîte à outils et main d'un projeteur",
    credit: "Unsplash",
  },

  /** CAD screen w/ blueprint — études, sourcing technique. */
  cad: {
    src: `${UNSPLASH}1581092580497-e0d23cbdf1dc`,
    alt: "Écran de DAO affichant un plan technique",
    credit: "Unsplash",
  },
} as const;

export type ImageKey = keyof typeof images;

/**
 * Build a sized Unsplash URL with format & quality parameters.
 * Next/Image will further resize, but this hints the upstream CDN.
 */
export function img(key: ImageKey, width = 1600, quality = 80) {
  const base = images[key].src;
  return `${base}?w=${width}&q=${quality}&auto=format&fit=crop`;
}
