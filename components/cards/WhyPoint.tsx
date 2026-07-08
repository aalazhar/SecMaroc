// import React from "react";

// interface Props {
//   title: string;
//   text: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
// }

// export default function WhyPoint({ title, text, icon: Icon }: Props) {
//   return (
//     <div className="flex gap-5 items-start pb-7 border-b border-black/10 last:border-none last:pb-0">
//       <div className="w-10 h-10 min-w-10 flex items-center justify-center bg-red/10 border border-red/20 mt-1">
//         <Icon className="w-5 h-5 text-red" />
//       </div>

//       <div>
//         <h3 className="font-bebas text-xl tracking-wide text-[#023e8a] mb-2">
//           {title}
//         </h3>

//         <p className="text-sm text-black/50 font-light leading-7">{text}</p>
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function WhyPoint({ title, text, icon: Icon }: Props) {
  return (
    <div className="group flex gap-5 items-start">
      <div
        className="
          relative
          w-10
          h-10
          min-w-10
          flex
          items-center
          justify-center
          rounded-lg
          bg-[#0EA5E9]/10
          border
          border-[#0EA5E9]/20
          mt-1
          overflow-hidden
          transition-all
          duration-300

          group-hover:bg-[#0EA5E9]/15
          group-hover:border-[#0EA5E9]/40
          group-hover:scale-110
          group-hover:shadow-[0_0_16px_rgba(14,165,233,0.35)]
        "
      >
        {/* soft glow pulse behind icon */}
        <span
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-lg
            bg-[radial-gradient(circle,rgba(14,165,233,0.3),transparent_70%)]
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        <Icon className="relative w-5 h-5 text-[#0EA5E9] transition-transform duration-300 group-hover:scale-110" />
      </div>

      <div>
        <h3
          className="
            font-bebas
            text-xl
            tracking-wide
            text-[#023E8A]
            mb-2
            transition-colors
            duration-300

            group-hover:text-[#0EA5E9]
          "
        >
          {title}
        </h3>

        <p className="text-sm text-black/50 font-light leading-7">{text}</p>
      </div>
    </div>
  );
}