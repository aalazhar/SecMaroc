// "use client";

// import Link from "next/link";

// import Container from "@/components/ui/Container";
// import Button from "@/components/ui/Button";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-20 bg-[#F4F1E8]">
//       {/* background */}
//       <div className="absolute inset-0 bg-[#F4F1E8]" />

//       {/* dark diagonal */}
//       <div className="hidden lg:block absolute top-0 right-0 h-full w-[45%] bg-[#1E1E1C] [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]" />

//       {/* grid texture */}
//       <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(30,30,28,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,28,.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

//       {/* red line */}
//       <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#C8102E]" />

//       <Container>
//         <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
//           {/* CONTENT */}
//           <div className="max-w-[620px]">
//             <div className="flex items-center gap-3 text-[#C8102E] uppercase tracking-[4px] text-[11px] font-semibold mb-6 animate-[fadeUp_.7s_ease_.2s_forwards] opacity-0">
//               <span className="w-8 h-px bg-[#C8102E]" />
//               Société de sécurité au Maroc
//             </div>

//             <h1 className="font-['Bebas_Neue'] text-[#1E1E1C] tracking-[2px] leading-[.95] text-6xl sm:text-7xl xl:text-[96px] mb-7 opacity-0 animate-[fadeUp_.8s_ease_.4s_forwards]">
//               Protéger ce qui
//               <span className="block text-[#C8102E]">compte vraiment</span>
//             </h1>

//             <p className="text-black/50 font-light text-base leading-8 max-w-[480px] mb-10 opacity-0 animate-[fadeUp_.8s_ease_.6s_forwards]">
//               GRS Maroc est votre partenaire de confiance en sécurité privée,
//               gardiennage, surveillance et protection rapprochée — disponible
//               24h/24, 7j/7 à travers le Maroc.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeUp_.8s_ease_.8s_forwards]">
//               <Link href="#contact">
//                 <Button>Demander un devis</Button>
//               </Link>

//               <Link href="#services">
//                 <button className="px-9 py-4 border border-black/20 text-[#1E1E1C] uppercase tracking-[2px] text-xs font-semibold hover:bg-black/5 transition">
//                   Nos services
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* SHIELD */}
//           <div className="hidden lg:flex justify-end relative">
//             <div className="animate-[shieldIn_1.2s_ease_.6s_forwards] opacity-0">
//               <Shield />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// function Shield() {
//   return (
//     <svg
//       viewBox="0 0 280 320"
//       className="w-[320px] drop-shadow-[0_0_60px_rgba(200,16,46,.25)] animate-[float_6s_ease-in-out_infinite]"
//       fill="none"
//     >
//       <path
//         d="M140 16L32 56V152C32 212 80 264 140 284C200 264 248 212 248 152V56L140 16Z"
//         fill="#1E1E1C"
//         stroke="rgba(244,241,232,.15)"
//         strokeWidth="1.5"
//       />

//       <path
//         d="M140 32L48 68V152C48 204 88 252 140 268C192 252 232 204 232 152V68L140 32Z"
//         fill="#111"
//         opacity=".9"
//       />

//       <path
//         d="M140 48L64 80V152C64 196 96 240 140 252C184 240 216 196 216 152V80L140 48Z"
//         fill="#C8102E"
//         opacity=".15"
//       />
//       <image
//         href="/images/logo/officialShield.svg"
//         x="61"
//         y="70"
//         width="160"
//         height="160"
//         preserveAspectRatio="xMidYMid meet"
//       />

//       {/* <text
//         x="140"
//         y="175"
//         textAnchor="middle"
//         fill="#F4F1E8"
//         fontSize="35"
//         fontFamily="Bebas Neue"
//       >
//         EDENBACO
//       </text> */}
//     </svg>
//   );
// }

