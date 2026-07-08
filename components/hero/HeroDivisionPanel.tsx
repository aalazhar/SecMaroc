"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Division } from "@/data/divisions";
import Button from "../ui/Button";
import { ServiceType } from "@/data/services";

interface Props {
  division: Division;
  onSelect?: (type: ServiceType) => void;
}

export default function HeroDivisionPanel({ division, onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      className="relative w-full max-w-md"
    >
      {/* FLOATING WRAPPER */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* GLOW BACKGROUND */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-40"
          style={{
            background: `radial-gradient(circle, ${division.accent}30, transparent 70%)`,
          }}
        />

        {/* CONTENT */}
        <div className="px-2 ml-10 space-y-6">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            {division.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-base leading-7 text-neutral-300">
            {division.description}
          </p>

          {/* POINTS */}
          <ul className="pt-2 space-y-3">
            {division.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-base text-neutral-200"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: division.accent }}
                />
                {point}
              </li>
            ))}
          </ul>
          
          <Button
            variant={division.id === "security" ? "primary" : "secondary"}
            size="md"
            onClick={() => onSelect?.(division.id)}
            className="flex items-center gap-2 mt-6 group"
          >
            Découvrir nos services
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
