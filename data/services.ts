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

// import {
//   AgentIcon,
//   DogIcon,
//   EventIcon,
//   SecurityIcon,
//   SurveillanceIcon,
//   VipIcon,
// } from "@/components/icons";

// import {
//   Building2,
//   Factory,
//   School,
//   Store,
//   Bug,
//   Wrench,
// } from "lucide-react";

// export type ServiceType = "security" | "cleaning";

// export interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   href: string;
//   division: ServiceType;
// }

// export const services: Service[] = [
//   {
//     id: 1,
//     title: "Gardiennage & Surveillance 24/7",
//     description:
//       "Surveillance permanente de commerces, entreprises, entrepôts, résidences et sites sensibles avec rondes de sécurité et contrôle des accès.",
//     icon: SurveillanceIcon,
//     href: "#services",
//     division: "security",
//   },
//   {
//     id: 2,
//     title: "Agents de Sécurité",
//     description:
//       "Agents qualifiés et certifiés assurant la protection des biens, des personnes et des installations avec professionnalisme et discrétion.",
//     icon: AgentIcon,
//     href: "#services",
//     division: "security",
//   },
//   {
//     id: 3,
//     title: "Sécurité Cynophile",
//     description:
//       "Équipes maître-chien spécialisées dans la prévention, la dissuasion et le gardiennage des sites industriels, commerciaux et chantiers.",
//     icon: DogIcon,
//     href: "#services",
//     division: "security",
//   },
//   {
//     id: 4,
//     title: "Intervention Rapide",
//     description:
//       "Réponse immédiate aux incidents et situations d'urgence grâce à des équipes réactives capables d'intervenir efficacement sur site.",
//     icon: SecurityIcon,
//     href: "#services",
//     division: "security",
//   },
//   {
//     id: 5,
//     title: "Sécurité Événementielle",
//     description:
//       "Sécurisation des événements, conférences, salons, manifestations et concerts avec un dispositif adapté à chaque événement.",
//     icon: EventIcon,
//     href: "#services",
//     division: "security",
//   },
//   {
//     id: 6,
//     title: "Contrôle d'Accès & Secteur Public",
//     description:
//       "Gestion des accès, protection des bâtiments publics et sécurisation des infrastructures sensibles pour les collectivités et institutions.",
//     icon: VipIcon,
//     href: "#services",
//     division: "security",
//   },
// ];

// export const cleaningServices: Service[] = [
//   {
//     id: 7,
//     title: "Nettoyage secteur tertiaire",
//     description:
//       "Bureaux propres, équipes sereines. Intervention en soirée ou week-end sans perturber votre activité.",
//     icon: Building2,
//     href: "#services",
//     division: "cleaning",
//   },
//   {
//     id: 8,
//     title: "Nettoyage industriel",
//     description:
//       "Ateliers et usines conformes aux exigences HSE avec dégraissage et nettoyage haute pression.",
//     icon: Factory,
//     href: "#services",
//     division: "cleaning",
//   },
//   {
//     id: 9,
//     title: "Collectivités & Écoles",
//     description:
//       "Désinfection et entretien des établissements scolaires et espaces publics.",
//     icon: School,
//     href: "#services",
//     division: "cleaning",
//   },
//   {
//     id: 10,
//     title: "Surfaces commerciales",
//     description:
//       "Magasins, vitrines et sols entretenus avant chaque ouverture.",
//     icon: Store,
//     href: "#services",
//     division: "cleaning",
//   },
//   {
//     id: 11,
//     title: "Dératisation",
//     description:
//       "Élimination durable des rats, souris, cafards avec protocole certifié ONSSA.",
//     icon: Bug,
//     href: "#services",
//     division: "cleaning",
//   },
//   {
//     id: 12,
//     title: "Entretien d'immeubles",
//     description:
//       "Hall, escaliers, parkings, ascenseurs avec un référent dédié.",
//     icon: Wrench,
//     href: "#services",
//     division: "cleaning",
//   },
// ];

// export type ServiceType =
//   | "security"
//   | "cleaning";


// export interface ServiceItem {
//   id: string;
//   title: string;
//   short: string;
//   description: string;
//   icon: string;
// }



// export const securityServices: ServiceItem[] = [
//   {
//     id: "guarding",

//     title: "Gardiennage",

//     short: "Protection humaine",

//     description:
//       "Agents qualifiés pour assurer la surveillance et la protection de vos sites.",

//     icon: "🛡️",
//   },


//   {
//     id: "surveillance",

//     title: "Surveillance",

//     short: "Contrôle permanent",

