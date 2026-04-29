export const company = {
  legalName: "SARRAJ AKRAM",
  brand: "G.M.S.S",
  director: "Akram Sarraj",
  founded: "05/08/2025",
  foundedYear: "2025",
  siren: "990 162 174",
  siret: "990 162 174 00017",
  vat: "FR50 990 162 174",
  rcs: "990 162 174 R.C.S. Paris",
  rcsRegisteredAt: "Greffe de Paris — 14/08/2025",
  naf: "46.69B",
  legalForm: "Entrepreneur individuel · Micro-entreprise",
  domain: "Commerce de gros — fournitures et équipements industriels divers",
  domiciliation: "Les Tricolores",
  address: {
    street: "61 rue de Lyon",
    postalCode: "75012",
    city: "Paris",
    country: "France",
    formatted: "61 rue de Lyon, 75012 Paris — France",
  },
  contact: {
    email: "contact@gmss-paris.fr",
    phone: "+33 (0)1 00 00 00 00",
    hours: "Lun — Ven · 08h30 — 18h00",
  },
} as const;

export const capabilities = [
  {
    no: "01",
    title: "Outillage",
    sub: "À main & électroportatif",
    body:
      "Marteaux, clés dynamométriques, perceuses, meuleuses, coffrets — sélection ciblée pour ateliers et chantiers.",
  },
  {
    no: "02",
    title: "Fixations",
    sub: "Quincaillerie technique",
    body:
      "Visserie, boulonnerie, ancrages, rivets, colliers — gammes inox, acier zingué, haute résistance.",
  },
  {
    no: "03",
    title: "Protection",
    sub: "EPI & sécurité",
    body:
      "Casques, chaussures, gants, lunettes, harnais — équipements certifiés CE pour vos opérateurs.",
  },
  {
    no: "04",
    title: "Abrasifs",
    sub: "Disques & consommables",
    body:
      "Disques de coupe, ponçage, polissage, brosses métalliques, toiles abrasives — toutes granulométries.",
  },
  {
    no: "05",
    title: "Soudure",
    sub: "Métallurgie",
    body:
      "Postes MIG/TIG, électrodes, fils fourrés, gaz techniques, accessoires — pour soudeurs et chaudronniers.",
  },
  {
    no: "06",
    title: "Lubrifiants",
    sub: "Fluides industriels",
    body:
      "Huiles hydrauliques, graisses, dégrippants, fluides de coupe — conditionnements pro et bidons.",
  },
  {
    no: "07",
    title: "Manutention",
    sub: "Stockage & levage",
    body:
      "Diables, transpalettes, sangles, palans, rayonnages, bacs — équipez vos zones logistiques.",
  },
  {
    no: "08",
    title: "Maintenance",
    sub: "Hygiène & entretien",
    body:
      "Produits de nettoyage industriel, dégraissants, papiers d'essuyage, sacs, signalétique d'atelier.",
  },
] as const;

export const sectors = [
  "Bâtiment & second œuvre",
  "Industrie manufacturière",
  "Automobile & transport",
  "Logistique & manutention",
  "Énergie & maintenance",
  "Métallurgie & chaudronnerie",
  "Aéronautique & sous-traitance",
  "Artisans & ateliers",
] as const;

export const process = [
  {
    no: "01",
    title: "Brief",
    body:
      "Vous nous transmettez vos besoins — référence, quantité, délai. Pas de catalogue à éplucher.",
  },
  {
    no: "02",
    title: "Sourcing",
    body:
      "Nous activons notre réseau de fournisseurs et identifions le meilleur ratio qualité-prix-délai.",
  },
  {
    no: "03",
    title: "Devis",
    body:
      "Tarification transparente sous 48 h ouvrées. Conditions claires, pas de coûts cachés.",
  },
  {
    no: "04",
    title: "Livraison",
    body:
      "Logistique Paris & Île-de-France. Suivi de commande dédié, factures conformes B2B.",
  },
] as const;

export const principles = [
  {
    label: "01",
    title: "Sourcing rigoureux",
    body:
      "Chaque fournisseur est qualifié sur trois critères : conformité, fiabilité, délai.",
  },
  {
    label: "02",
    title: "Tarification claire",
    body:
      "Pas d'opacité sur la marge. Devis détaillé ligne par ligne, conditions B2B standardisées.",
  },
  {
    label: "03",
    title: "Réactivité parisienne",
    body:
      "Implantés Paris 12e. Réponse sous 24 h, livraison rapide en Île-de-France.",
  },
  {
    label: "04",
    title: "Conformité",
    body:
      "Marquages CE, fiches techniques disponibles, traçabilité fournisseur sur demande.",
  },
] as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/capacites", label: "Capacités" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;
