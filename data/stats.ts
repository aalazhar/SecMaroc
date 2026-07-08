export interface Stat {
  id: number;
  value: number | string;
  label: string;
  suffix?: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    value: 12,
    suffix: "+",
    label: "Années d'expérience",
  },
  {
    id: 2,
    value: 500,
    suffix: "+",
    label: "Clients protégés",
  },
  {
    id: 3,
    value: 4,
    label: "Villes couvertes",
  },
  {
    id: 4,
    value: "24/7",
    label: "Disponibilité",
  },
];