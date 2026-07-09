"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import WhyPoint from "@/components/cards/WhyPoint";
import { whyUs } from "@/data/why-us";
import { motion, AnimatePresence, Variants } from "framer-motion";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── SLIDES ──────────────────────────────────────────────────────

type Slide =
  | {
      type: "text";
      eyebrow: string;
      heading: React.ReactNode;
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
    };

const slides: Slide[] = [
  {
    type: "text",
    eyebrow: "Sécurité Privée",
    heading: (
      <>
        Votre sécurité.
        <br />
        Notre expertise.
      </>
    ),
    text: "Des agents qualifiés, des rondes rigoureuses et une réactivité de tous les instants pour protéger vos sites, vos équipes et vos biens.",
  },
  {
    type: "image",
    src: "/images/why-us/security-1.jpeg",
    alt: "Agent de sécurité EDEN BACO en poste",
    caption: "Gardiennage & surveillance",
  },
  {
    type: "image",
    src: "/images/why-us/security-2.jpeg",
    alt: "Équipe de sécurité EDEN BACO en intervention",
    caption: "Intervention & protection rapprochée",
  },
  {
    type: "image",
    src: "/images/why-us/security-3.jpeg",
    alt: "Agent de sécurité EDEN BACO en ronde",
    caption: "Rondes de sécurité 24h/24",
  },
  {
    type: "image",
    src: "/images/why-us/security-4.jpeg",
    alt: "Contrôle d'accès EDEN BACO",
    caption: "Contrôle d'accès & filtrage",
  },
  {
    type: "image",
    src: "/images/why-us/security-5.jpeg",
    alt: "Sécurité événementielle EDEN BACO",
    caption: "Sécurité événementielle",
  },
  {
    type: "image",
    src: "/images/why-us/security-6.jpeg",
    alt: "Équipe EDEN BACO sur le terrain",
    caption: "Équipe professionnelle sur le terrain",
  },
  {
    type: "text",
    eyebrow: "Nettoyage Professionnel",
    heading: (
      <>
        Des espaces impeccables.
        <br />
        Une exigence constante.
      </>
    ),
    text: "Entretien, désinfection et propreté irréprochable pour vos bureaux, commerces et infrastructures, avec les mêmes standards de rigueur.",
  },
  {
    type: "image",
    src: "/images/why-us/cleaning-1.jpeg",
    alt: "Équipe de nettoyage EDEN BACO au travail",
    caption: "Nettoyage & entretien professionnel",
  },
  {
    type: "image",
    src: "/images/why-us/cleaning-2.jpeg",
    alt: "Espace nettoyé par EDEN BACO",
    caption: "Désinfection & hygiène des espaces",
  },
  {
    type: "image",
    src: "/images/why-us/cleaning-3.jpeg",
    alt: "Nettoyage de bureaux EDEN BACO",
    caption: "Entretien des bureaux & commerces",
  },
  {
    type: "image",
    src: "/images/why-us/cleaning-4.jpeg",
    alt: "Nettoyage industriel EDEN BACO",
    caption: "Nettoyage industriel spécialisé",
  },
  {
    type: "image",
    src: "/images/why-us/cleaning-5.jpeg",
    alt: "Espace nettoyé au quotidien par EDEN BACO",
    caption: "Propreté irréprochable au quotidien",
  },
];

const AUTOPLAY_MS = 4500;

function WhySlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <div
      className="
        absolute
        top-0
        left-0
        right-[60px]
        bottom-[60px]
        bg-[#1E1E1C]
        rounded-2xl
        border
        border-white/5
        overflow-hidden
        shadow-2xl
        shadow-black/30
      "
    >
      {/* top accent bar stays fixed above everything */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]" />

      {/* ambient drifting glow, always present under the slides */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -top-16
          -right-16
          h-56
          w-56
          rounded-full
          bg-[radial-gradient(circle,rgba(14,165,233,0.18),transparent_70%)]
          blur-2xl
          animate-aurora
          z-0
        "
      />

      <AnimatePresence mode="wait">
        {slide.type === "text" ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-10 flex flex-col justify-center p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#0EA5E9] mb-2">
              {slide.eyebrow}
            </p>

            <h3 className="font-['Bebas_Neue'] text-5xl leading-tight text-[#F0F6FC]">
              {slide.heading}
            </h3>

            <p className="mt-6 text-[#F0F6FC]/70 leading-7">{slide.text}</p>
          </motion.div>
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-10"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority={index === 0}
            />

            {/* readability gradient + caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <p className="absolute bottom-6 left-6 right-6 text-xs font-semibold uppercase tracking-[2px] text-white/90">
              {slide.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* progress dots — moved to TOP so the red 24/7 badge never covers them */}
      <div className="absolute top-5 right-6 z-20 flex gap-1.5">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500

              ${
                i === index
                  ? "w-6 bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]"
                  : "w-1.5 bg-white/25"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section
      id="pourquoi"
      className="relative py-24 bg-[#F0F6FC] overflow-hidden"
    >
      {/* AURORA GLOW — keeps the section consistent with Hero/Services */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          top-[-10%]
          left-[-10%]
          h-[440px]
          w-[440px]
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
          right-[-5%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[radial-gradient(circle,rgba(200,16,46,0.08),transparent_70%)]
          blur-3xl
          animate-aurora
        "
        style={{ animationDelay: "5s" }}
      />

      <Container>
        <div className="relative z-10 grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div>
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionHeader
                eyebrow="Pourquoi choisir EDEN BACO"
                title="Une seule exigence de qualité, deux domaines d'expertise"
                description="Sécurité privée et nettoyage professionnel réunis sous une même vision : offrir des prestations fiables, réactives et adaptées aux besoins de chaque client."
              />
            </motion.div>

            <motion.div
              className="mt-10"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {whyUs.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="
                    group
                    border-b
                    border-[#0EA5E9]/10
                    last:border-b-0
                    pb-3
                    pt-7
                    transition-colors
                    duration-300
                    hover:border-[#0EA5E9]/30
                  "
                >
                  <WhyPoint
                    title={item.title}
                    text={item.description}
                    icon={item.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CARD — same box, size, position — now an auto slideshow */}

          <motion.div
            className="hidden lg:block relative h-[480px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <WhySlideshow />

            <motion.div
              className="
                absolute
                right-0
                bottom-0
                w-[220px]
                h-[160px]
                rounded-2xl
                bg-gradient-to-br
                from-[#C8102E]
                to-[#a90d26]
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-xl
                shadow-[#C8102E]/30
                z-20
              "
              variants={badgeVariants}
            >
              <div className="font-['Bebas_Neue'] text-5xl text-white">
                24/7
              </div>

              <p className="text-xs uppercase tracking-[2px] text-white/80 max-w-[140px]">
                Disponibilité & Réactivité
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
