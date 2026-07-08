// import type { ServiceType } from "@/data/services";

// interface Props {
//   activeTab: ServiceType;

//   setActiveTab: (tab: ServiceType) => void;
// }

// const tabs = [
//   {
//     id: "security" as ServiceType,
//     label: "Sécurité Privée",
//     icon: "🛡️",
//   },

//   {
//     id: "cleaning" as ServiceType,
//     label: "Nettoyage Professionnel",
//     icon: "✨",
//   },
// ];

// export default function ServiceTabs({ activeTab, setActiveTab }: Props) {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         sm:flex-row
//         gap-4
//         mb-14
//       "
//     >
//       {tabs.map((tab) => (
//         <button
//           key={tab.id}
//           onClick={() => setActiveTab(tab.id)}
//           className={`
//             group
//             relative
//             flex
//             items-center
//             gap-3
//             px-8
//             py-5
//             border
//             transition-all
//             duration-300

//             ${
//               activeTab === tab.id
//                 ? `
//                 bg-[#1E1E1C]
//                 text-white
//                 border-[#1E1E1C]
//               `
//                 : `
//                 bg-transparent
//                 text-black/60
//                 border-black/10
//                 hover:border-black/30
//               `
//             }

//           `}
//         >
//           <span
//             className="
//               text-xl
//             "
//           >
//             {tab.icon}
//           </span>

//           <span
//             className="
//               uppercase
//               text-xs
//               tracking-[2px]
//               font-semibold
//             "
//           >
//             {tab.label}
//           </span>

//           {/* active line */}

//           <span
//             className={`
//               absolute
//               left-0
//               bottom-0
//               h-[3px]
//               bg-[#C8102E]
//               transition-all
//               duration-300

//               ${activeTab === tab.id ? "w-full" : "w-0"}

//             `}
//           />
//         </button>
//       ))}
//     </div>
//   );
// }


// "use client";

// import type { ServiceType } from "@/data/services";

// interface Props {
//   activeTab: ServiceType;
//   setActiveTab: (tab: ServiceType) => void;
// }

// const tabs: { id: ServiceType; label: string; color: string }[] = [
//   {
//     id: "security",
//     label: "Sécurité Privée",
//     color: "#023E8A",
//   },
//   {
//     id: "cleaning",
//     label: "Nettoyage Professionnel",
//     color: "#C8102E",
//   },
// ];

// function TabIcon({ id, color }: { id: ServiceType; color: string }) {
//   const common = {
//     width: 18,
//     height: 18,
//     viewBox: "0 0 24 24",
//     fill: "none",
//     stroke: color,
//     strokeWidth: 1.6,
//     strokeLinecap: "round" as const,
//     strokeLinejoin: "round" as const,
//   };

//   if (id === "security") {
//     return (
//       <svg {...common}>
//         <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
//         <path d="M9 12l2 2 4-4" />
//       </svg>
//     );
//   }

//   return (
//     <svg {...common}>
//       <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
//     </svg>
//   );
// }

// export default function ServiceTabs({ activeTab, setActiveTab }: Props) {
//   return (
//     <div className="relative mb-14 border-b border-black/10">
//       <div className="flex gap-8 sm:gap-14">
//         {tabs.map((tab) => {
//           const isActive = activeTab === tab.id;

//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className="
//                 group
//                 relative
//                 flex
//                 items-center
//                 gap-2.5
//                 -mx-3
//                 px-3
//                 pt-2
//                 pb-5
//                 rounded-t-sm
//                 transition-colors
//                 duration-300
//                 hover:bg-[#FBF8F1]
//               "
//             >
//               <span
//                 className="transition-opacity duration-300"
//                 style={{ opacity: isActive ? 1 : 0.4 }}
//               >
//                 <TabIcon id={tab.id} color={isActive ? tab.color : "#1E1E1C"} />
//               </span>

//               <span
//                 className={`
//                   uppercase
//                   text-xs
//                   sm:text-[13px]
//                   tracking-[2px]
//                   font-semibold
//                   whitespace-nowrap
//                   transition-colors
//                   duration-300
//                   ${isActive ? "text-[#1E1E1C]" : "text-black/40 group-hover:text-black/60"}
//                 `}
//               >
//                 {tab.label}
//               </span>

//               {/* active indicator */}
//               <span
//                 className="absolute left-3 right-3 -bottom-[1px] h-[2px] transition-all duration-300 origin-left"
//                 style={{
//                   transform: isActive ? "scaleX(1)" : "scaleX(0)",
//                   backgroundColor: tab.color,
//                 }}
//               />
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import type { ServiceType } from "@/data/services";

