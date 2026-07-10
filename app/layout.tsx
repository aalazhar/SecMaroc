import type { Metadata } from "next";
import { Geist } from "next/font/google"; // ← Geist Mono removed (unused)
import Script from "next/script";
import "./globals.css";
import { DevisModalProvider } from "@/components/cta/DevisModalContext";
import DevisModal from "@/components/cta/DevisModal";

// ── Fonts ─────────────────────────────────────────────────────────────────────
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // explicit swap for LCP
});

// ── Constants ─────────────────────────────────────────────────────────────────
const BASE_URL = "https://sec-maroc.vercel.app"; // ← swap for edenbaco.ma at launch
const SITE_NAME = "EDENBACO";
const DEFAULT_TITLE =
  "EDENBACO | Sécurité Privée, Gardiennage & Nettoyage Professionnel au Maroc";
const DEFAULT_DESC =
  "EDENBACO accompagne les entreprises et collectivités au Maroc avec des services de sécurité privée, gardiennage, agents de sécurité, nettoyage professionnel, nettoyage industriel, entretien d'immeubles, dératisation et désinfection.";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── metadataBase (required for absolute OG/Twitter URLs) ──
  metadataBase: new URL(BASE_URL),

  // ── Title ──
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  // ── Description ──
  description: DEFAULT_DESC,

  // ── Keywords ──
  keywords: [
    // Brand
    "EDENBACO",

    // Security
    "agence de sécurité Maroc",
    "gardiennage Maroc",
    "sécurité privée Maroc",
    "agents de sécurité",
    "sécurité événementielle",
    "surveillance 24/7",
    "maître chien Maroc",
    "contrôle d'accès",

    // Cleaning
    "nettoyage professionnel Maroc",
    "entreprise de nettoyage",
    "nettoyage bureaux",
    "nettoyage industriel",
    "nettoyage commerces",
    "entretien immeubles",
    "désinfection",
    "dératisation",
    "collecte déchets",

    // Local
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Agadir",
  ],

  // ── Authors & creator ──
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // ── Canonical ──
  alternates: {
    canonical: BASE_URL,
    languages: {
      "fr-MA": BASE_URL, // Moroccan French (primary)
      "ar-MA": `${BASE_URL}/ar`, // Arabic version when you add it
    },
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ──
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: BASE_URL, // ← fixed: now has https://
    siteName: SITE_NAME,
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Sécurité privée et nettoyage professionnel au Maroc`,
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [OG_IMAGE],
    creator: "@edenbaco", // ← add your Twitter handle if you have one
  },

  // ── Icons ──

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/images/icons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: "/images/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // ── Web manifest (PWA + home screen) ──
  manifest: "/manifest.json",

  // ── Verification (add once you register in Search Console) ──
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  // },
};

// ── JSON-LD structured data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organisation
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`, // add your logo file
        width: 200,
        height: 60,
      },
      sameAs: [
        // "https://www.facebook.com/edenbaco",
        // "https://www.linkedin.com/company/edenbaco",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+212-661-370-673",
          contactType: "customer service",
          availableLanguage: ["French", "Arabic"],
          hoursAvailable: "Mo-Su 00:00-23:59",
        },
      ],
    },

    // 2. LocalBusiness (critical for local Moroccan SEO)
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: SITE_NAME,
      description: DEFAULT_DESC,
      url: BASE_URL,
      telephone: "00212662363866",
      email: "contact@edenbaco.ma",
      priceRange: "$$",
      currenciesAccepted: "MAD",
      paymentAccepted: "Cash, Virement bancaire",
      image: OG_IMAGE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "HAY SALAM 1 GROUPE A, RUE 915 AHL LOUGHLAM 20000, CASABLANCA", 
        addressLocality: "Casablanca",
        addressRegion: "Grand Casablanca",
        postalCode: "20000",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.679694, 
        longitude: -7.400944,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "City", name: "Mohammedia" },
        { "@type": "Country", name: "Morocco" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services professionnels",
        itemListElement: [
          // SECURITY

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gardiennage et surveillance",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agents de sécurité",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sécurité événementielle",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sécurité cynophile",
            },
          },

          // CLEANING

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nettoyage de bureaux",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nettoyage industriel",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Entretien d'immeubles",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dératisation et désinfection",
            },
          },
        ],
      },
    },

    // 3. Website
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESC,
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "fr-MA",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {/* Geo meta tags — helps local Moroccan SEO */}
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Casablanca, Maroc" />
        <meta name="geo.position" content="33.5731;-7.5898" />
        <meta name="ICBM" content="33.5731, -7.5898" />
      </head>

      <body className="flex flex-col min-h-full">
        <DevisModalProvider>
          {children}
          <DevisModal />
        </DevisModalProvider>

        {/* JSON-LD structured data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