//     description:
//       "Surveillance des lieux avec une présence adaptée à vos besoins.",

//     icon: "📹",
//   },


//   {
//     id: "events",

//     title: "Événementiel",

//     short: "Sécurité événements",

//     description:
//       "Dispositifs de sécurité pour événements privés et professionnels.",

//     icon: "🎯",
//   },
// ];



// export const cleaningServices: ServiceItem[] = [

//   {
//     id: "tertiary",

//     title: "Nettoyage secteur tertiaire",

//     short:
//       "Bureaux propres, équipes sereines",

//     description:
//       "Intervention en soirée ou week-end. Zéro perturbation, 100% propreté.",

//     icon: "🏢",
//   },


//   {
//     id: "industrial",

//     title: "Nettoyage industriel",

//     short:
//       "Ateliers aux normes HSE",

//     description:
//       "Dégraissage, haute pression et prestations adaptées aux arrêts production.",

//     icon: "🏭",
//   },


//   {
//     id: "schools",

//     title: "Collectivités & écoles",

//     short:
//       "Des lieux sains pour tous",

//     description:
//       "Désinfection avec produits adaptés et respect des exigences publiques.",

//     icon: "🏫",
//   },


//   {
//     id: "commercial",

//     title: "Surfaces commerciales",

//     short:
//       "Une image irréprochable",

//     description:
//       "Vitrines, sols et nettoyage avant ouverture.",

//     icon: "🛍️",
//   },


//   {
//     id: "pest",

//     title: "Dératisation",

//     short:
//       "Élimination durable",

//     description:
//       "Plan d'action certifié contre rats, souris et nuisibles.",

//     icon: "🐭",
//   },


//   {
//     id: "building",

//     title: "Entretien d'immeubles",

//     short:
//       "Parties communes impeccables",

//     description:
//       "Hall, escaliers, parkings et ascenseurs avec suivi dédié.",

//     icon: "🏢",
//   },

// ];

import {
  Camera,
  UserCheck,
  Dog,
  Siren,
  Ticket,
  Fingerprint,
} from "lucide-react";

import {
  Building2,
  Factory,
  School,
  Store,
  Bug,
  Wrench,
} from "lucide-react";

export type ServiceType = "security" | "cleaning";

