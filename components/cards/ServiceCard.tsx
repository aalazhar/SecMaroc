import Link from "next/link";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  icon: IconComponent;
  division: "security" | "cleaning";
}

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  division,
}: ServiceCardProps) {
  const isSecurity = division === "security";

  const accent = {
    line: isSecurity ? "bg-[#C8102E]" : "bg-[#023E8A]",
    number: isSecurity
      ? "group-hover:text-[#C8102E]/10"
      : "group-hover:text-[#023E8A]/10",
    iconBg: isSecurity ? "bg-[#C8102E]/10" : "bg-[#023E8A]/10",
    iconHover: isSecurity
      ? "group-hover:bg-[#C8102E]/20"
      : "group-hover:bg-[#023E8A]/20",
    border: isSecurity ? "border-[#C8102E]/20" : "border-[#023E8A]/20",
    borderHover: isSecurity
      ? "group-hover:border-[#C8102E]"
      : "group-hover:border-[#023E8A]",
    text: isSecurity ? "text-[#C8102E]" : "text-[#023E8A]",
  };

  return (
    <article className="group relative h-full overflow-hidden bg-[#EDE9DF] p-8 sm:p-10 transition-all duration-300 hover:bg-[#E8E4D9]">
      {/* Top Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] ${accent.line} scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}
      />

      {/* Number */}
      <span
        className={`absolute top-6 right-6 font-['Bebas_Neue'] text-5xl text-black/5 transition ${accent.number}`}
      >
        {String(number).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className={`
          w-14 h-14
          mb-6
          flex items-center justify-center
          transition duration-300
          ${accent.iconBg}
          ${accent.border}
          ${accent.iconHover}
          ${accent.borderHover}
          border
        `}
      >
        <Icon className={`w-6 h-6 ${accent.text}`} strokeWidth={1.5} />
      </div>

      {/* Division */}
      <p
        className={`mb-2 text-[10px] font-semibold uppercase tracking-[3px] ${accent.text}`}
      >
        {isSecurity ? "Sécurité privée" : "Nettoyage professionnel"}
      </p>

      {/* Title */}
      <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#023E8A] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm font-light leading-7 text-black/50">
        {description}
      </p>

      {/* CTA */}
      <Link
        href="#contact"
        className={`mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-bold transition-all duration-300 group-hover:gap-4 ${accent.text}`}
      >
        Demander un devis
        <ArrowIcon />
      </Link>
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
