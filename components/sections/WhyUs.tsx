// import Container from "@/components/ui/Container";
// import SectionHeader from "@/components/ui/SectionHeader";
// import WhyPoint from "@/components/cards/WhyPoint";

// import {whyUs} from "@/data/why-us";

// export default function WhyUs() {
//   return (
//     <section id="pourquoi" className="py-24 bg-[#F4F1E8]">
//       <Container>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}

//           <div>

//             <SectionHeader
//               eyebrow="Pourquoi nous choisir"
//               title="La sécurité est notre seule priorité"
//               description="Depuis plus de 12 ans, GRS Maroc protège les entreprises, institutions et particuliers à travers tout le Royaume."
//             />

//             <div className="mt-10 space-y-7">

//               {whyUs.map((item) => (
//                 <WhyPoint
//                   key={item.title}
//                   title={item.title}
//                   text={item.description}
//                   icon={item.icon}
//                 />
//               ))}

//             </div>

//           </div>

//           {/* RIGHT CARD */}

//           <div className="hidden lg:block relative h-[480px]">

//             <div className="absolute top-0 left-0 right-[60px] bottom-[60px] bg-[#1E1E1C] p-9 flex flex-col justify-end border border-black/10 overflow-hidden">

//               <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E]" />

//               <p className="uppercase tracking-[3px] text-xs font-semibold text-[#C8102E] mb-2">
//                 Notre engagement
//               </p>

//               <h3 className="font-['Bebas_Neue'] text-5xl leading-tight text-[#F4F1E8]">
//                 Votre sécurité.
//                 <br />
//                 Notre réputation.
//               </h3>

//             </div>

//             <div className="absolute right-0 bottom-0 w-[200px] h-[160px] bg-[#C8102E] flex flex-col items-center justify-center text-center">

//               <div className="font-['Bebas_Neue'] text-6xl text-white">
//                 12+
//               </div>

//               <p className="text-xs uppercase tracking-[2px] text-white/80">
//                 Ans de confiance
//               </p>

//             </div>

//           </div>

//         </div>

//       </Container>
//     </section>
//   );
// }

"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import WhyPoint from "@/components/cards/WhyPoint";

import { whyUs } from "@/data/why-us";

import { motion, Variants } from "framer-motion";

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

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyUs() {
  return (
    <section id="pourquoi" className="py-24 bg-[#F4F1E8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}

          <div>
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionHeader
                eyebrow="Pourquoi nous choisir"
                title="La sécurité est notre seule priorité"
                description="Depuis plus de 12 ans, GRS Maroc protège les entreprises, institutions et particuliers à travers tout le Royaume."
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
                  className="border-b border-black/10 last:border-b-0 pb-3 pt-7"
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

          {/* RIGHT CARD */}

          <motion.div
            className="hidden lg:block relative h-[480px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="absolute top-0 left-0 right-[60px] bottom-[60px] bg-[#1E1E1C] p-9 flex flex-col justify-end border border-black/10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E]" />

              <p className="uppercase tracking-[3px] text-xs font-semibold text-[#C8102E] mb-2">
                Notre engagement
              </p>

              <h3 className="font-['Bebas_Neue'] text-5xl leading-tight text-[#F4F1E8]">
                Votre sécurité.
                <br />
                Notre réputation.
              </h3>
            </div>

            <motion.div
              className="absolute right-0 bottom-0 w-[200px] h-[160px] bg-[#C8102E] flex flex-col items-center justify-center text-center"
              variants={badgeVariants}
            >
              <div className="font-['Bebas_Neue'] text-6xl text-white">12+</div>

              <p className="text-xs uppercase tracking-[2px] text-white/80">
                Ans de confiance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
