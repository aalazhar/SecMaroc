"use client"
import type { ServiceType } from "@/data/services";

interface Props {
  activeTab: ServiceType;
  setActiveTab: (tab: ServiceType) => void;
}

const tabs: { id: ServiceType; label: string; color: string }[] = [
  {
    id: "security",
    label: "Sécurité Privée",
    color: "#C8102E",
  },
  {
    id: "cleaning",
    label: "Nettoyage Professionnel",
    color: "#0EA5E9",
  },
];

function TabIcon({ id, color }: { id: ServiceType; color: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className:
      "w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300",
  };

  if (id === "security") {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </svg>
  );
}

export default function ServiceTabs({ activeTab, setActiveTab }: Props) {
  return (
    <div className="w-full border-y border-[#0EA5E9]/15">
      <div className="grid grid-cols-2 divide-x divide-[#0EA5E9]/15">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="
                group
                relative
                flex
                flex-col
                items-center
                justify-center
                gap-2
                sm:gap-2.5
                lg:gap-3.5
                py-5
                sm:py-6
                lg:py-12
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:bg-[#0EA5E9]/[0.04]
              "
            >
              <span
                className="transition-all duration-300"
                style={{
                  opacity: isActive ? 1 : 0.4,
                  filter: isActive
                    ? `drop-shadow(0 0 6px ${tab.color}66)`
                    : "none",
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                }}
              >
                <TabIcon id={tab.id} color={isActive ? tab.color : "#1E1E1C"} />
              </span>

              <span
                className={`
                  uppercase
                  text-[11px]
                  sm:text-xs
                  lg:text-sm
                  tracking-[1px]
                  sm:tracking-[1.2px]
                  lg:tracking-[1.5px]
                  font-semibold
                  whitespace-nowrap
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-[#1E1E1C]"
                      : "text-black/45 group-hover:text-black/70"
                  }
                `}
              >
                {tab.label}
              </span>

              {/* active indicator — glowing gradient bar */}
              <span
                className="h-[2px] sm:h-[2.5px] lg:h-[3px] rounded-full transition-all duration-300 ease-out"
                style={{
                  width: isActive ? "28px" : "0px",
                  background: `linear-gradient(90deg, ${tab.color}, ${tab.color}99)`,
                  boxShadow: isActive ? `0 0 10px ${tab.color}80` : "none",
                }}
              />

              {!isActive && (
                <span
                  className="
                    absolute
                    bottom-[14px]
                    sm:bottom-[16px]
                    lg:bottom-[26px]
                    h-[2px]
                    w-0
                    rounded-full
                    bg-black/15
                    transition-all
                    duration-300
                    group-hover:w-6
                  "
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