// interface Props {
//   activeTab: ServiceType;
//   setActiveTab: (tab: ServiceType) => void;
// }

// const tabs: { id: ServiceType; label: string; color: string }[] = [
//   {
//     id: "security",
//     label: "Sécurité Privée",
//     color: "#023E8A",
//   },
//   {
//     id: "cleaning",
//     label: "Nettoyage Professionnel",
//     color: "#C8102E",
//   },
// ];

// function TabIcon({ id, color }: { id: ServiceType; color: string }) {
//   const common = {
//     width: 20,
//     height: 20,
//     viewBox: "0 0 24 24",
//     fill: "none",
//     stroke: color,
//     strokeWidth: 1.4,
//     strokeLinecap: "round" as const,
//     strokeLinejoin: "round" as const,
//   };

//   if (id === "security") {
//     return (
//       <svg {...common}>
//         <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
//         <path d="M9 12l2 2 4-4" />
//       </svg>
//     );
//   }

//   return (
//     <svg {...common}>
//       <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
//     </svg>
//   );
// }

// export default function ServiceTabs({ activeTab, setActiveTab }: Props) {
//   return (
//     <div className="w-full border-y border-black/10">
//       <div className="grid grid-cols-2 divide-x divide-black/10">
//         {tabs.map((tab) => {
//           const isActive = activeTab === tab.id;

//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className="
//                 group
//                 relative
//                 flex
//                 flex-col
//                 items-center
//                 justify-center
//                 gap-3
//                 py-9
//                 sm:py-12
//                 transition-colors
//                 duration-500
//               "
//             >
//               <span
//                 className="transition-all duration-500"
//                 style={{ opacity: isActive ? 1 : 0.35 }}
//               >
//                 <TabIcon id={tab.id} color={isActive ? tab.color : "#1E1E1C"} />
//               </span>

//               <span
//                 className={`
//                   uppercase
//                   text-[11px]
//                   sm:text-xs
//                   tracking-[3px]
//                   font-medium
//                   whitespace-nowrap
//                   transition-colors
//                   duration-500
//                   ${isActive ? "text-[#1E1E1C]" : "text-black/35 group-hover:text-black/55"}
//                 `}
//               >
//                 {tab.label}
//               </span>

//               {/* centered active indicator */}
//               <span
//                 className="h-[2px] transition-all duration-500 ease-out"
//                 style={{
//                   width: isActive ? "28px" : "0px",
//                   backgroundColor: tab.color,
//                 }}
//               />
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import type { ServiceType } from "@/data/services";

// interface Props {
//   activeTab: ServiceType;
//   setActiveTab: (tab: ServiceType) => void;
// }

// const tabs: { id: ServiceType; label: string; color: string }[] = [
//   {
//     id: "security",
//     label: "Sécurité Privée",
//     color: "#023E8A",
//   },
//   {
//     id: "cleaning",
//     label: "Nettoyage Professionnel",
//     color: "#C8102E",
//   },
// ];

// function TabIcon({ id, color }: { id: ServiceType; color: string }) {
//   const common = {
//     width: 24,
//     height: 24,
//     viewBox: "0 0 24 24",
//     fill: "none",
//     stroke: color,
//     strokeWidth: 1.4,
//     strokeLinecap: "round" as const,
//     strokeLinejoin: "round" as const,
//   };

//   if (id === "security") {
//     return (
//       <svg {...common}>
//         <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
//         <path d="M9 12l2 2 4-4" />
//       </svg>
//     );
//   }

//   return (
//     <svg {...common}>
//       <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
//     </svg>
//   );
// }

// export default function ServiceTabs({ activeTab, setActiveTab }: Props) {
//   return (
//     <div className="w-full border-y border-black/10">
//       <div className="grid grid-cols-2 divide-x divide-black/10">
//         {tabs.map((tab) => {
//           const isActive = activeTab === tab.id;

//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className="
//                 group
//                 relative
//                 flex
//                 flex-col
//                 items-center
//                 justify-center
//                 gap-3.5
//                 py-9
//                 sm:py-12
//                 cursor-pointer
//                 transition-transform
//                 duration-300
//                 hover:-translate-y-[2px]
//               "
//             >
//               <span
//                 className="transition-all duration-300"
//                 style={{ opacity: isActive ? 1 : 0.4 }}
//               >
//                 <TabIcon
//                   id={tab.id}
//                   color={isActive ? tab.color : "#1E1E1C"}
//                 />
//               </span>

