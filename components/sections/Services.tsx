"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/cards/ServiceCard";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="
py-24

bg-[#EDE9DF]

"
    >
      <Container>
        <SectionHeader
          eyebrow="Nos prestations"
          title="Des solutions de sécurité sur mesure"
          description="
Nous intervenons dans tous les domaines
de la sécurité privée avec des équipes
formées, certifiées et disponibles à tout moment.
"
        />

        <div
          className="
mt-16

grid

grid-cols-1

md:grid-cols-2

xl:grid-cols-3

gap-px

border

border-black/10

bg-black/10

"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              number={index + 1}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
