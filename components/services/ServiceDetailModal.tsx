"use client";
import { AnimatePresence, motion } from "framer-motion";
import type { Service } from "@/data/services";

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
}: ServiceDetailModalProps) {
  const Icon = service?.icon;

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01173d]/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="
              relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
              rounded-2xl bg-[#F0F6FC] border border-[#0EA5E9]/15
              shadow-2xl shadow-black/30 p-8 sm:p-10
            "
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]" />
            <div
              aria-hidden
              className="
                pointer-events-none absolute -top-20 -right-20 h-64 w-64
                rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.15),transparent_70%)]
                blur-3xl animate-glow-pulse
              "
            />
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="
                absolute top-5 right-5 flex h-9 w-9 items-center justify-center
                rounded-full text-[#1E1E1C]/50 transition-all duration-300
                hover:bg-[#0EA5E9]/10 hover:text-[#1E1E1C] hover:rotate-90 z-20
bg-white
shadow-md
              "
            >
              ✕
            </button>
            <div className="relative flex items-center gap-4 mb-6">
              <span
                className="
                  flex h-14 w-14 shrink-0 items-center justify-center rounded-xl
                  bg-gradient-to-br from-[#023E8A] to-[#0EA5E9] shadow-md shadow-[#0EA5E9]/20
                "
              >
                {Icon && <Icon className="text-white h-7 w-7" />}
              </span>
              <div>
                <p className="uppercase tracking-[4px] text-xs font-semibold text-[#C8102E]">
                  {service.division === "security" ? "Sécurité" : "Nettoyage"}
                </p>
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wide bg-gradient-to-r from-[#023E8A] to-[#0EA5E9] bg-clip-text text-transparent">
                  {service.title}
                </h3>
              </div>
            </div>
            <p className="relative text-sm font-semibold text-[#1E1E1C] mb-4">
              {service.details.tagline}
            </p>
            <div className="relative mb-6 space-y-3">
              {service.details.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-6 text-[#1E1E1C]/70">
                  {p}
                </p>
              ))}
            </div>
            {service.details.highlights.length > 0 && (
              <ul className="relative space-y-2.5 mb-6">
                {service.details.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-[#1E1E1C]/80"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5E9]"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            )}
            {service.details.extra && (
              <div className="relative rounded-xl border border-[#0EA5E9]/15 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#0EA5E9] mb-1">
                  {service.details.extra.label}
                </p>
                <p className="text-sm text-[#1E1E1C]/70">
                  {service.details.extra.text}
                </p>
              </div>
            )}
            ;
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
