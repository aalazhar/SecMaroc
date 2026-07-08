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

// "use client";

// import Image from "next/image";

// import Container from "@/components/ui/Container";

// import { motion } from "framer-motion";

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
// "use client";

// import Image from "next/image";

// import Container from "@/components/ui/Container";

// import { motion } from "framer-motion";

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
// "use client";

// import Image from "next/image";

// import Container from "@/components/ui/Container";

// import { motion } from "framer-motion";

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
// "use client";

// import Image from "next/image";

// import Container from "@/components/ui/Container";

// import { motion } from "framer-motion";

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

// const RADIUS = 240;

// const features = [
//   "Matériel de surveillance professionnel",
//   "Contrôle d'accès et identification",
//   "Communication instantanée sur le terrain",
//   "Équipements adaptés à chaque mission",
// ];

// export default function Equipements() {
//   return (
//     <section className="relative py-24 overflow-hidden bg-[#F0F6FC]">
//       <Container>
//         <div className="grid lg:grid-cols-[500px_1fr] gap-10 lg:gap-20 items-center">
//           {/* LEFT CONTENT */}

//           {/* <div>
//             <p className="flex items-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-[#C8102E] mb-5">
//               <span className="w-7 h-px bg-[#C8102E]" />
//               Nos équipements
//             </p>

//             <h2 className="font-bebas text-5xl md:text-6xl xl:text-7xl leading-none tracking-wide text-[#023e8a]">
//               Équipés
//               <br />
//               pour protéger
//             </h2>

//             <p className="mt-6 text-black/60 leading-8 max-w-md">
//               Nous mettons à la disposition de nos agents des équipements
//               professionnels pour assurer une surveillance efficace, une
//               communication rapide et une protection optimale sur chaque
//               mission.
//             </p>

//             <div className="mt-10 space-y-4">
//               <div className="flex items-center gap-3 text-sm text-black/70">
//                 <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
//                 Matériel de surveillance professionnel
//               </div>

//               <div className="flex items-center gap-3 text-sm text-black/70">
//                 <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
//                 Contrôle d'accès et identification
//               </div>

//               <div className="flex items-center gap-3 text-sm text-black/70">
//                 <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
//                 Communication instantanée sur le terrain
//               </div>

//               <div className="flex items-center gap-3 text-sm text-black/70">
//                 <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
//                 Équipements adaptés à chaque mission
//               </div>
//             </div>
//           </div> */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <p className="flex items-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-[#C8102E] mb-5">
//               <motion.span
//                 className="h-px bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: 28 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               />
//               Nos équipements
//             </p>

//             <h2
//               className="
//                 font-bebas
//                 text-5xl
//                 md:text-6xl
//                 xl:text-7xl
//                 leading-none
//                 tracking-wide
//                 bg-gradient-to-r
//                 from-[#023E8A]
//                 to-[#0EA5E9]
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Équipés
//               <br />
//               pour protéger
//             </h2>

//             <p className="mt-6 text-black/60 leading-8 max-w-md">
//               Nous mettons à la disposition de nos agents des équipements
//               professionnels pour assurer une surveillance efficace, une
//               communication rapide et une protection optimale sur chaque
//               mission.
//             </p>

