export interface Division {
  id: "security" | "cleaning";
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: string;
  accent: string;
  points: string[];
}

export const divisions: Division[] = [
  {
    id: "security",

    title: "Sécurité Privée",

    subtitle:
      "Protection • Surveillance • Gardiennage",

    description:
      "Des solutions de sécurité adaptées aux entreprises, institutions et particuliers avec des équipes qualifiées et réactives.",

    href: "#services",

    icon: "shield",

    accent: "#C8102E",

    points: [
      "Agents qualifiés",
      "Surveillance 24h/24",
      "Solutions personnalisées",
    ],
  },


  {
    id: "cleaning",

    title: "Nettoyage Professionnel",

    subtitle:
      "Hygiène • Désinfection • Entretien",

    description:
      "Des prestations adaptées aux bureaux, industries, commerces et collectivités.",

    href: "#services",

    icon: "cleaning",

    accent: "#023E8A",

    points: [
      "Intervention flexible",
      "Équipes expérimentées",
      "Qualité contrôlée",
    ],
  },
];