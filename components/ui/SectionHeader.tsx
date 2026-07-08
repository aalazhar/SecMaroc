"use client"
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
          className="mt-5 text-sm font-light leading-8  text-black/50 md:text-base"
        >
          {description}
        </p>
      )}
    </div>
  );
}
