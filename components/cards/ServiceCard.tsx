import Link from "next/link";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  icon: IconComponent;
}

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article className="group relative h-full overflow-hidden bg-[#EDE9DF] p-8 sm:p-10 transition-all duration-300 hover:bg-[#E8E4D9]">
      {/* top red animation */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8102E] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

      {/* number */}
      <span className="absolute top-6 right-6 font-['Bebas_Neue'] text-5xl text-black/5 transition group-hover:text-[#C8102E]/10">
        {String(number).padStart(2, "0")}
      </span>

      {/* icon */}
      <div className="w-14 h-14 mb-6 flex items-center justify-center bg-[#C8102E]/10 border border-[#C8102E]/20 transition duration-300 group-hover:bg-[#C8102E]/20 group-hover:border-[#C8102E]">
        <Icon className="w-6 h-6 text-[#C8102E]" strokeWidth={1.5} />
      </div>

      <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-[#1E1E1C] mb-3">
        {title}
      </h3>

      <p className="text-sm leading-7 font-light text-black/50">
        {description}
      </p>

      <Link
        href="#"
        className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[2px] font-bold text-[#C8102E] transition-all duration-300 group-hover:gap-4"
      >
        En savoir plus
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
