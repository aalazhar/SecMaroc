import {
  SecurityIcon,
  AgentIcon,
  VipIcon,
  EventIcon,
  SurveillanceIcon,
  DogIcon,
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
    title: "Solution de sécurité",
    description:
      "Audit, conception et déploiement de systèmes de sécurité adaptés à votre environnement professionnel ou résidentiel.",
    icon: SecurityIcon,
    href: "/services/solution-securite",
  },
  {
    id: 2,
    title: "Agents de sécurité",
    description:
      "Agents qualifiés pour la surveillance de vos locaux, chantiers, magasins et zones industrielles, jour et nuit.",
    icon: AgentIcon,
    href: "/services/agents-securite",
  },
  {
    id: 3,
    title: "Sécurité rapprochée",
    description:
      "Protection personnelle de dirigeants, personnalités VIP et délégations diplomatiques par des agents expérimentés.",
    icon: VipIcon,
    href: "/services/securite-rapprochee",
  },
  {
    id: 4,
    title: "Sécurité événementielle",
    description:
      "Gestion complète de la sécurité pour vos événements : concerts, conférences, galas et manifestations sportives.",
    icon: EventIcon,
    href: "/services/securite-evenementielle",
  },
  {
    id: 5,
    title: "Télésurveillance",
    description:
      "Surveillance à distance 24h/24 avec intervention rapide en cas d'alarme ou d'intrusion détectée.",
    icon: SurveillanceIcon,
    href: "/services/telesurveillance",
  },
  {
    id: 6,
    title: "Maître-chien",
    description:
      "Équipes cynophiles pour une sécurité renforcée sur vos sites sensibles, chantiers et zones à hauts risques.",
    icon: DogIcon,
    href: "/services/maitre-chien",
  },
];