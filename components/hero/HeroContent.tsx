// "use client";

// import Link from "next/link";

// import Button from "@/components/ui/Button";

// import type { HeroSlide } from "@/data/hero";

// import { useDevisModal } from "@/components/cta/DevisModalContext";

// interface HeroContentProps {
//   slide: HeroSlide;
// }

// export default function HeroContent({ slide }: HeroContentProps) {

//   const { openModal } = useDevisModal();

//   return (
//     <div className="max-w-[620px]">
//       {/* LABEL */}

//       <div
//         className="
//           flex
//           items-center
//           gap-3
//           uppercase
//           tracking-[4px]
//           text-[11px]
//           font-semibold
//           mb-6
//           opacity-0
//           animate-[fadeUp_.7s_ease_.2s_forwards]
//         "
//         style={{
//           color: slide.accent,
//         }}
//       >
//         <span
//           className="w-8 h-px"
//           style={{
//             backgroundColor: slide.accent,
//           }}
//         />

//         {slide.label}
//       </div>

//       {/* TITLE */}

//       {/* <h1
//         className="
//         bg-yellow-400
//           font-['Bebas_Neue']
//           text-[#023e8a]
//           tracking-[2px]
//           leading-[.95]
//           text-6xl
//           sm:text-7xl
//           xl:text-[96px]
//           mb-7
//           opacity-0
//           animate-[fadeUp_.8s_ease_.4s_forwards]
//         "
//       >

//         {slide.title.first}

//         <span
//           className="block"
//           style={{
//             color: slide.accent,
//           }}
//         >
//           {slide.title.second}
//         </span>

//       </h1> */}

//       <h1
//         className="
//     font-['Bebas_Neue']
//     text-[#023e8a]
//     tracking-[2px]
//     leading-[.95]
//     text-6xl
//     sm:text-7xl
//     xl:text-[96px]
//     mb-7
//     opacity-0
//     animate-[fadeUp_.8s_ease_.4s_forwards]
//     max-w-[15ch]
//   "
//       >
//         {slide.title.first}

//         <span className="block mt-2" style={{ color: slide.accent }}>
//           {slide.title.second}
//         </span>
//       </h1>

//       {/* DESCRIPTION */}

//       <p
//         className="
//           text-black/50
//           font-light
//           text-base
//           leading-8
//           max-w-[520px]
//           mb-10
//           opacity-0
//           animate-[fadeUp_.8s_ease_.6s_forwards]
//         "
//       >
//         {slide.description}
//       </p>

//       {/* ACTIONS */}

//       <div
//         className="
//           flex
//           flex-col
//           sm:flex-row
//           gap-4
//           mb-12
//           opacity-0
//           animate-[fadeUp_.8s_ease_.8s_forwards]
//         "
//       >
//         {/* <Link href={slide.actions.primary.href}> */}
//           <Button onClick={openModal}>{slide.actions.primary.label}</Button>
//         {/* </Link> */}

//         <Link href={slide.actions.secondary.href} className="lg:hidden">
//           <Button variant="secondary">{slide.actions.secondary.label}</Button>
//         </Link>
//       </div>

//       {/* TRUST */}

//       {/* <div
//         className="
//           grid
//           grid-cols-2
//           gap-4
//           max-w-[520px]
//           opacity-0
//           animate-[fadeUp_.8s_ease_1s_forwards]
//           lg:hidden
//         "
//       >
//         {slide.trust.map((item) => (
//           <div
//             key={item.title}
//             className="
//               border-l-2
//               pl-4
//             "
//             style={{
//               borderColor: slide.accent,
//             }}
//           >
//             <p
//               className="
//                 text-sm
//                 font-semibold
//                 text-[#1E1E1C]
//               "
//             >
//               {item.title}
//             </p>

//             <p
//               className="
//                 text-xs
//                 text-black/50
//                 mt-1
//               "
//             >
//               {item.subtitle}
//             </p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }


"use client";

import Link from "next/link";

import Button from "@/components/ui/Button";

import type { HeroSlide } from "@/data/hero";

import { useDevisModal } from "@/components/cta/DevisModalContext";

interface HeroContentProps {
  slide: HeroSlide;
}

export default function HeroContent({ slide }: HeroContentProps) {
  const { openModal } = useDevisModal();

  return (
    <div className="max-w-[620px]">
      {/* LABEL */}

      <div
        className="
          flex
          items-center
          gap-3
          uppercase
          tracking-[4px]
          text-[11px]
          font-semibold
          mb-6
          opacity-0
          animate-[fadeUp_.7s_ease_.2s_forwards]
        "
        style={{
          color: slide.accent,
        }}
      >
        <span
          className="w-2 h-2 rounded-full animate-glow-pulse"
          style={{
            backgroundColor: slide.accent,
            boxShadow: `0 0 8px ${slide.accent}`,
          }}
        />

        <span
          className="w-8 h-px"
          style={{
            backgroundColor: slide.accent,
          }}
        />

        {slide.label}
      </div>

      {/* TITLE */}

      <h1
        className="
          font-['Bebas_Neue']
          text-[#023e8a]
          tracking-[2px]
          leading-[.95]
          text-6xl
          sm:text-7xl
          xl:text-[96px]
          mb-7
          opacity-0
          animate-[fadeUp_.8s_ease_.4s_forwards]
          max-w-[15ch]
        "
      >
        {slide.title.first}

        <span className="block mt-2" style={{ color: slide.accent }}>
          {slide.title.second}
        </span>
      </h1>

      {/* DESCRIPTION */}

      <p
        className="
          text-black/50
          font-light
          text-base
          leading-8
          max-w-[520px]
          mb-10
          opacity-0
          animate-[fadeUp_.8s_ease_.6s_forwards]
        "
      >
        {slide.description}
      </p>

      {/* ACTIONS */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-4
          mb-12
          opacity-0
          animate-[fadeUp_.8s_ease_.8s_forwards]
        "
      >
        <Button onClick={openModal}>{slide.actions.primary.label}</Button>

        <Link href={slide.actions.secondary.href} className="lg:hidden">
          <Button variant="secondary">{slide.actions.secondary.label}</Button>
        </Link>
      </div>
    </div>
  );
}
