"use client";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

const equipments = [
  {
    name: "Torche",
    image: "/images/equipements/torche.png",
    angle: 0,
  },
  {
    name: "Jumelles",
    image: "/images/equipements/jumelles.png",
    angle: 45,
  },
  {
    name: "Sifflet",
    image: "/images/equipements/sifflet.png",
    angle: 90,
  },
  {
    name: "Talkies-Walkies",
    image: "/images/equipements/talky.png",
    angle: 135,
  },
  {
    name: "Abri",
    image: "/images/equipements/abri.png",
    angle: 180,
  },
  {
    name: "Badge",
    image: "/images/equipements/badge.png",
    angle: 225,
  },
  {
    name: "Détecteur",
    image: "/images/equipements/detecteur.png",
    angle: 270,
  },
  {
    name: "Costume",
    image: "/images/equipements/costume.png",
    angle: 315,
  },
];

const RADIUS = 240;

const features = [
  "Matériel de surveillance professionnel",
  "Contrôle d'accès et identification",
  "Communication instantanée sur le terrain",
  "Équipements adaptés à chaque mission",
];

// Entrance variants for each orbiting icon — staggered pop-in with a slight spin
const iconVariants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -90 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.45 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Equipements() {
  return (
    <section id="equipements" className="relative py-24 overflow-hidden bg-[#F0F6FC]">
      <Container>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[500px_1fr]
            gap-14
            xl:gap-20
            items-center
          "
        >
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center xl:text-left"
          >
            <p
              className="
                flex
                items-center
                justify-center
                xl:justify-start
                gap-3
                uppercase
                tracking-[4px]
                text-xs
                font-semibold
                text-[#C8102E]
                mb-5
              "
            >
              <motion.span
                className="h-px bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]"
                initial={{ width: 0 }}
                whileInView={{ width: 28 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              Nos équipements
            </p>

            <h2
              className="
                font-bebas
                text-5xl
                md:text-6xl
                xl:text-7xl
                leading-none
                tracking-wide
                bg-gradient-to-r
                from-[#023E8A]
                to-[#0EA5E9]
                bg-clip-text
                text-transparent
              "
            >
              Équipés
              <br />
              pour protéger
            </h2>

            <p className="max-w-md mx-auto mt-6 leading-8 text-black/60 xl:mx-0">
              Nous mettons à la disposition de nos agents des équipements
              professionnels pour assurer une surveillance efficace, une
              communication rapide et une protection optimale sur chaque
              mission.
            </p>

            <motion.div
              className="flex flex-col items-center mt-10 space-y-4 xl:items-start"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {features.map((text) => (
                <motion.div
                  key={text}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="flex items-center gap-3 text-sm text-black/70"
                >
                  <span className="relative flex w-2 h-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#C8102E]/50 animate-glow-pulse" />
                    <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#C8102E]" />
                  </span>
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ORBIT — visible from md upward, scaled per breakpoint, full size only at xl+ */}

          <div
            className="
              relative
              hidden
              md:flex
              items-center
              justify-center

              h-[340px]
              lg:h-[420px]
              xl:h-[560px]
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="
                relative
                flex
                items-center
                justify-center

                scale-[0.5]
                lg:scale-[0.68]
                xl:scale-100

                transition-transform
                duration-300
              "
            >
              {/* GLOW — fades and blooms in first */}

              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[380px] h-[380px] rounded-full bg-[#C8102E]/10 blur-[90px]"
              />

              {/* ORBIT CIRCLE — draws in with a soft rotate */}

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[340px] h-[340px] rounded-full border border-[#C8102E]/10"
              />

              {/* ROTATION */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 60,
                  ease: "linear",
                }}
                className="absolute w-[640px] h-[640px]"
              >
                {equipments.map((item, index) => {
                  const x = Math.cos((item.angle * Math.PI) / 180) * RADIUS;
                  const y = Math.sin((item.angle * Math.PI) / 180) * RADIUS;

                  return (
                    <motion.div
                      key={item.name}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 55px)`,
                        top: `calc(50% + ${y}px - 55px)`,
                      }}
                      custom={index}
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 60,
                          ease: "linear",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={160}
                          height={160}
                          className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,.08)]"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* SHIELD — pops in last with a slight bounce/overshoot */}

              <motion.div
                initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-20"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  className="relative z-20 flex items-center justify-center"
                >
                  {/* Red outer glow */}
                  <div className="absolute inset-0 rounded-full scale-125 bg-[#0EA5E9]/75 blur-[50px] z-0 opacity-30" />

                  {/* White inner glow */}
                  <div className="absolute w-24 h-24 rounded-full bg-white/80 blur-[35px] z-10" />

                  <Image
                    src="/images/logo/edenBacoShield.png"
                    alt="Eden Baco"
                    width={350}
                    height={350}
                    priority
                    className="relative z-20 w-[350px] h-auto opacity-75 mt-5"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* MOBILE — real small screens only, where even a scaled orbit is too tight */}

        <motion.div
          className="grid grid-cols-2 gap-6 mt-16 sm:grid-cols-3 md:hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {equipments.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.92 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className=" bg-[#e2effd] rounded-3xl p-5 border border-black/10"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}