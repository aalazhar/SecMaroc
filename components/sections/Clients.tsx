"use client";

import Container from "@/components/ui/Container";

import { motion, Variants } from "framer-motion";

const clients = [
  "La Société VFS Global",
  "Laboratoire Central d'Analyses Médicales",
  "Le Centre de Radiologie Zerktouni 59",
  "Amical Faraj",
  "Société Dounia Z",
  "Société Miclaine ( Groupe Richbond )",
  "Société Diouane 26 ( Groupe Richbond )"
];

const headerVariants: Variants = {
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-navy-2 overflow-hidden">
      <Container>
        {/* HEADER */}

        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="flex items-center justify-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-red mb-4">
            <span className="w-7 h-px bg-red" />
            Ils nous font confiance
            <span className="w-7 h-px bg-red" />
          </p>

          <h2 className="font-bebas text-5xl md:text-6xl leading-none tracking-wide text-[#023e8a]">
            Des clients qui comptent sur nous
          </h2>
        </motion.div>

        {/* CLIENTS LOOP */}

        <div className="mt-14 border-y border-black/10 py-10 overflow-hidden">
          <div className="flex gap-20 w-max animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="font-bebas text-2xl tracking-[3px] text-black/25 hover:text-black/70 transition"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
