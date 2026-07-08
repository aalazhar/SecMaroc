// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://sec-maroc.vercel.app"; // ← swap for edenbaco.ma at launch

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Home ──
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // ── Services ──
    {
      url: `${BASE_URL}/#services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── About ──
    {
      url: `${BASE_URL}/#about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // ── Contact ──
    {
      url: `${BASE_URL}/#contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },

    // ── Add individual service pages here once created ──
    // {
    //   url: `${BASE_URL}/services/gardiennage`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.85,
    // },
    // {
    //   url: `${BASE_URL}/services/securite-evenementielle`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.85,
    // },
  ];
}
