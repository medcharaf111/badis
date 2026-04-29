import type { MetadataRoute } from "next";

const BASE = "https://gmss-paris.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/capacites`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
  return routes;
}