export interface ServiceDetails {
  tagline: string;
  paragraphs: string[];
  highlights: string[];
  extra?: { label: string; text: string };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  division: ServiceType;
  details: ServiceDetails;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Gardiennage & Surveillance 24/7",
    description:
      "Surveillance permanente de commerces, entreprises, entrepôts, résidences et sites sensibles avec rondes de sécurité et contrôle des accès.",
    icon: Camera,
    href: "#services",
    division: "security",
    details: {
      tagline: "Une protection sans compromis pour vos activités",
      paragraphs: [
        "La sécurité de votre entreprise ne peut être laissée au hasard. Chez Eden BACO Security, nous mettons à votre disposition des dispositifs de surveillance performants et des agents expérimentés assurant une présence permanente sur vos sites.",
        "Grâce à une approche préventive et à des procédures rigoureuses, nous protégeons vos collaborateurs, vos visiteurs et vos infrastructures contre les risques d'intrusion, de vol ou de dégradation.",
      ],
      highlights: [
        "Surveillance continue 24h/24 et 7j/7",
        "Agents qualifiés et rigoureusement sélectionnés",
        "Contrôle des accès et rondes de sécurité",
        "Réactivité immédiate en cas d'incident",
        "Solutions adaptées à chaque environnement",
      ],
      extra: { label: "Notre engagement", text: "Votre sérénité est notre priorité." },
    },
  },
  {
    id: 2,
    title: "Agents de Sécurité",
    description:
      "Agents qualifiés et certifiés assurant la protection des biens, des personnes et des installations avec professionnalisme et discrétion.",
    icon: UserCheck,
    href: "#services",
    division: "security",
    details: {
      tagline: "Des professionnels au service de votre image et de votre sécurité",
      paragraphs: [
        "Nos agents représentent bien plus qu'une simple présence sur site. Ils incarnent la première ligne de protection de votre entreprise tout en contribuant à l'accueil et au confort de vos visiteurs.",
        "Formés aux meilleures pratiques du secteur, nos collaborateurs assurent la surveillance, la prévention et la gestion des situations sensibles avec discrétion, professionnalisme et efficacité.",
      ],
      highlights: [
        "Présentation irréprochable",
        "Sens du service et de l'accueil",
        "Vigilance permanente",
        "Respect strict des procédures",
        "Intervention rapide et maîtrisée",
      ],
      extra: { label: "Avec Eden BACO", text: "Vous bénéficiez d'une sécurité visible, rassurante et performante." },
    },
  },
  {
    id: 3,
    title: "Sécurité Cynophile",
    description:
      "Équipes maître-chien spécialisées dans la prévention, la dissuasion et le gardiennage des sites industriels, commerciaux et chantiers.",
    icon: Dog,
    href: "#services",
    division: "security",
    details: {
      tagline: "La puissance d'un dispositif de dissuasion renforcé",
      paragraphs: [
        "Pour les sites nécessitant un niveau de protection supérieur, Eden BACO met à disposition des équipes cynophiles composées d'agents spécialisés et de chiens rigoureusement entraînés.",
        "Cette solution constitue l'un des moyens les plus efficaces pour prévenir les intrusions, sécuriser les zones sensibles et renforcer la surveillance des grands espaces.",
      ],
      highlights: [
        "Forte capacité de dissuasion",
        "Détection rapide des comportements suspects",
        "Surveillance de grandes superficies",
        "Intervention efficace en milieu sensible",
        "Protection renforcée des sites isolés",
      ],
      extra: { label: "Notre promesse", text: "Une présence qui inspire le respect et décourage toute tentative malveillante." },
    },
  },
  {
    id: 4,
    title: "Intervention Rapide",
    description:
      "Réponse immédiate aux incidents et situations d'urgence grâce à des équipes réactives capables d'intervenir efficacement sur site.",
    icon: Siren,
    href: "#services",
    division: "security",
    details: {
      tagline: "Parce que chaque minute compte",
      paragraphs: [
        "Face à une situation d'urgence, la rapidité d'intervention fait toute la différence. Nos équipes mobiles sont opérationnelles pour répondre efficacement à tout incident pouvant menacer la sécurité de votre site.",
        "Grâce à une organisation réactive et des procédures éprouvées, nous garantissons une prise en charge rapide afin de limiter les risques et protéger vos intérêts.",
      ],
      highlights: [
        "Intrusions et tentatives de vol",
        "Déclenchements d'alarmes",
        "Actes de vandalisme",
        "Assistance et sécurisation d'urgence",
        "Renfort temporaire de dispositifs de sécurité",
      ],
      extra: { label: "Notre engagement", text: "Réactivité, maîtrise et efficacité." },
    },
  },
  {
    id: 5,
    title: "Sécurité Événementielle",
    description:
      "Sécurisation des événements, conférences, salons, manifestations et concerts avec un dispositif adapté à chaque événement.",
    icon: Ticket,
    href: "#services",
    division: "security",
    details: {
      tagline: "Assurez le succès de vos événements en toute sérénité",
      paragraphs: [
        "Un événement réussi repose également sur une organisation sécuritaire irréprochable. Eden BACO accompagne les entreprises, collectivités et organisateurs dans la mise en place de dispositifs de sécurité adaptés à chaque manifestation.",
        "De la gestion des accès à la surveillance du site, nos équipes veillent au bon déroulement de votre événement tout en garantissant la sécurité des participants.",
      ],
      highlights: [
        "Salons professionnels",
        "Conférences et séminaires",
        "Manifestations sportives",
        "Concerts et spectacles",
        "Événements privés et institutionnels",
      ],
      extra: { label: "Notre mission", text: "Protéger votre événement pour que vous puissiez vous concentrer sur son succès." },
    },
  },
  {
    id: 6,
    title: "Contrôle d'Accès & Secteur Public",
    description:
      "Gestion des accès, protection des bâtiments publics et sécurisation des infrastructures sensibles pour les collectivités et institutions.",
    icon: Fingerprint,
    href: "#services",
    division: "security",
    details: {
      tagline: "Maîtrisez 100% des flux. Sécurisez vos infrastructures critiques.",
      paragraphs: [
        "Chez Eden BACO, on ne pose pas juste des badges. On conçoit, installe et maintient des systèmes de contrôle d'accès sur-mesure pour les sites où la sécurité n'est pas négociable.",
        "Nos solutions déployées : contrôle d'accès physique (badges RFID/MIFARE, biométrie, codes PIN), gestion des flux (tourniquets, portiques motorisés, sas, barrières LAPI), et un logiciel de supervision centralisé avec historique, habilitations et alertes intrusion en temps réel.",
      ],
      highlights: [
        "Collectivités & institutions : mairies, préfectures, tribunaux, hôpitaux CHU",
        "Éducation & recherche : universités, écoles, laboratoires",
        "Industrie & data : zones franches, data centers Tier 3, sites Seveso",
        "Agréé marchés publics — conforme RGPD, Loi 09-08 Maroc, ISO 27001/9001",
        "Intervention en moins de 4h sur Casablanca, Tadla-Azilal et Grand Atlas",
      ],
      extra: { label: "Le résultat pour vous", text: "Zéro intrusion non autorisée et traçabilité complète en cas d'audit." },
    },
  },
];

