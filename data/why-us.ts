import React from "react";

import {
  CheckBadgeIcon,
  LightningIcon,
  LocationIcon,
  ClipboardIcon,
} from "@/components/icons";


export interface WhyUs {

  id: number;

  title: string;

  description: string;

  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

}


export const whyUs: WhyUs[] = [

  {
    id: 1,

    title: "Agents certifiés & formés",

    description:
      "Tous nos agents passent par une formation rigoureuse et sont certifiés par les autorités compétentes marocaines.",

    icon: CheckBadgeIcon
  },


  {
    id: 2,

    title: "Intervention rapide 24/7",

    description:
      "Notre centre opérationnel fonctionne en continu afin de garantir une réponse immédiate aux incidents.",

    icon: LightningIcon
  },


  {
    id: 3,

    title: "Présence nationale",

    description:
      "Présence à Casablanca, Marrakech, Rabat, Agadir et représentation internationale pour nos clients globaux.",

    icon: LocationIcon
  },


  {
    id: 4,

    title: "Solutions sur mesure",

    description:
      "Chaque client bénéficie d'une analyse des risques et d'une stratégie adaptée à ses besoins.",

    icon: ClipboardIcon
  }

];