"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-20 bg-[#F4F1E8]">
      {/* background */}
      <div className="absolute inset-0 bg-[#F4F1E8]" />

      {/* dark diagonal */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[45%] bg-[#1E1E1C] [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]" />

      {/* grid texture */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(30,30,28,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,28,.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* red line */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#C8102E]" />

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* CONTENT */}
          <div className="max-w-[620px]">
            <div className="flex items-center gap-3 text-[#C8102E] uppercase tracking-[4px] text-[11px] font-semibold mb-6 animate-[fadeUp_.7s_ease_.2s_forwards] opacity-0">
              <span className="w-8 h-px bg-[#C8102E]" />
              Sécurité privée • Surveillance • Gardiennage
            </div>

            <h1 className="font-['Bebas_Neue'] text-[#023e8a] tracking-[2px] leading-[.95] text-6xl sm:text-7xl xl:text-[96px] mb-7 opacity-0 animate-[fadeUp_.8s_ease_.4s_forwards]">
              Votre sécurité,
              <span className="block text-[#C8102E]">
                notre mission
              </span>
            </h1>

            <p className="text-black/50 font-light text-base leading-8 max-w-[520px] mb-10 opacity-0 animate-[fadeUp_.8s_ease_.6s_forwards]">
              EDEN BACO accompagne les entreprises, institutions et
              particuliers avec des solutions de sécurité privée,
              de surveillance et de gardiennage adaptées à chaque besoin.
              Nos équipes qualifiées assurent une protection fiable,
              réactive et disponible 24h/24, 7j/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeUp_.8s_ease_.8s_forwards]">
              <Link href="#contact">
                <Button>Demander un devis</Button>
              </Link>

              <Link href="#services">
                <button className="px-9 py-4 border bg-[#023e8a] border-black/20 text-white uppercase tracking-[2px] text-xs font-semibold hover:text-black hover:bg-black/5 transition">
                  Découvrir nos services
                </button>
              </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-12 grid grid-cols-2 gap-4 max-w-[520px] opacity-0 animate-[fadeUp_.8s_ease_1s_forwards]">
              <div className="border-l-2 border-[#C8102E] pl-4">
                <p className="text-sm font-semibold text-[#1E1E1C]">
                  Disponibilité 24h/24
                </p>
                <p className="text-xs text-black/50 mt-1">
                  Intervention rapide 7j/7
                </p>
              </div>

              <div className="border-l-2 border-[#C8102E] pl-4">
                <p className="text-sm font-semibold text-[#1E1E1C]">
                  Agents qualifiés
                </p>
                <p className="text-xs text-black/50 mt-1">
                  Professionnels formés et certifiés
                </p>
              </div>

              <div className="border-l-2 border-[#C8102E] pl-4">
                <p className="text-sm font-semibold text-[#1E1E1C]">
                  Solutions sur mesure
                </p>
                <p className="text-xs text-black/50 mt-1">
                  Adaptées à chaque client
                </p>
              </div>

              <div className="border-l-2 border-[#C8102E] pl-4">
                <p className="text-sm font-semibold text-[#1E1E1C]">
                  Fiabilité & Confidentialité
                </p>
                <p className="text-xs text-black/50 mt-1">
                  Protection et discrétion garanties
                </p>
              </div>
            </div>
          </div>

          {/* SHIELD */}
          <div className="hidden lg:flex justify-end relative">
            <div className="animate-[shieldIn_1.2s_ease_.6s_forwards] opacity-0">
              <Shield />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Shield() {
  return (
    <svg
      viewBox="0 0 280 320"
      className="w-[320px] drop-shadow-[0_0_60px_rgba(200,16,46,.25)] animate-[float_6s_ease-in-out_infinite]"
      fill="none"
    >
      <path
        d="M140 16L32 56V152C32 212 80 264 140 284C200 264 248 212 248 152V56L140 16Z"
        fill="#1E1E1C"
        stroke="rgba(244,241,232,.15)"
        strokeWidth="1.5"
      />

      <path
        d="M140 32L48 68V152C48 204 88 252 140 268C192 252 232 204 232 152V68L140 32Z"
        fill="#111"
        opacity=".9"
      />

      <path
        d="M140 48L64 80V152C64 196 96 240 140 252C184 240 216 196 216 152V80L140 48Z"
        fill="#C8102E"
        opacity=".15"
      />

      <text
        x="140"
        y="175"
        textAnchor="middle"
        fill="#F4F1E8"
        fontSize="58"
        fontFamily="Bebas Neue"
      >
        EB
      </text>
    </svg>
  );
}