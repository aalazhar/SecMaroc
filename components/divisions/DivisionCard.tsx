import type { Division } from "@/data/divisions";
import type { ServiceType } from "@/data/services";

interface Props {
  division: Division;
  onSelect?: (tab: ServiceType) => void;
}

// Simple stroke-based icon set — extend as division.icon grows
function DivisionIcon({ icon, color }: { icon: string; color: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <path
            d="M12 3v18M7 21h10M5 7l4-2 4 2M15 7l4-2 4 2"
            transform="translate(-2,0)"
          />
          <path d="M4 7l-2.5 5a3 3 0 005 0L4 7zM20 7l-2.5 5a3 3 0 005 0L20 7z" />
        </svg>
      );
    default:
      // simple sparkle
      return (
        <svg {...common}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
        </svg>
      );
  }
}

export default function DivisionCard({ division, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect?.(division.id as ServiceType)}
      className="
        group
        relative
        overflow-hidden
        text-left
        min-h-[420px]

        bg-[#FBF8F1]

        border
        border-[#E4DECD]

        p-10

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-[color:var(--accent)]
        hover:shadow-[0_25px_60px_rgba(30,30,28,.10)]
      "
      style={{ ["--accent" as any]: division.accent }}
    >
      {/* accent rule */}
      <div
        className="
          absolute
          top-0
          left-0
          h-full
          w-[3px]
        "
        style={{ backgroundColor: division.accent }}
      />

      {/* icon */}
      <div
        className="relative flex items-center justify-center w-16 h-16 mb-10 transition-colors duration-500 border rounded-full "
        style={{
          backgroundColor: `${division.accent}14`,
          borderColor: `${division.accent}40`,
        }}
      >
        <DivisionIcon icon={division.icon} color={division.accent} />
      </div>

      <h3
        className="
          relative
          font-['Bebas_Neue']
          text-5xl
          tracking-wide
          text-[#1E1E1C]
        "
      >
        {division.title}
      </h3>

      <p
        className="
          mt-3
          uppercase
          tracking-[3px]
          text-xs
          text-[#8A8271]
        "
      >
        {division.subtitle}
      </p>

      <p
        className="
          mt-8
          max-w-sm
          text-[#5C554A]
          leading-7
        "
      >
        {division.description}
      </p>

      <div
        className="
          absolute
          bottom-10
          right-10

          text-xs
          tracking-[2px]
          uppercase
          text-[#8A8271]

          transition
          group-hover:translate-x-2
        "
        style={{ color: "inherit" }}
      >
        <span className="group-hover:text-[color:var(--accent)] transition-colors duration-300">
          Explorer →
        </span>
      </div>
    </button>
  );
}
