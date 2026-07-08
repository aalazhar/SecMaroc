import {
  CheckBadgeIcon,
  LightningIcon,
  ClipboardIcon,
  ShieldIcon,
  AgentIcon,
} from "@/components/icons";

export interface WhyUs {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>
  >;
}

export const whyUs = [
  {
    id: 1,
    title: "Expertise & Expérience",
    description:
      "Notre savoir-faire dans la sécurité privée nous permet de proposer des solutions efficaces pour les entreprises, institutions et particuliers.",
    icon: ShieldIcon,
  },
  {
    id: 2,
    title: "Solutions Sur Mesure",
    description:
      "Chaque client est unique. Nous analysons vos besoins afin de concevoir un dispositif de sécurité parfaitement adapté.",
    icon: ClipboardIcon,
  },
  {
    id: 3,
    title: "Réactivité 24h/24",
    description:
      "Nos équipes restent disponibles jour et nuit pour répondre rapidement à toute situation ou demande urgente.",
    icon: LightningIcon,
  },
  {
    id: 4,
    title: "Discrétion & Confidentialité",
    description:
      "La protection de votre vie privée et de vos informations est au cœur de notre engagement.",
    icon: AgentIcon,
  },
  {
    id: 5,
    title: "Professionnalisme & Excellence",
    description:
      "Des agents qualifiés, formés et certifiés qui interviennent avec rigueur, sérieux et efficacité.",
    icon: CheckBadgeIcon,
  },
];