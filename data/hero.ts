export interface HeroSlide {
  id: "security" | "cleaning";
  label: string;
  title: {
    first: string;
    second: string;
  };
  description: string;
  visual: "shield" | "cleaning";
  accent: string;
  trust: {
    title: string;
    subtitle: string;
  }[];
  actions: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}

export const heroSlides: HeroSlide[] = [
  {
    id: "security",
    label: "Sécurité Privée • Surveillance • Gardiennage",
    title: {
      first: "Votre sécurité,",
      second: "notre mission",
    },
    description:
      "EDEN BACO accompagne les entreprises, institutions et particuliers avec des solutions de sécurité privée, de surveillance et de gardiennage adaptées à chaque besoin. Nos équipes qualifiées assurent une protection fiable, réactive et disponible 24h/24 et 7j/7.",
    visual: "shield",
    accent: "#C8102E",
    trust: [
      {
        title: "Disponibilité 24h/24",
        subtitle: "Intervention rapide 7j/7",
      },
      {
        title: "Agents qualifiés",
        subtitle: "Professionnels formés et certifiés",
      },
      {
        title: "Solutions sur mesure",
        subtitle: "Adaptées à chaque client",
      },
      {
        title: "Fiabilité & Confidentialité",
        subtitle: "Protection et discrétion garanties",
      },
    ],
    actions: {
      primary: {
        label: "Demander un devis",
        href: "#contact",
      },
      secondary: {
        label: "Découvrir nos services",
        href: "#security",
      },
    },
  },

  {
    id: "cleaning",
    label: "Nettoyage Professionnel • Hygiène • Désinfection",
    title: {
      first: "Des espaces propres,",
      second: "une image irréprochable",
    },
    description:
      "Nous accompagnons les entreprises, collectivités, commerces et industries avec des prestations de nettoyage, de désinfection et d'entretien adaptées à chaque environnement.",
    visual: "cleaning",
    accent: "#C8102E",
    trust: [
      {
        title: "Intervention flexible",
        subtitle: "Soirée, week-end et horaires adaptés",
      },
      {
        title: "Équipes expérimentées",
        subtitle: "Professionnels qualifiés",
      },
      {
        title: "Qualité contrôlée",
        subtitle: "Prestations suivies et vérifiées",
      },
      {
        title: "Respect des normes",
        subtitle: "Hygiène et sécurité garanties",
      },
    ],
    actions: {
      primary: {
        label: "Demander un devis",
        href: "#contact",
      },
      secondary: {
        label: "Découvrir nos services",
        href: "#cleaning",
      },
    },
  },
];