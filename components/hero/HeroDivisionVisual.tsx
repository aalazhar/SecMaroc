"use client";

import { motion } from "framer-motion";
import { divisions } from "@/data/divisions";
import HeroDivisionCard from "./HeroDivisionCard";

interface Props {
  onSelect?: (id: string) => void;
}

export default function HeroDivisionVisual({ onSelect }: Props) {
  return (
    <motion.div
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        gap-6
        py-10
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Background glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.12),transparent_70%)]
          blur-2xl
        "
      />

      {/* Cards container */}
      <motion.div
        className="
          relative
          flex
          flex-col
          gap-6
          w-full
          max-w-md
        "
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {divisions.map((division, index) => (
          <HeroDivisionCard
            key={division.id}
            division={division}
            index={index}
            onClick={() => onSelect?.(division.id)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}