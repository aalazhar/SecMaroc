"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

import ServiceTabs from "./ServiceTabs";
import ServiceCard from "./ServiceCard";

import { ServiceType, Service, services, cleaningServices } from "@/data/services";
import ServiceDetailModal from "./ServiceDetailModal";

interface Props {
  activeTab: ServiceType;
  setActiveTab: (tab: ServiceType) => void;
}

const headerVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const gridTransition = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, when: "beforeChildren", staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2 } },
};

const sectionContent = {
  security: {
    eyebrow: "Sécurité Privée",
    title: "Des solutions de sécurité adaptées à chaque besoin",
    description:
      "EDEN BACO met à votre disposition des agents qualifiés, des équipes réactives et des solutions de sécurité sur mesure pour protéger vos biens, vos collaborateurs et vos infrastructures.",
  },
  cleaning: {
    eyebrow: "Nettoyage Professionnel",
    title: "Des prestations de nettoyage adaptées à chaque environnement",
    description:
      "Nous accompagnons les entreprises, collectivités, commerces et industries avec des prestations de nettoyage, d'entretien et de désinfection répondant aux plus hauts standards de qualité.",
  },
};

export default function Services({ activeTab, setActiveTab }: Props) {

  const displayedServices = activeTab === "security" ? services : cleaningServices;
  const content = sectionContent[activeTab];
  
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-24 bg-[#E4EEF9] overflow-hidden">
      {/* AURORA GLOW — keeps section consistent with Hero's "alive" feel */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          top-0
          right-[-10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[radial-gradient(circle,rgba(14,165,233,0.14),transparent_70%)]
          blur-3xl
          animate-aurora
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-[-15%]
          left-[-10%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[radial-gradient(circle,rgba(20,184,166,0.12),transparent_70%)]
          blur-3xl
          animate-aurora
        "
        style={{ animationDelay: "4s" }}
      />

      <Container>
        <motion.div
          className="relative z-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </motion.div>

        <div className="relative z-10 mt-12">
          <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={gridTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
              relative
              z-10
              mt-16
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-px
              rounded-2xl
              overflow-hidden
              border
              border-[#0EA5E9]/15
              bg-[#0EA5E9]/10
              shadow-lg
              shadow-[#0EA5E9]/5
            "
          >
            {displayedServices.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants} className="h-full">
                <ServiceCard
                  number={index + 1}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  division={service.division}
                  onClick={() => setSelectedService(service)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}