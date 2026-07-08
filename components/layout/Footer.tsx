// import Link from "next/link";

// import Logo from "@/components/ui/Logo";
// import Container from "@/components/ui/Container";

// import { PhoneIcon, MailIcon } from "@/components/icons";

// const services = [
//   "Solution de sécurité",
//   "Agents de sécurité",
//   "Sécurité rapprochée",
//   "Sécurité événementielle",
//   "Télésurveillance",
//   "Maître-chien",
// ];

// const agencies = [
//   "Casablanca",
//   "Marrakech",
//   "Rabat",
//   "Agadir",
//   "Canada (Laval)",
// ];

// const company = [
//   "Qui sommes-nous",
//   "Nos clients",
//   "Formations",
//   "Galerie",
//   "Actualités",
//   "Contact",
// ];

// export default function Footer() {
//   return (
//     <footer
//       className="
// bg-[#141412]
// border-t
// border-white/10
// "
//     >
//       <Container>
//         <div
//           className="
// py-16

// grid

// grid-cols-1

// md:grid-cols-2

// xl:grid-cols-4

// gap-12
// "
//         >
//           {/* BRAND */}

//           <div>
//             <div
//               className="
// mb-5
// "
//             >
//               <Logo />
//             </div>

//             <p
//               className="
// max-w-[260px]

// text-sm

// leading-7

// font-light

// text-white/40

// mb-6
// "
//             >
//               Votre spécialiste en sécurité privée, gardiennage et surveillance
//               au Maroc depuis plus de 12 ans.
//             </p>

//             <div
//               className="
// space-y-3
// "
//             >
//               <FooterContact icon={<PhoneIcon />} text="+212 5 22 41 68 68" />

//               <FooterContact icon={<MailIcon />} text="contact@grsmaroc.ma" />
//             </div>
//           </div>

//           {/* SERVICES */}

//           <FooterColumn title="Services" items={services} />

//           {/* AGENCIES */}

//           <FooterColumn title="Agences" items={agencies} />

//           {/* COMPANY */}

//           <FooterColumn title="Entreprise" items={company} />
//         </div>

//         {/* BOTTOM */}

//         <div
//           className="
// border-t

// border-white/10

// py-6

// flex

// flex-col

// md:flex-row

// justify-between

// gap-4
// "
//         >
//           <p
//             className="
// text-xs

// text-white/25
// "
//           >
//             © GRS Maroc 2025 — Tous droits réservés.
//             <span
//               className="
// text-[#C8102E]
// "
//             >
//               Société de sécurité agréée au Maroc
//             </span>
//           </p>

//           <p
//             className="
// text-xs

// text-white/25
// "
//           >
//             Casablanca · Marrakech · Rabat · Agadir · Canada
//           </p>
//         </div>
//       </Container>
//     </footer>
//   );
// }

// function FooterColumn({ title, items }: { title: string; items: string[] }) {
//   return (
//     <div>
//       <h4
//         className="
// font-['Bebas_Neue']

// text-xl

// tracking-[2px]

// text-[#F4F1E8]

// mb-5

// pb-3

// border-b

// border-white/10
// "
//       >
//         {title}
//       </h4>

//       <ul
//         className="
// space-y-3
// "
//       >
//         {items.map((item) => (
//           <li key={item}>
//             <Link
//               href="#"
//               className="
// group

// flex

// items-center

// gap-2

// text-sm

// font-light

// text-white/40

// hover:text-white

// transition

// "
//             >
//               <span
//                 className="
// w-1.5
// h-[1px]

// bg-[#C8102E]
// "
//               />

//               {item}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function FooterContact({
//   icon,
//   text,
// }: {
//   icon: React.ReactNode;
//   text: string;
// }) {
//   return (
//     <div
//       className="
// flex

// items-center

// gap-3

// text-sm

// text-white/40
// "
//     >
//       <span
//         className="
// w-4
// h-4

// text-[#C8102E]

// shrink-0
// "
//       >
//         {icon}
//       </span>

//       <span>{text}</span>
//     </div>
//   );
// }

// import Logo from "@/components/ui/Logo";

// import { PhoneIcon, MailIcon, LocationIcon } from "@/components/icons";

// const services = [
//   "Solution de sécurité",
//   "Agents de sécurité",
//   "Sécurité rapprochée",
//   "Sécurité événementielle",
//   "Télésurveillance",
//   "Maître-chien",
// ];

// const cities = ["Casablanca"];

// export default function Footer() {
//   return (
//     <footer className="bg-[#141412] py-16 px-6 border-t border-white/10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr]  gap-12 ">
//         <div>
//           <Logo src="/images/logo/EdenLogoFooter.png" />

//           {/* <p className="text-sm text-white/40 leading-7 max-w-xs">
//             Votre spécialiste en sécurité privée, gardiennage et surveillance.
//           </p> */}

//           <div className="mt-6 space-y-3 text-sm text-white/50">
//             <div className="flex gap-3 items-center">
//               <PhoneIcon className="w-4 h-4 text-red" />
//               +212 661 370 673 / +212 661 187 105
//             </div>

//             <div className="flex gap-3 items-center">
//               <MailIcon className="w-4 h-4 text-red" />
//               eden.baco01@gmail.com
//             </div>

