"use client";
import Container from "@/components/ui/Container";
import DivisionCard from "./DivisionCard";
import { divisions } from "@/data/divisions";
import type { ServiceType } from "@/data/services";

interface Props {
  onSelect?: (tab: ServiceType) => void;
}

export default function Divisions({ onSelect }: Props) {
  const handleSelect = (tab: ServiceType) => {
    onSelect?.(tab);

    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section id="divisions" className="py-28 bg-[#F4F1E8]">
      <Container>
        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          md:gap-8
          "
        >
          {divisions.map((division) => (
            <DivisionCard
              key={division.id}
              division={division}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}