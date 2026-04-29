# G.M.S.S — Site vitrine

Site frontend pour **G.M.S.S** (SARRAJ AKRAM) — distributeur B2B de fournitures et équipements industriels, Paris 12ᵉ.

## Stack

- **Next.js 16** (App Router) · React 19 · TypeScript
- **Tailwind CSS v4** (configuration via `@theme` dans `globals.css`)
- **next/font** — Saira (display), IBM Plex Sans (body), IBM Plex Mono (caption)
- **next/image** — photos servies depuis Unsplash CDN, optimisées par Next.js
- **Framer Motion** disponible · **Lucide** pour les icônes

## Démarrer

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Node 20+ requis (voir `engines` dans `package.json`).

## Déploiement Vercel

Le projet est prêt pour Vercel sans configuration supplémentaire.

1. Importer le dépôt GitHub dans Vercel
2. Vercel détecte automatiquement Next.js
3. Aucun environment variable requis
4. Les images Unsplash sont autorisées via `next.config.ts`

Bouton de déploiement direct :

```
https://vercel.com/new/clone?repository-url=https://github.com/medcharaf111/badis
```

## Structure

```
src/
  app/
    layout.tsx           # fonts + header/footer globaux
    page.tsx             # accueil
    a-propos/page.tsx
    capacites/page.tsx
    contact/page.tsx
    not-found.tsx
    robots.ts            # robots.txt généré
    sitemap.ts           # sitemap.xml généré
    icon.svg             # favicon
    globals.css          # design tokens + base
  components/
    site-header.tsx
    site-footer.tsx
    hero.tsx             # avec image welder
    atelier.tsx          # gallerie 4 images "notre quotidien"
    sectors.tsx          # avec image bg full-bleed
    why-us.tsx           # avec image sourcing
    capabilities-grid.tsx
    process.tsx
    stats.tsx
    contact-cta.tsx
    contact-form.tsx
    marquee.tsx
    section-label.tsx
    reveal.tsx
  lib/
    cn.ts
    company.ts           # informations légales centralisées
    images.ts            # catalogue d'images Unsplash
public/
  (assets statiques additionnels)
```

## Édition rapide

- **Informations légales** (SIREN, SIRET, TVA, adresse, dirigeant) :
  centralisées dans [src/lib/company.ts](src/lib/company.ts).
- **Photos** : centralisées dans [src/lib/images.ts](src/lib/images.ts).
  Toute URL `images.unsplash.com` est autorisée par `next.config.ts`.

## Direction artistique

Maintenance & outils B2B : navy `#0e2a47` primaire, bleu acier `#2270c4`
secondaire, jaune utilitaire `#f5b417` pour les CTA et accents. Typographie
Saira pour l'affichage industriel.
