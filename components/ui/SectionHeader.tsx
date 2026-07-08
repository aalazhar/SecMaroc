// interface Props {
//   eyebrow: string;
//   title: string;
//   description?: string;
//   centered?: boolean;
// }

// export default function SectionHeader({
//   eyebrow,
//   title,
//   description,
//   centered = false,
// }: Props) {
//   return (
//     <div
//       className={`
//         mb-10
//         md:mb-16
//         ${centered ? "text-center mx-auto" : ""}
//       `}
//     >
//       <div className="flex items-center gap-3 text-red-700 uppercase tracking-[4px] text-xs font-semibold mb-4">
//         <span className="text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px]" />
//         {eyebrow}
//       </div>

//       <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none">{title}</h2>

//       {description && (
//         <p className="mt-4 text-sm md:text-base text-zinc-500 max-w-xl">{description}</p>
//       )}
//     </div>
//   );
// }

// interface Props {
//   eyebrow: string;

//   title: string;

//   description?: string;

//   center?: boolean;
// }

// export default function SectionHeader({
//   eyebrow,

//   title,

//   description,

//   center = false,
// }: Props) {
//   return (
//     <div
//       className={`
  
//   ${center ? "text-center mx-auto" : ""}
  
//   max-w-2xl
  
//   `}
//     >
//       <div
//         className={`
  
//   flex
//   items-center
//   gap-3
//   uppercase
//   tracking-[4px]
//   text-xs
//   font-semibold
//   text-red
//   mb-4
  
//   ${center ? "justify-center" : ""}
  
//   `}
//       >
//         <span className="w-7 h-px bg-red" />

//         {eyebrow}
//       </div>

//       <h2
//         className="
//   font-bebas
//   text-5xl
//   md:text-6xl
//   leading-none
//   tracking-wide
//   text-[#023e8a]
//   "
//       >
//         {title}
//       </h2>

//       {description && (
//         <p
//           className="
//   mt-5
//   text-black/50
//   font-light
//   leading-8
//   text-sm
//   md:text-base
//   "
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      <div
        className={`
          flex
          items-center
          gap-3
          uppercase
          tracking-[4px]
          text-xs
          font-semibold
          text-[#C8102E]
          mb-4
          ${center ? "justify-center" : ""}
        `}
      >
        <motion.span
          className="h-px bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]"
          initial={{ width: 0 }}
          whileInView={{ width: 28 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {eyebrow}
      </div>

      <h2
        className="
          font-bebas
          text-5xl
          md:text-6xl
          leading-none
          tracking-wide
          bg-gradient-to-r
          from-[#023E8A]
          to-[#0EA5E9]
          bg-clip-text
          text-transparent
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            text-black/50
            font-light
            leading-8
            text-sm
            md:text-base
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}