//             <div className="flex gap-3 items-start">
//               <LocationIcon className="w-4 h-4 text-red mt-1 shrink-0" />
//               <span>
//                 HAY SALAM 1 GROUPE A, RUE 915
//                 <br />
//                 AHL LOUGHLAM 20000, CASABLANCA
//               </span>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h4 className="font-bebas text-xl text-white mb-5">Services</h4>

//           <ul className="space-y-3">
//             {services.map((item) => (
//               <li
//                 key={item}
//                 className="text-sm text-white/40 hover:text-white transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bebas text-xl text-white mb-5">Agences</h4>

//           <ul className="space-y-3">
//             {cities.map((city) => (
//               <li
//                 key={city}
//                 className="text-sm text-white/40 hover:text-white transition"
//               >
//                 {city}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bebas text-xl text-white mb-5">Entreprise</h4>

//           <ul className="space-y-3">
//             <li className="text-sm text-white/40">Qui sommes-nous</li>
//             <li className="text-sm text-white/40">Nos clients</li>
//             <li className="text-sm text-white/40">Galerie</li>
//             <li className="text-sm text-white/40">Contact</li>
//           </ul>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-white/30">
//         <p>© Eden Baco 2026 — Tous droits réservés.</p>

//         <p> · Casablanca · </p>
//       </div>
//     </footer>
//   );
// }

// import Logo from "@/components/ui/Logo";

// import { PhoneIcon, MailIcon, LocationIcon } from "@/components/icons";

// const services = [
//   "Solution de sécurité",
//   "Agents de sécurité",
//   "Sécurité rapprochée",
//   "Sécurité événementielle",
//   "Télésurveillance",
//   "Maître-chien",
// ];

// const cities = ["Casablanca"];

// export default function Footer() {
//   return (
//     <footer className="bg-[#F4F1E8] py-16 px-6 border-t border-[#1E1E1C]/10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12">
//         <div>
//           <Logo src="/images/logo/EdenLogo_Blue_full.png" />

//           <div className="mt-6 space-y-3 text-sm text-[#1E1E1C]/50">
//             <div className="flex gap-3 items-center">
//               <PhoneIcon className="w-4 h-4 text-red" />
//               +212 661 370 673 / +212 661 187 105
//             </div>

//             <div className="flex gap-3 items-center">
//               <MailIcon className="w-4 h-4 text-red" />
//               eden.baco01@gmail.com
//             </div>

//             <div className="flex gap-3 items-start">
//               <LocationIcon className="w-4 h-4 text-red mt-1 shrink-0" />
//               <span>
//                 HAY SALAM 1 GROUPE A, RUE 915
//                 <br />
//                 AHL LOUGHLAM 20000, CASABLANCA
//               </span>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h4 className="font-bebas text-xl text-[#1E1E1C] mb-5">Services</h4>

//           <ul className="space-y-3">
//             {services.map((item) => (
//               <li
//                 key={item}
//                 className="text-sm text-[#1E1E1C]/40 hover:text-[#1E1E1C] transition"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bebas text-xl text-[#1E1E1C] mb-5">Agences</h4>

//           <ul className="space-y-3">
//             {cities.map((city) => (
//               <li
//                 key={city}
//                 className="text-sm text-[#1E1E1C]/40 hover:text-[#1E1E1C] transition"
//               >
//                 {city}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bebas text-xl text-[#1E1E1C] mb-5">Entreprise</h4>

//           <ul className="space-y-3">
//             <li className="text-sm text-[#1E1E1C]/40">Qui sommes-nous</li>
//             <li className="text-sm text-[#1E1E1C]/40">Nos clients</li>
//             <li className="text-sm text-[#1E1E1C]/40">Galerie</li>
//             <li className="text-sm text-[#1E1E1C]/40">Contact</li>
//           </ul>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-[#1E1E1C]/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-[#1E1E1C]/30">
//         <p>© Eden Baco 2026 — Tous droits réservés.</p>

//         <p> · Casablanca · </p>
//       </div>
//     </footer>
//   );
// }

"use client";

import Logo from "@/components/ui/Logo";
import { PhoneIcon, MailIcon, LocationIcon } from "@/components/icons";
import { motion, Variants } from "framer-motion";

const services = [
  "Solution de sécurité",
  "Agents de sécurité",
  "Sécurité rapprochée",
  "Sécurité événementielle",
  "Télésurveillance",
  "Maître-chien",
];

const cities = [
  {
    name: "Casablanca",
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

export default function Footer() {
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
          <div className="w-fit transition-transform duration-300 hover:scale-[1.03]">
            <Logo src="/images/logo/EdenLogoOfficial.png" />
          </div>

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
            {services.map((item) => (
              <motion.li
                key={item}
                variants={linkVariants}
                className="group relative w-fit text-sm text-[#1E1E1C]/40 hover:text-[#0EA5E9] transition-colors duration-300 cursor-pointer"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full" />
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

        <motion.div variants={columnVariants}>
          <h4 className="font-bebas text-xl tracking-wide text-[#1E1E1C] mb-5">
            Entreprise
          </h4>

          <ul className="space-y-3">
            {["Qui sommes-nous", "Nos clients", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="group relative w-fit text-sm text-[#1E1E1C]/40 hover:text-[#0EA5E9] transition-colors duration-300 cursor-pointer"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full" />
                </li>
              )
            )}
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
