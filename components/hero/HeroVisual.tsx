import { divisions } from "@/data/divisions";
import HeroDivisionPanel from "./HeroDivisionPanel";
import { ServiceType } from "@/data/services";

interface HeroVisualProps {
  type: "security" | "cleaning";
  onSelect?: (type: ServiceType) => void;
}

export default function HeroVisual({ type, onSelect }: HeroVisualProps) {
  const division = divisions.find((d) => d.id === type);

  if (!division) return null;

  return <HeroDivisionPanel division={division} onSelect={onSelect} />;
}
