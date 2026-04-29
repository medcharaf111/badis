export const company = {
  legalName: "SARRAJ AKRAM",
  brand: "GMSS",
  brandFull: "Global Marine Supply Service",
  tagline:
    "Votre partenaire de confiance en approvisionnement maritime et logistique en Méditerranée",
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
  domain: "Approvisionnement maritime · Services logistiques portuaires",
  domiciliation: "Les Tricolores",
  address: {
    street: "61 rue de Lyon",
    postalCode: "75012",
    city: "Paris",
    country: "France",
    formatted: "61 rue de Lyon, 75012 Paris — France",
  },
  contact: {
    email: "contact@gmss-ei.fr",
    emailSales: "sales@gmss-ei.fr",
    phone: "+33 7 53 10 78 94",
    whatsapp: "+33 7 53 10 78 94",
    hours: "24/7 · Astreinte d'urgence permanente",
  },
} as const;

export const services = [
  {
    no: "01",
    title: "Approvisionnement navire",
    sub: "Ship supply",
    body:
      "Produits alimentaires (frais, secs, surgelés), fournitures de cabine, produits détaxés (bonded stores) — pour relever vos provisions à l'escale.",
    items: [
      "Produits alimentaires (frais, secs, surgelés)",
      "Fournitures de cabine",
      "Produits détaxés (bonded stores)",
      "Eau potable & boissons",
    ],
  },
  {
    no: "02",
    title: "Fournitures techniques",
    sub: "Pièces & équipements",
    body:
      "Pièces moteurs, équipements de pont, outillage technique — pour vos opérations de maintenance et de réparation.",
    items: [
      "Pièces moteurs",
      "Équipements de pont",
      "Outillage technique",
      "Consommables industriels",
    ],
  },
  {
    no: "03",
    title: "Pièces de rechange",
    sub: "Spare parts",
    body:
      "Livraison rapide de pièces de rechange critiques aux navires en escale — sourcing direct auprès des fabricants.",
    items: [
      "Sourcing direct fabricants",
      "Pièces critiques en urgence",
      "Suivi de commande dédié",
      "Documentation technique",
    ],
  },
  {
    no: "04",
    title: "Logistique & transport",
    sub: "Forwarding & douane",
    body:
      "Organisation des livraisons, transport rapide, gestion douanière — du fournisseur au pied du quai.",
    items: [
      "Organisation des livraisons",
      "Transport rapide",
      "Gestion douanière",
      "Coordination avec l'agent maritime",
    ],
  },
  {
    no: "05",
    title: "Services équipage",
    sub: "Crew assistance",
    body:
      "Organisation des relèves, transferts aéroport / port, réservations hôtels — pour vos rotations d'équipage.",
    items: [
      "Organisation des relèves",
      "Transferts aéroport / port",
      "Réservations hôtels",
      "Assistance administrative",
    ],
  },
  {
    no: "06",
    title: "Intervention d'urgence",
    sub: "24/7 emergency",
    body:
      "Service permanent pour répondre aux demandes urgentes et garantir la continuité des opérations de nos clients.",
    items: [
      "Astreinte 24/7",
      "Réponse immédiate",
      "Livraison express",
      "Coordination multi-fournisseurs",
    ],
  },
] as const;

export const ports = [
  {
    code: "FRA · MRS / FOS",
    name: "Marseille-Fos",
    country: "France",
    body:
      "Approvisionnement complet, livraison rapide à quai, couverture combinée Fos et Marseille.",
    capabilities: [
      "Approvisionnement complet",
      "Livraison rapide à quai",
      "Couverture Fos & Marseille",
      "Coordination agent maritime",
    ],
  },
  {
    code: "ITA · GOA",
    name: "Gênes",
    country: "Italie",
    body:
      "Services techniques et logistiques, intervention rapide, réseau local fiable.",
    capabilities: [
      "Services techniques & logistiques",
      "Intervention rapide",
      "Réseau local fiable",
      "Coordination transfrontalière",
    ],
  },
  {
    code: "MED · SUR DEMANDE",
    name: "Autres ports méditerranéens",
    country: "Méditerranée",
    body:
      "Intervention sur demande, en fonction des besoins de chaque escale.",
    capabilities: [
      "Activation sur demande",
      "Couverture extensible",
      "Réseau partenaire",
      "Étude de faisabilité rapide",
    ],
  },
] as const;

export const principles = [
  {
    label: "01",
    title: "Réactivité 24/7",
    body:
      "Astreinte permanente. Réponse immédiate, jour, nuit, week-end et jours fériés — la marine ne dort pas.",
  },
  {
    label: "02",
    title: "Société basée en Europe",
    body:
      "Siège en France, opérations dans les principaux ports méditerranéens. Conformité européenne.",
  },
  {
    label: "03",
    title: "Réseau de fournisseurs qualifiés",
    body:
      "Sourcing en direct auprès de fournisseurs validés sur la conformité, la qualité et le délai.",
  },
  {
    label: "04",
    title: "Expertise du secteur maritime",
    body:
      "Connaissance opérationnelle des escales, des contraintes navires et des procédures portuaires.",
  },
] as const;

export const process = [
  {
    no: "01",
    title: "Demande",
    body:
      "Vous nous transmettez votre demande : ETA, port d'escale, liste des besoins. Email ou WhatsApp.",
  },
  {
    no: "02",
    title: "Devis",
    body:
      "Tarification claire et rapide. Confirmation des disponibilités et planning de livraison.",
  },
  {
    no: "03",
    title: "Sourcing",
    body:
      "Activation du réseau fournisseurs. Préparation, contrôle qualité, conditionnement adapté.",
  },
  {
    no: "04",
    title: "Livraison à quai",
    body:
      "Coordination avec l'agent maritime. Bon de livraison signé par le commandant ou le chief steward.",
  },
] as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/ports", label: "Ports" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;
