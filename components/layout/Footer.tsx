"use client";
import Logo from "@/components/ui/Logo";
import { PhoneIcon, MailIcon, LocationIcon } from "@/components/icons";
import { motion, Variants } from "framer-motion";
import { ServiceType } from "@/data/services";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";

interface Props {
  onSelect: (type: ServiceType) => void;
}

const services: { label: string; division: ServiceType }[] = [
  { label: "Gardiennage & Surveillance 24/7", division: "security" },
  { label: "Agents de Sécurité", division: "security" },
  { label: "Sécurité Cynophile", division: "security" },
  { label: "Intervention Rapide", division: "security" },
  { label: "Sécurité Événementielle", division: "security" },
  { label: "Contrôle d'Accès & Secteur Public", division: "security" },
  { label: "Nettoyage secteur tertiaire", division: "cleaning" },
  { label: "Nettoyage industriel", division: "cleaning" },
  { label: "Collectivités & Écoles", division: "cleaning" },
  { label: "Surfaces commerciales", division: "cleaning" },
  { label: "Dératisation", division: "cleaning" },
  { label: "Entretien d'immeubles", division: "cleaning" },
];

const cities = [
  {
    name: "Casablanca",
    mapUrl: "https://www.google.com/maps?q=33.679694,-7.400944",
  },
  {
    name: "Mohammedia",
    mapUrl: "https://www.google.com/maps?q=33.679694,-7.400944",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer({ onSelect }: Props) {
  const handleSelect = (type: ServiceType) => {
    onSelect(type);

    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 120);
  };

  return (
    <footer className="relative bg-[#F0F6FC] py-16 px-6 border-t border-[#0EA5E9]/10 overflow-hidden">
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent" />

      {/* aurora glows */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          top-[-30%]
          left-[10%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[radial-gradient(circle,rgba(14,165,233,0.10),transparent_70%)]
          blur-3xl
          animate-aurora
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-[-30%]
          right-[5%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[radial-gradient(circle,rgba(200,16,46,0.06),transparent_70%)]
          blur-3xl
          animate-aurora
        "
        style={{ animationDelay: "6s" }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={columnVariants}>
          <Link
            href={"#hero"}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero".slice(1));
            }}
            className="w-fit transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <Logo src="/images/logo/EdenLogoOfficial.png" />
          </Link>

          <div className="mt-6 space-y-3 text-sm text-[#1E1E1C]/50">
            <div className="group flex gap-3 items-center transition-colors duration-300 hover:text-[#1E1E1C]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8102E]/10 transition-colors duration-300 group-hover:bg-[#C8102E]/15">
                <PhoneIcon className="w-4 h-4 text-[#C8102E]" />
              </span>
              +212662363866
            </div>

            <div className="group flex gap-3 items-center transition-colors duration-300 hover:text-[#1E1E1C]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8102E]/10 transition-colors duration-300 group-hover:bg-[#C8102E]/15">
                <MailIcon className="w-4 h-4 text-[#C8102E]" />
              </span>
              eden.baco01@gmail.com
            </div>

            <div className="group flex gap-3 items-start transition-colors duration-300 hover:text-[#1E1E1C]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8102E]/10 transition-colors duration-300 group-hover:bg-[#C8102E]/15">
                <LocationIcon className="w-4 h-4 text-[#C8102E]" />
              </span>
              <span className="pt-1.5">
                HAY SALAM 1 GROUPE A, RUE 915
                <br />
                AHL LOUGHLAM 20000, CASABLANCA
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div variants={columnVariants}>
          <h4 className="font-bebas text-xl tracking-wide text-[#1E1E1C] mb-5">
            Services
          </h4>

          <motion.ul
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.li key={service.label} variants={linkVariants}>
                <button
                  type="button"
                  onClick={() => handleSelect(service.division)}
                  className="group relative w-fit text-left text-sm text-[#1E1E1C]/40 hover:text-[#0EA5E9] transition-colors duration-300 cursor-pointer"
                >
                  {service.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full" />
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div variants={columnVariants}>
          <h4 className="font-bebas text-xl tracking-wide text-[#1E1E1C] mb-5">
            Agences
          </h4>

          <ul className="space-y-3">
            {cities.map((city) => (
              <li key={city.name}>
                <a
                  href={city.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-fit block text-sm text-[#1E1E1C]/40 hover:text-[#0EA5E9] transition-colors duration-300"
                >
                  {city.name}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* <motion.div variants={columnVariants}>
          <h4 className="font-bebas text-xl tracking-wide text-[#1E1E1C] mb-5">
            Entreprise
          </h4>

          <ul className="space-y-3">
            {[
              { label: "Qui sommes-nous", href: "#hero" },
              { label: "Nos équipements", href: "#equipements" },
              { label: "Nos clients", href: "#clients" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group relative w-fit block text-sm text-[#1E1E1C]/40 hover:text-[#0EA5E9] transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div> */}
        <motion.div variants={columnVariants}>
          <h4 className="font-bebas text-xl tracking-wide text-[#1E1E1C] mb-5">
            Entreprise
          </h4>

          <ul className="space-y-3">
            {[
              { label: "Qui sommes-nous", href: "#hero" },
              { label: "Pourquoi nous choisir", href: "#pourquoi" },
              { label: "Nos équipements", href: "#equipements" },
              { label: "Nos clients", href: "#clients" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.slice(1));
                  }}
                  className="group relative w-fit block text-sm text-[#1E1E1C]/40 hover:text-[#0EA5E9] transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto mt-14 pt-8 border-t border-[#0EA5E9]/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-[#1E1E1C]/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>© Eden Baco 2026 — Tous droits réservés.</p>
        <p> · Casablanca · </p>
      </motion.div>
    </footer>
  );
}
