"use client";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "group relative inline-flex items-center justify-center overflow-hidden",
        "rounded-xl font-semibold uppercase tracking-[2px]",
        "transition-all duration-300 ease-out cursor-pointer",
        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        "disabled:pointer-events-none disabled:opacity-50",

        {
          "px-5 py-3 text-xs": size === "sm",
          "px-8 py-4 text-xs": size === "md",
          "px-10 py-5 text-sm": size === "lg",
        },

        {
          "bg-[#C8102E] text-white shadow-md shadow-[#C8102E]/20 hover:bg-[#a90d26] hover:shadow-lg hover:shadow-[#C8102E]/30":
            variant === "primary",

          "bg-[#023E8A] text-white shadow-md shadow-[#023E8A]/20 hover:bg-[#012f6a] hover:shadow-lg hover:shadow-[#0EA5E9]/30":
            variant === "secondary",

          "border border-[#1E1E1C]/15 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-[#0EA5E9]/40":
            variant === "outline",

          "text-[#1E1E1C] hover:bg-black/5": variant === "ghost",
        },

        className
      )}
    >
      {/* shimmer sweep on hover — only for solid variants */}
      {(variant === "primary" || variant === "secondary") && (
        <span
          className="
            pointer-events-none absolute inset-0 -z-0
            bg-gradient-to-r from-transparent via-white/25 to-transparent
            -translate-x-full group-hover:translate-x-full
            transition-transform duration-700 ease-out
          "
        />
      )}

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