//               <span
//                 className={`
//                   uppercase
//                   text-sm
//                   sm:text-base
//                   tracking-[1.5px]
//                   font-semibold
//                   whitespace-nowrap
//                   transition-colors
//                   duration-300
//                   ${isActive ? "text-[#1E1E1C]" : "text-black/45 group-hover:text-black/70"}
//                 `}
//               >
//                 {tab.label}
//               </span>

//               {/* indicator: active = solid, inactive hover = faint preview */}
//               <span
//                 className="h-[2px] rounded-full transition-all duration-300 ease-out"
//                 style={{
//                   width: isActive ? "32px" : "0px",
//                   backgroundColor: tab.color,
//                 }}
//               />
//               {!isActive && (
//                 <span
//                   className="
//                     absolute
//                     bottom-[22px]
//                     sm:bottom-[26px]
//                     h-[2px]
//                     w-0
//                     rounded-full
//                     bg-black/15
//                     transition-all
//                     duration-300
//                     group-hover:w-6
//                   "
//                 />
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import type { ServiceType } from "@/data/services";

// interface Props {
//   activeTab: ServiceType;
//   setActiveTab: (tab: ServiceType) => void;
// }

// const tabs: { id: ServiceType; label: string; color: string }[] = [
//   {
//     id: "security",
//     label: "Sécurité Privée",
//     color: "#C8102E", // was #023E8A — now uses the living sky accent
//   },
//   {
//     id: "cleaning",
//     label: "Nettoyage Professionnel",
//     color: "#0EA5E9",
//   },
// ];

// function TabIcon({ id, color }: { id: ServiceType; color: string }) {
//   const common = {
//     width: 24,
//     height: 24,
//     viewBox: "0 0 24 24",
//     fill: "none",
//     stroke: color,
//     strokeWidth: 1.4,
//     strokeLinecap: "round" as const,
//     strokeLinejoin: "round" as const,
//   };

//   if (id === "security") {
//     return (
//       <svg {...common}>
//         <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
//         <path d="M9 12l2 2 4-4" />
//       </svg>
//     );
//   }

//   return (
//     <svg {...common}>
//       <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
//     </svg>
//   );
// }

// export default function ServiceTabs({ activeTab, setActiveTab }: Props) {
//   return (
//     <div className="w-full border-y border-[#0EA5E9]/15">
//       <div className="grid grid-cols-2 divide-x divide-[#0EA5E9]/15 bg-emerald-400">
//         {tabs.map((tab) => {
//           const isActive = activeTab === tab.id;

//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className="
//               bg-red
//                 group
//                 relative
//                 flex
//                 flex-col
//                 items-center
//                 justify-center
//                 gap-3.5
//                 py-9
//                 sm:py-12
//                 cursor-pointer
//                 transition-all
//                 duration-300
//                 hover:-translate-y-[2px]
//                 hover:bg-[#0EA5E9]/[0.04]
//               "
//             >
//               <span
//                 className="transition-all duration-300"
//                 style={{
//                   opacity: isActive ? 1 : 0.4,
//                   filter: isActive ? `drop-shadow(0 0 6px ${tab.color}66)` : "none",
//                   transform: isActive ? "scale(1.08)" : "scale(1)",
//                 }}
//               >
//                 <TabIcon id={tab.id} color={isActive ? tab.color : "#1E1E1C"} />
//               </span>

//               <span
//                 className={`
//                   uppercase
//                   text-sm
//                   tracking-[1.5px]
//                   font-semibold
//                   whitespace-nowrap
//                   transition-colors
//                   duration-300
//                   ${isActive ? "text-[#1E1E1C]" : "text-black/45 group-hover:text-black/70"}
//                 `}
//               >
//                 {tab.label}
//               </span>

//               {/* active indicator — glowing gradient bar */}
//               <span
//                 className="h-[3px] rounded-full transition-all duration-300 ease-out"
//                 style={{
//                   width: isActive ? "32px" : "0px",
//                   background: `linear-gradient(90deg, ${tab.color}, ${tab.color}99)`,
//                   boxShadow: isActive ? `0 0 10px ${tab.color}80` : "none",
//                 }}
//               />

//               {!isActive && (
//                 <span
//                   className="
//                     absolute
//                     bottom-[22px]
//                     sm:bottom-[26px]
//                     h-[2px]
//                     w-0
//                     rounded-full
//                     bg-black/15
//                     transition-all
//                     duration-300
//                     group-hover:w-6
//                   "
//                 />
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

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
    className: "w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300",
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
                  filter: isActive ? `drop-shadow(0 0 6px ${tab.color}66)` : "none",
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
                  ${isActive ? "text-[#1E1E1C]" : "text-black/45 group-hover:text-black/70"}
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