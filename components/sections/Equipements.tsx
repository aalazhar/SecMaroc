// "use client";

// import Image from "next/image";
// import Container from "@/components/ui/Container";

// import { motion } from "framer-motion";
// import SectionHeader from "../ui/SectionHeader";

// const equipments = [
//   {
//     name: "Torche",
//     image: "/images/equipements/torche.png",
//     angle: 0,
//   },
//   {
//     name: "Jumelles",
//     image: "/images/equipements/jumelles.png",
//     angle: 45,
//   },
//   {
//     name: "Sifflet",
//     image: "/images/equipements/sifflet.png",
//     angle: 90,
//   },
//   {
//     name: "Talkies-Walkies",
//     image: "/images/equipements/talky.png",
//     angle: 135,
//   },
//   {
//     name: "Abri",
//     image: "/images/equipements/abri.png",
//     angle: 180,
//   },
//   {
//     name: "Badge",
//     image: "/images/equipements/badge.png",
//     angle: 225,
//   },
//   {
//     name: "Détecteur",
//     image: "/images/equipements/detecteur.png",
//     angle: 270,
//   },
//   {
//     name: "Costume",
//     image: "/images/equipements/costume.png",
//     angle: 315,
//   },
// ];

// const RADIUS = 250;

// export default function Equipements() {
//   return (
//     <section className="relative py-32 overflow-hidden bg-[#F4F1E8]">
//       <Container>
//         {/* HEADER */}

//         <div className="max-w-3xl mx-auto text-center">
//           <p className="flex items-center justify-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-red mb-4">
//             <span className="w-7 h-px bg-red" />
//             Nos équipements
//             <span className="w-7 h-px bg-red" />
//           </p>

//           <h2 className="font-bebas text-5xl md:text-6xl leading-none tracking-wide text-dark">
//             Équipés pour protéger
//           </h2>

//           <p className="mt-6 text-black/60 leading-8 max-w-2xl mx-auto">
//             Nous mettons à la disposition de nos agents des équipements
//             professionnels pour assurer votre sécurité 24h/24 et 7j/7.
//           </p>
//         </div>

//         {/* ORBIT */}

//         <div className="relative h-[650px] mt-16 hidden lg:flex items-center justify-center">
//           {/* RED GLOW */}

//           <div className="absolute w-[520px] h-[520px] rounded-full bg-[#C8102E]/10 blur-[100px]" />

//           {/* CIRCLES */}

//           <div className="absolute w-[560px] h-[560px] rounded-full border border-[#C8102E]/20 hidden" />

//           <div className="absolute w-[430px] h-[430px] rounded-full border border-[#C8102E]/10 hidden" />

//           <div className="absolute w-[340px] h-[340px] rounded-full border border-[#C8102E]/10" />

//           {/* ROTATION */}

//           <motion.div
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 60,
//               ease: "linear",
//             }}
//             className="absolute w-[720px] h-[720px]"
//           >
//             {equipments.map((item) => {
//               const x = Math.cos((item.angle * Math.PI) / 180) * RADIUS;

//               const y = Math.sin((item.angle * Math.PI) / 180) * RADIUS;

//               return (
//                 <div
//                   key={item.name}
//                   className="absolute"
//                   style={{
//                     left: `calc(50% + ${x}px - 85px)`,
//                     top: `calc(50% + ${y}px - 85px)`,
//                   }}
//                 >
//                   <motion.div
//                     animate={{
//                       rotate: -360,
//                     }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 60,
//                       ease: "linear",
//                     }}
//                     className="w-[140px]"
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={200}
//                       height={200}
//                       loading="eager"
//                       className="w-[200px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,.08)] transition-transform duration-500 hover:scale-105"
//                     />
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </motion.div>

//           {/* SHIELD */}

//           <motion.div
//             animate={{
//               y: [0, -14, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 5,
//               ease: "easeInOut",
//             }}
//             className="relative z-20"
//           >
//             <div className="absolute inset-0 bg-[#C8102E]/20 blur-[60px] rounded-full scale-125" />

//             <Image
//               src="/images/logo/officialShield.png"
//               alt="Eden Baco"
//               width={260}
//               height={260}
//               className="w-[220px] h-auto relative drop-shadow-[0_0_60px_rgba(200,16,46,.45)]"
//               priority
//             />
//           </motion.div>
//         </div>

//         {/* MOBILE VERSION */}

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 lg:hidden">
//           {equipments.map((item) => (
//             <div
//               key={item.name}
//               className="bg-white rounded-3xl p-5 border border-black/10"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={80}
//                 height={80}
//                 className="mx-auto"
//               />

//               <p className="text-center mt-4 text-xs uppercase tracking-[2px]">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

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

export default function Equipements() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#F4F1E8]">
      <Container>
        <div className="grid lg:grid-cols-[500px_1fr] gap-10 lg:gap-20 items-center">
          {/* LEFT CONTENT */}

          <div>
            <p className="flex items-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-[#C8102E] mb-5">
              <span className="w-7 h-px bg-[#C8102E]" />
              Nos équipements
            </p>

            <h2 className="font-bebas text-5xl md:text-6xl xl:text-7xl leading-none tracking-wide text-[#1E1E1C]">
              Équipés
              <br />
              pour protéger
            </h2>

            <p className="mt-6 text-black/60 leading-8 max-w-md">
              Nous mettons à la disposition de nos agents des équipements
              professionnels pour assurer une surveillance efficace, une
              communication rapide et une protection optimale sur chaque
              mission.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-black/70">
                <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                Matériel de surveillance professionnel
              </div>

              <div className="flex items-center gap-3 text-sm text-black/70">
                <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                Contrôle d'accès et identification
              </div>

              <div className="flex items-center gap-3 text-sm text-black/70">
                <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                Communication instantanée sur le terrain
              </div>

              <div className="flex items-center gap-3 text-sm text-black/70">
                <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                Équipements adaptés à chaque mission
              </div>
            </div>
          </div>

          {/* ORBIT */}

          <div className="relative h-[560px] hidden lg:flex items-center justify-center">
            {/* GLOW */}

            <div className="absolute w-[380px] h-[380px] rounded-full bg-[#C8102E]/10 blur-[90px]" />

            {/* ORBIT CIRCLE */}

            {/* <div className="absolute w-[420px] h-[420px] rounded-full border border-[#C8102E]/15" /> */}
            <div className="absolute w-[560px] h-[560px] rounded-full border border-[#C8102E]/20 hidden" />

            <div className="absolute w-[430px] h-[430px] rounded-full border border-[#C8102E]/10 hidden" />

            <div className="absolute w-[340px] h-[340px] rounded-full border border-[#C8102E]/10" />

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
              {equipments.map((item) => {
                const x = Math.cos((item.angle * Math.PI) / 180) * RADIUS;

                const y = Math.sin((item.angle * Math.PI) / 180) * RADIUS;

                return (
                  <div
                    key={item.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px - 55px)`,
                      top: `calc(50% + ${y}px - 55px)`,
                    }}
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
                        className="w-[160px] h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,.08)]"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* SHIELD */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative z-20"
            >
              <div className="absolute inset-0 bg-[#C8102E]/25 blur-[50px] rounded-full scale-125" />

              <Image
                src="/images/logo/shieldOfficial.png"
                alt="Eden Baco"
                width={190}
                height={190}
                priority
                className="relative w-[190px] h-auto drop-shadow-[0_0_40px_rgba(200,16,46,.35)]"
              />
            </motion.div>
          </div>
        </div>

        {/* MOBILE */}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 lg:hidden">
          {equipments.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-5 border border-black/10"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
