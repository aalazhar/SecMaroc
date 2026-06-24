"use client";

import Button from "@/components/ui/Button";

import { PhoneIcon } from "@/components/icons";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },

  show: {
    opacity: 0.1,
    scale: 1,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-dark text-center overflow-hidden"
    >
      {/* BACKGROUND */}

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)] bg-[size:48px_48px]"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />

      {/* CONTENT */}

      <motion.div
        className="relative max-w-3xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-bebas text-5xl md:text-7xl text-navy leading-none tracking-wide"
          variants={itemVariants}
        >
          Prêt à sécuriser
          <br />
          votre activité ?
        </motion.h2>

        <motion.p
          className="mt-6 text-white/60 text-base leading-8 max-w-xl mx-auto"
          variants={itemVariants}
        >
          Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos
          besoins en sécurité. Nos experts vous répondent sous 24h.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button>Demander un devis gratuit</Button>

          <Button variant="outline">Nous appeler</Button>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center items-center gap-3 text-white/60 text-sm"
          variants={itemVariants}
        >
          <PhoneIcon className="w-5 h-5 text-red" />

          <span>
            Disponible 24h/24 —
            <strong className="text-white text-lg ml-2">
              +212 5 22 41 68 68
            </strong>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
