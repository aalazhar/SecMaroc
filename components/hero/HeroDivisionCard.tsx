"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Division } from "@/data/divisions";

interface Props {
  division: Division;
  index: number;
  onClick?: () => void;
}

export default function HeroDivisionCard({ division, index, onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay: 0.3 + index * 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.03,
        y: -6,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        text-left
        backdrop-blur-xl
        transition-colors
      "
    >
      {/* Accent line */}
      <div
        className="absolute left-0 top-0 h-full w-1"
        style={{
          background: division.accent,
        }}
      />

      <div className="space-y-4">
        <div>
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{
              color: division.accent,
            }}
          >
            {division.subtitle}
          </p>

          <h3 className="text-2xl font-bold text-white">{division.title}</h3>
        </div>

        <p className="text-sm leading-7 text-neutral-400">
          {division.description}
        </p>

        <ul className="space-y-2">
          {division.points.map((point: any) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm text-neutral-300"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: division.accent,
                }}
              />

              {point}
            </li>
          ))}
        </ul>

        <div
          className="
            flex
            items-center
            gap-2
            pt-2
            font-medium
            text-white
          "
        >
          Découvrir
          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </motion.button>
  );
}
