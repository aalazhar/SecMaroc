// import {
//   SecurityIcon,
//   AgentIcon,
//   VipIcon,
//   EventIcon,
//   SurveillanceIcon,
//   DogIcon,
// } from "@/components/icons";

// export interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   href: string;
// }

// export const services: Service[] = [
//   {
//     id: 1,
//     title: "Solution de sécurité",
//     description:
//       "Audit, conception et déploiement de systèmes de sécurité adaptés à votre environnement professionnel ou résidentiel.",
//     icon: SecurityIcon,
//     href: "/services/solution-securite",
//   },
//   {
//     id: 2,
//     title: "Agents de sécurité",
//     description:
//       "Agents qualifiés pour la surveillance de vos locaux, chantiers, magasins et zones industrielles, jour et nuit.",
//     icon: AgentIcon,
//     href: "/services/agents-securite",
//   },
//   {
//     id: 3,
//     title: "Sécurité rapprochée",
//     description:
//       "Protection personnelle de dirigeants, personnalités VIP et délégations diplomatiques par des agents expérimentés.",
//     icon: VipIcon,
//     href: "/services/securite-rapprochee",
//   },
//   {
//     id: 4,
//     title: "Sécurité événementielle",
//     description:
//       "Gestion complète de la sécurité pour vos événements : concerts, conférences, galas et manifestations sportives.",
//     icon: EventIcon,
//     href: "/services/securite-evenementielle",
//   },
//   {
//     id: 5,
//     title: "Télésurveillance",
//     description:
//       "Surveillance à distance 24h/24 avec intervention rapide en cas d'alarme ou d'intrusion détectée.",
//     icon: SurveillanceIcon,
//     href: "/services/telesurveillance",
//   },
//   {
//     id: 6,
//     title: "Maître-chien",
//     description:
//       "Équipes cynophiles pour une sécurité renforcée sur vos sites sensibles, chantiers et zones à hauts risques.",
//     icon: DogIcon,
//     href: "/services/maitre-chien",
//   },
// ];

import {
  AgentIcon,
  DogIcon,
  EventIcon,
  SecurityIcon,
  SurveillanceIcon,
  VipIcon,
} from "@/components/icons";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Gardiennage & Surveillance 24/7",
    description:
      "Surveillance permanente de commerces, entreprises, entrepôts, résidences et sites sensibles avec rondes de sécurité et contrôle des accès.",
    icon: SurveillanceIcon,
    href: "#services",
  },
  {
    id: 2,
    title: "Agents de Sécurité",
    description:
      "Agents qualifiés et certifiés assurant la protection des biens, des personnes et des installations avec professionnalisme et discrétion.",
    icon: AgentIcon,
    href: "#services",
  },
  {
    id: 3,
    title: "Sécurité Cynophile",
    description:
      "Équipes maître-chien spécialisées dans la prévention, la dissuasion et le gardiennage des sites industriels, commerciaux et chantiers.",
    icon: DogIcon,
    href: "#services",
  },
  {
    id: 4,
    title: "Intervention Rapide",
    description:
      "Réponse immédiate aux incidents et situations d'urgence grâce à des équipes réactives capables d'intervenir efficacement sur site.",
    icon: SecurityIcon,
    href: "#services",
  },
  {
    id: 5,
    title: "Sécurité Événementielle",
    description:
      "Sécurisation des événements, conférences, salons, manifestations et concerts avec un dispositif adapté à chaque événement.",
    icon: EventIcon,
    href: "#services",
  },
  {
    id: 6,
    title: "Contrôle d'Accès & Secteur Public",
    description:
      "Gestion des accès, protection des bâtiments publics et sécurisation des infrastructures sensibles pour les collectivités et institutions.",
    icon: VipIcon,
    href: "#services",
  },
];