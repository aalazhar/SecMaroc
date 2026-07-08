// "use client";

// import Container from "@/components/ui/Container";
// import Counter from "@/components/animations/Counter";

// import { stats } from "@/data/stats";

// export default function Stats() {
//   return (
//     <section className="bg-[#C8102E] grid grid-cols-2 lg:grid-cols-4">
//       {stats.map((stat) => (
//         <StatItem key={stat.label} number={stat.value} label={stat.label} />
//       ))}
//     </section>
//   );
// }

// function StatItem({
//   number,
//   label,
// }: {
//   number: number | string;
//   label: string;
// }) {
//   return (
//     <div className="py-8 px-5 text-center border-r border-white/20 last:border-r-0 hover:bg-[#A50D26] transition">
//       <div className="font-['Bebas_Neue'] text-5xl leading-none text-white">
//         {typeof number === "number" ? <Counter value={number} /> : number}
//       </div>

//       <span className="block mt-2 uppercase tracking-[2px] text-[11px] font-semibold text-white/70">
//         {label}
//       </span>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Counter from "@/components/animations/Counter";

import { stats } from "@/data/stats";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#C8102E] to-[#a90d26]">
      {/* subtle drifting glow so the red band doesn't feel flat */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/4
          h-[300px]
          w-[300px]
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)]
          blur-3xl
          animate-aurora
        "
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 grid grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} number={stat.value} label={stat.label} />
        ))}
      </motion.div>
    </section>
  );
}

function StatItem({
  number,
  label,
}: {
  number: number | string;
  label: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="
        group
        relative
        py-8
        px-5
        text-center
        border-r
        border-white/20
        last:border-r-0
        transition-colors
        duration-300

        hover:bg-white/10
      "
    >
      <div
        className="
          font-['Bebas_Neue']
          text-5xl
          leading-none
          text-white
          transition-transform
          duration-300

          group-hover:scale-110
        "
      >
        {typeof number === "number" ? <Counter value={number} /> : number}
      </div>

      <span className="block mt-2 uppercase tracking-[2px] text-[11px] font-semibold text-white/70">
        {label}
      </span>

      {/* underline glow on hover */}
      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          rounded-full
          bg-white
          shadow-[0_0_8px_rgba(255,255,255,0.8)]
          transition-all
          duration-300

          group-hover:w-10
        "
      />
    </motion.div>
  );
}