"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/cards/ServiceCard";

import { services } from "@/data/services";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.96,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#EDE9DF]">
      <Container>
      <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            eyebrow="Nos prestations"
            title="Des solutions de sécurité sur mesure"
            description="Nous intervenons dans tous les domaines de la sécurité privée avec des équipes formées, certifiées et disponibles à tout moment."
          />
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px border border-black/10 bg-black/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="h-full"
            >
              <ServiceCard
                number={index + 1}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
