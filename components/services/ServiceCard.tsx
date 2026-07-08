type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  icon: IconComponent;
  division: "security" | "cleaning";
  onClick: () => void;
}

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  division,
  onClick,
}: ServiceCardProps) {
  const isSecurity = division === "security";

  const accent = {
    line: isSecurity
      ? "bg-gradient-to-r from-[#C8102E] to-[#a90d26]"
      : "bg-gradient-to-r from-[#023E8A] to-[#0EA5E9]",
    number: isSecurity
      ? "group-hover:text-[#C8102E]/10"
      : "group-hover:text-[#0EA5E9]/10",
    iconBg: isSecurity ? "bg-[#C8102E]/10" : "bg-[#0EA5E9]/10",
    iconHover: isSecurity
      ? "group-hover:bg-[#C8102E]/20"
      : "group-hover:bg-[#0EA5E9]/20",
    border: isSecurity ? "border-[#C8102E]/20" : "border-[#0EA5E9]/20",
    borderHover: isSecurity
      ? "group-hover:border-[#C8102E]"
      : "group-hover:border-[#0EA5E9]",
    text: isSecurity ? "text-[#C8102E]" : "text-[#0EA5E9]",
    glow: isSecurity
      ? "bg-[radial-gradient(circle,rgba(200,16,46,0.16),transparent_70%)]"
      : "bg-[radial-gradient(circle,rgba(14,165,233,0.18),transparent_70%)]",
    ring: isSecurity
      ? "focus-visible:ring-[#C8102E]/25"
      : "focus-visible:ring-[#0EA5E9]/25",
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`
        group
        relative
        h-full
        cursor-pointer
        overflow-hidden
        rounded-2xl
        bg-white/70
        backdrop-blur-sm
        border
        border-[#0EA5E9]/10
        p-8
        sm:p-10
        transition-all
        duration-500
        outline-none

        hover:-translate-y-1.5
        hover:bg-white
        hover:border-[#0EA5E9]/25
        hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)]
        focus-visible:ring-4
        ${accent.ring}
      `}
    >
      {/* glow blob on hover */}
      <div
        aria-hidden
        className={`
          pointer-events-none
          absolute
          -top-10
          -right-10
          h-40
          w-40
          rounded-full
          ${accent.glow}
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        `}
      />

      {/* Top Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] ${accent.line} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`}
      />

      {/* Number */}
      <span
        className={`absolute top-6 right-6 font-['Bebas_Neue'] text-5xl text-black/5 transition-colors duration-300 ${accent.number}`}
      >
        {String(number).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className={`
          relative
          w-14 h-14
          mb-6
          rounded-xl
          flex items-center justify-center
          transition-all duration-300
          ${accent.iconBg}
          ${accent.border}
          ${accent.iconHover}
          ${accent.borderHover}
          border
          group-hover:scale-110
        `}
      >
        <Icon className={`w-6 h-6 ${accent.text}`} strokeWidth={1.5} />
      </div>

      {/* Division */}
      <p
        className={`relative mb-2 text-[10px] font-semibold uppercase tracking-[3px] ${accent.text}`}
      >
        {isSecurity ? "Sécurité privée" : "Nettoyage professionnel"}
      </p>

      {/* Title */}
      <h3 className="relative font-['Bebas_Neue'] text-3xl tracking-wide text-[#023E8A] mb-3 transition-colors duration-300 group-hover:text-[#0EA5E9]">
        {title}
      </h3>

      {/* Description */}
      <p className="relative text-sm leading-7 font-light text-black/50">
        {description}
      </p>

      {/* CTA — visual only, click handled by the whole card */}
      <span
        className={`relative mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-bold transition-all duration-300 group-hover:gap-4 ${accent.text}`}
      >
        En savoir plus
        <ArrowIcon />
      </span>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