export const cleaningServices: Service[] = [
  {
    id: 7,
    title: "Nettoyage secteur tertiaire",
    description:
      "Bureaux propres, équipes sereines. Intervention en soirée ou week-end sans perturber votre activité.",
    icon: Building2,
    href: "#services",
    division: "cleaning",
    details: {
      tagline: "Espaces de bureaux impeccables, tous les jours",
      paragraphs: [
        "Open space, bureaux individuels, salles de réunion... On intervient en horaire décalé pour zéro gêne. Dépoussiérage, vitres, sanitaires, sols.",
        "Vos collaborateurs travaillent dans un cadre sain et valorisant pour vos clients.",
      ],
      highlights: [],
      extra: { label: "Eden Pro Net", text: "Produits éco-labellisés + check-list qualité validée par votre référent." },
    },
  },
  {
    id: 8,
    title: "Nettoyage industriel",
    description:
      "Ateliers et usines conformes aux exigences HSE avec dégraissage et nettoyage haute pression.",
    icon: Factory,
    href: "#services",
    division: "cleaning",
    details: {
      tagline: "Propreté industrielle aux normes HSE",
      paragraphs: [
        "Ateliers, entrepôts, zones de production. Nettoyage haute pression, dégraissage machines, évacuation des déchets industriels.",
        "On respecte vos protocoles de sécurité et vos arrêts techniques.",
      ],
      highlights: [],
      extra: { label: "Eden Pro Net", text: "Agents formés aux risques chimiques + EPI complets." },
    },
  },
  {
    id: 9,
    title: "Collectivités & Écoles",
    description:
      "Désinfection et entretien des établissements scolaires et espaces publics.",
    icon: School,
    href: "#services",
    division: "cleaning",
    details: {
      tagline: "Des lieux sains pour apprendre et grandir",
      paragraphs: [
        "Écoles, crèches, mairies, centres sportifs. Désinfection renforcée, nettoyage des classes, cantines et sanitaires.",
        "Produits sans danger pour les enfants, passage quotidien ou hebdomadaire selon vos besoins.",
      ],
      highlights: [],
      extra: { label: "Eden Pro Net", text: "Agréé marchés publics. Plannings adaptés aux vacances scolaires." },
    },
  },
  {
    id: 10,
    title: "Surfaces commerciales",
    description:
      "Magasins, vitrines et sols entretenus avant chaque ouverture.",
    icon: Store,
    href: "#services",
    division: "cleaning",
    details: {
      tagline: "Faites briller votre point de vente",
      paragraphs: [
        "Magasins, showrooms, galeries marchandes. Mise en valeur des vitrines, sols miroir, nettoyage après fermeture.",
        "On attire vos clients dès l'ouverture.",
      ],
      highlights: [],
      extra: { label: "Eden Pro Net", text: "Intervention de nuit 7j/7 + remise en état express avant ouverture." },
    },
  },
  {
    id: 11,
    title: "Dératisation",
    description:
      "Élimination durable des rats, souris, cafards avec protocole certifié ONSSA.",
    icon: Bug,
    href: "#services",
    division: "cleaning",
    details: {
      tagline: "Éradiquez les nuisibles, durablement",
      paragraphs: [
        "Rats, souris, cafards, insectes. Diagnostic gratuit, plan d'action 3D certifié, appâts sécurisés et suivi mensuel.",
        "Conformité ONSSA pour les sites agroalimentaires.",
      ],
      highlights: [],
      extra: { label: "Eden Pro Net", text: "Intervention discrète + attestation de traitement pour vos audits." },
    },
  },
  {
    id: 12,
    title: "Entretien d'immeubles",
    description:
      "Hall, escaliers, parkings, ascenseurs avec un référent dédié.",
    icon: Wrench,
    href: "#services",
    division: "cleaning",
    details: {
      tagline: "La propreté de vos parties communes 365j/an",
      paragraphs: [
        "Syndics, résidences, immeubles de bureaux. Hall, escaliers, ascenseurs, parkings souterrains.",
        "Nettoyage quotidien, hebdomadaire ou ponctuel selon votre budget.",
      ],
      highlights: [],
      extra: { label: "Eden Pro Net", text: "1 chef d'équipe dédié par immeuble + application de suivi photo." },
    },
  },
];