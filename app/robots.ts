// app/robots.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://sec-maroc.vercel.app"; // ← swap for edenbaco.ma at launch

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // never expose API routes
          "/_next/",      // Next.js internals
          "/private/",    // add any private routes here
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