//             <motion.div
//               className="mt-10 space-y-4"
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={{
//                 hidden: {},
//                 show: { transition: { staggerChildren: 0.1 } },
//               }}
//             >
//               {features.map((text) => (
//                 <motion.div
//                   key={text}
//                   variants={{
//                     hidden: { opacity: 0, x: -16 },
//                     show: {
//                       opacity: 1,
//                       x: 0,
//                       transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
//                     },
//                   }}
//                   className="flex items-center gap-3 text-sm text-black/70"
//                 >
//                   <span className="relative flex h-2 w-2 shrink-0">
//                     <span className="absolute inline-flex h-full w-full rounded-full bg-[#C8102E]/50 animate-glow-pulse" />
//                     <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#C8102E]" />
//                   </span>
//                   {text}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* ORBIT */}

//           <div className="relative h-[560px] hidden lg:flex items-center justify-center">
//             {/* GLOW */}

//             <div className="absolute w-[380px] h-[380px] rounded-full bg-[#C8102E]/10 blur-[90px]" />

//             {/* ORBIT CIRCLE */}

//             {/* <div className="absolute w-[420px] h-[420px] rounded-full border border-[#C8102E]/15" /> */}
//             <div className="absolute w-[560px] h-[560px] rounded-full border border-[#C8102E]/20 hidden" />

//             <div className="absolute w-[430px] h-[430px] rounded-full border border-[#C8102E]/10 hidden" />

//             <div className="absolute w-[340px] h-[340px] rounded-full border border-[#C8102E]/10" />

//             {/* ROTATION */}

//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 60,
//                 ease: "linear",
//               }}
//               className="absolute w-[640px] h-[640px]"
//             >
//               {equipments.map((item) => {
//                 const x = Math.cos((item.angle * Math.PI) / 180) * RADIUS;

//                 const y = Math.sin((item.angle * Math.PI) / 180) * RADIUS;

//                 return (
//                   <div
//                     key={item.name}
//                     className="absolute"
//                     style={{
//                       left: `calc(50% + ${x}px - 55px)`,
//                       top: `calc(50% + ${y}px - 55px)`,
//                     }}
//                   >
//                     <motion.div
//                       animate={{ rotate: -360 }}
//                       transition={{
//                         repeat: Infinity,
//                         duration: 60,
//                         ease: "linear",
//                       }}
//                     >
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         width={160}
//                         height={160}
//                         className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,.08)]"
//                       />
//                     </motion.div>
//                   </div>
//                 );
//               })}
//             </motion.div>

//             {/* SHIELD */}

//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 5,
//                 ease: "easeInOut",
//               }}
//               className="relative z-20 flex items-center justify-center"
//             >
//               {/* Red outer glow */}
//               <div className="absolute inset-0 rounded-full scale-125 bg-[#C8102E]/25 blur-[50px] z-0 opacity-30" />

//               {/* White inner glow */}
//               <div className="absolute w-24 h-24 rounded-full bg-white/80 blur-[35px] z-10" />

//               <Image
//                 src="/images/logo/edenBacoShield.png"
//                 alt="Eden Baco"
//                 width={350}
//                 height={350}
//                 priority
//                 className="relative z-20 w-[350px] h-auto opacity-75 mt-5"
//               />
//             </motion.div>
//           </div>
//         </div>

//         {/* MOBILE */}

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 lg:hidden">
//           {equipments.map((item) => (
//             <div
//               key={item.name}
//               className="bg-white rounded-3xl p-5 border border-black/10"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={120}
//                 height={120}
//                 className="mx-auto"
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import Container from "@/components/ui/Container";
// import { motion } from "framer-motion";

// const equipments = [
//   { name: "Torche", image: "/images/equipements/torche.png", angle: 0 },
//   { name: "Jumelles", image: "/images/equipements/jumelles.png", angle: 45 },
//   { name: "Sifflet", image: "/images/equipements/sifflet.png", angle: 90 },
//   { name: "Talkies-Walkies", image: "/images/equipements/talky.png", angle: 135 },
//   { name: "Abri", image: "/images/equipements/abri.png", angle: 180 },
//   { name: "Badge", image: "/images/equipements/badge.png", angle: 225 },
//   { name: "Détecteur", image: "/images/equipements/detecteur.png", angle: 270 },
//   { name: "Costume", image: "/images/equipements/costume.png", angle: 315 },
// ];

// const RADIUS = 240;

// const features = [
//   "Matériel de surveillance professionnel",
//   "Contrôle d'accès et identification",
//   "Communication instantanée sur le terrain",
//   "Équipements adaptés à chaque mission",
// ];

// export default function Equipements() {
//   return (
//     <section className="relative py-24 overflow-hidden bg-[#F0F6FC]">
//       {/* AURORA GLOWS */}
//       <div
//         aria-hidden
//         className="
//           pointer-events-none
//           absolute
//           top-[-10%]
//           right-[-10%]
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-[radial-gradient(circle,rgba(14,165,233,0.12),transparent_70%)]
//           blur-3xl
//           animate-aurora
//         "
//       />
//       <div
//         aria-hidden
//         className="
//           pointer-events-none
//           absolute
//           bottom-[-15%]
//           left-[-10%]
//           h-[360px]
//           w-[360px]
//           rounded-full
//           bg-[radial-gradient(circle,rgba(200,16,46,0.07),transparent_70%)]
//           blur-3xl
//           animate-aurora
//         "
//         style={{ animationDelay: "5s" }}
//       />

//       <Container>
//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[420px_1fr] xl:grid-cols-[500px_1fr] gap-10 lg:gap-12 xl:gap-20 items-center">
//           {/* LEFT CONTENT */}

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <p className="flex items-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-[#C8102E] mb-5">
//               <motion.span
//                 className="h-px bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: 28 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               />
//               Nos équipements
//             </p>

//             <h2
//               className="
//                 font-bebas
//                 text-5xl
//                 md:text-6xl
//                 xl:text-7xl
//                 leading-none
//                 tracking-wide
//                 bg-gradient-to-r
//                 from-[#023E8A]
//                 to-[#0EA5E9]
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Équipés
//               <br />
//               pour protéger
//             </h2>

//             <p className="mt-6 text-black/60 leading-8 max-w-md">
//               Nous mettons à la disposition de nos agents des équipements
//               professionnels pour assurer une surveillance efficace, une
//               communication rapide et une protection optimale sur chaque
//               mission.
//             </p>

//             <motion.div
//               className="mt-10 space-y-4"
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={{
//                 hidden: {},
//                 show: { transition: { staggerChildren: 0.1 } },
//               }}
//             >
//               {features.map((text) => (
//                 <motion.div
//                   key={text}
//                   variants={{
//                     hidden: { opacity: 0, x: -16 },
//                     show: {
//                       opacity: 1,
//                       x: 0,
//                       transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
//                     },
//                   }}
//                   className="flex items-center gap-3 text-sm text-black/70"
//                 >
//                   <span className="relative flex h-2 w-2 shrink-0">
//                     <span className="absolute inline-flex h-full w-full rounded-full bg-[#C8102E]/50 animate-glow-pulse" />
//                     <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#C8102E]" />
//                   </span>
//                   {text}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* ORBIT */}

//           <div
//             className="
//               relative
//               hidden
//               md:flex
//               items-center
//               justify-center
//               overflow-hidden
//               h-[380px]
//               md:h-[420px]
//               lg:h-[480px]
//               xl:h-[560px]
//             "
//           >
//             <div
//               className="
//                 relative
//                 flex
//                 items-center
//                 justify-center
//                 scale-[0.55]
//                 md:scale-[0.62]
//                 lg:scale-[0.78]
//                 xl:scale-100
//                 origin-center
//                 transition-transform
//                 duration-300
//               "
//             >
//               {/* GLOW */}
//               <div className="absolute w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.14),transparent_70%)] blur-[90px] animate-glow-pulse" />

//               {/* ORBIT RINGS */}
//               <div className="absolute w-[340px] h-[340px] rounded-full border border-[#0EA5E9]/15" />
//               <div className="absolute w-[430px] h-[430px] rounded-full border border-[#C8102E]/10" />

//               {/* ROTATION */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//                 className="absolute w-[640px] h-[640px]"
//               >
//                 {equipments.map((item) => {
//                   const x = Math.cos((item.angle * Math.PI) / 180) * RADIUS;
//                   const y = Math.sin((item.angle * Math.PI) / 180) * RADIUS;

//                   return (
//                     <div
//                       key={item.name}
//                       className="absolute"
//                       style={{
//                         left: `calc(50% + ${x}px - 55px)`,
//                         top: `calc(50% + ${y}px - 55px)`,
//                       }}
//                     >
//                       <motion.div
//                         animate={{ rotate: -360 }}
//                         transition={{
//                           repeat: Infinity,
//                           duration: 60,
//                           ease: "linear",
//                         }}
//                         className="relative rounded-2xl p-2 bg-white/40 backdrop-blur-sm border border-[#0EA5E9]/10 shadow-sm shadow-[#0EA5E9]/5"
//                       >
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           width={160}
//                           height={160}
//                           className="object-contain drop-shadow-[0_8px_20px_rgba(2,62,138,0.08)]"
//                         />
//                       </motion.div>
//                     </div>
//                   );
//                 })}
//               </motion.div>

//               {/* SHIELD */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//                 className="relative z-20 flex items-center justify-center"
//               >
//                 <div className="absolute inset-0 rounded-full scale-125 bg-[#0EA5E9]/20 blur-[50px] z-0 animate-glow-pulse" />
//                 <div className="absolute w-24 h-24 rounded-full bg-white/80 blur-[35px] z-10" />

//                 <Image
//                   src="/images/logo/edenBacoShield.png"
//                   alt="Eden Baco"
//                   width={350}
//                   height={350}
//                   priority
//                   className="relative z-20 w-[350px] h-auto opacity-80 mt-5"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE FALLBACK GRID (below md) */}

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 md:hidden">
//           {equipments.map((item, i) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
//               className="
//                 bg-white/70
//                 backdrop-blur-sm
//                 rounded-3xl
//                 p-5
//                 border
//                 border-[#0EA5E9]/10
//                 shadow-sm
//                 shadow-[#0EA5E9]/5
//                 transition-transform
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-[#0EA5E9]/25
//               "
//             >
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={120}
//                 height={120}
//                 className="mx-auto"
//               />
//             </motion.div>
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

const features = [
  "Matériel de surveillance professionnel",
  "Contrôle d'accès et identification",
  "Communication instantanée sur le terrain",
  "Équipements adaptés à chaque mission",
];

export default function Equipements() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#F0F6FC]">
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

            <p className="mt-6 text-black/60 leading-8 max-w-md mx-auto xl:mx-0">
              Nous mettons à la disposition de nos agents des équipements
              professionnels pour assurer une surveillance efficace, une
              communication rapide et une protection optimale sur chaque
              mission.
            </p>

            <motion.div
              className="mt-10 space-y-4 flex flex-col items-center xl:items-start"
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
                  <span className="relative flex h-2 w-2 shrink-0">
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
            <div
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
              {/* GLOW */}

              <div className="absolute w-[380px] h-[380px] rounded-full bg-[#C8102E]/10 blur-[90px]" />

              {/* ORBIT CIRCLE */}

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
                          className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,.08)]"
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
            </div>
          </div>
        </div>

        {/* MOBILE — real small screens only, where even a scaled orbit is too tight */}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 md:hidden">
          {equipments.map((item) => (
            <div
              key={item.name}
              className=" bg-[#e2effd] rounded-3xl p-5 border border-black/10"
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