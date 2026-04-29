/**
 * Curated maritime stock photography (Unsplash CDN).
 * Each entry was visually verified for relevance to ship supply / port logistics.
 * Swap any URL freely — `images.unsplash.com` is whitelisted in next.config.ts.
 */

const UNSPLASH = "https://images.unsplash.com/photo-";

export const images = {
  /** Pink-sky port cranes silhouette — primary hero. */
  portCranesSky: {
    src: `${UNSPLASH}1633614384570-bb3948f32a4c`,
    alt: "Grues portuaires se découpant sur un ciel rosé au crépuscule",
    credit: "Unsplash",
  },

  /** Container terminal aerial view — sectors background, intensity. */
  terminalAerial: {
    src: `${UNSPLASH}1494412651409-8963ce7935a7`,
    alt: "Vue aérienne d'un terminal à conteneurs avec rangées colorées",
    credit: "Unsplash",
  },

  /** Container ship docked with blue cranes — Marseille-Fos. */
  shipBlueCranes: {
    src: `${UNSPLASH}1670121180530-cfcba4438038`,
    alt: "Porte-conteneurs amarré sous les portiques bleus d'un terminal",
    credit: "Unsplash",
  },

  /** Aerial of cargo ship + tugboats — logistique. */
  cargoTugs: {
    src: `${UNSPLASH}1606185540834-d6e7483ee1a4`,
    alt: "Porte-conteneurs assisté par remorqueurs en manœuvre portuaire",
    credit: "Unsplash",
  },

  /** Container ship + buoy + Mediterranean mountains — Genoa feel. */
  mediterraneanShip: {
    src: `${UNSPLASH}1701193550843-e3c79b6ff762`,
    alt: "Porte-conteneurs et bouée de balisage devant un littoral méditerranéen",
    credit: "Unsplash",
  },

  /** Container ship + tugboats at quay — services in action. */
  shipAtQuay: {
    src: `${UNSPLASH}1718314786551-798f1398a7b1`,
    alt: "Porte-conteneurs assisté par remorqueurs au pied des portiques",
    credit: "Unsplash",
  },

  /** Containers at sunset — atelier / atmosphere. */
  containersSunset: {
    src: `${UNSPLASH}1606964212858-c215029db704`,
    alt: "Empilement de conteneurs dans la lumière du soir au terminal",
    credit: "Unsplash",
  },

  /** Wide port view with cranes — atelier gallery. */
  portWide: {
    src: `${UNSPLASH}1601311852860-1d8f42381551`,
    alt: "Vue large d'un terminal portuaire avec portiques et conteneurs",
    credit: "Unsplash",
  },

  /** Containers top-down at dusk — atelier gallery, density. */
  containersDusk: {
    src: `${UNSPLASH}1590497008432-598f04441de8`,
    alt: "Vue plongeante d'un parc à conteneurs au crépuscule",
    credit: "Unsplash",
  },

  /** Ship hull closeup — about story. */
  hullDetail: {
    src: `${UNSPLASH}1645301918921-6c744ab66e6f`,
    alt: "Détail de la coque d'un porte-conteneurs avec marquage shipping",
    credit: "Unsplash",
  },

  /** Port quay with cranes & ships — ports page header. */
  portQuay: {
    src: `${UNSPLASH}1713857093375-c16995ae6191`,
    alt: "Quai portuaire avec portiques rouges et porte-conteneurs amarré",
    credit: "Unsplash",
  },

  /** Vegetable crates — ship supply / produits frais. */
  produceCrates: {
    src: `${UNSPLASH}1542223189-67a03fa0f0bd`,
    alt: "Cagettes de produits frais variés en marché de gros",
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
