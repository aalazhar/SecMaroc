// // import Container from "@/components/ui/Container";

// // import DivisionCard from "./DivisionCard";
// // import { divisions } from "@/data/divisions";
// // import type { ServiceType } from "@/data/services";

// // // import { divisions } from "@/data/divisions";

// // interface Props {
// //   onSelect: (tab: ServiceType) => void;
// // }

// // export default function Divisions({ onSelect }: Props) {
// //   return (
// //     <section
// //       id="divisions"
// //       className="
// //         py-28
// //         bg-[#F4F1E8]
// //       "
// //     >
// //       <Container>
// //         <div
// //           className="
// //             max-w-xl
// //             mb-14
// //           "
// //         >
// //           <p
// //             className="
// //               uppercase
// //               tracking-[4px]
// //               text-xs
// //               font-semibold
// //               text-[#C8102E]
// //             "
// //           >
// //             Nos métiers
// //           </p>

// //           <h2
// //             className="
// //               mt-4
// //               font-['Bebas_Neue']
// //               text-6xl
// //               tracking-wide
// //               text-[#023E8A]
// //             "
// //           >
// //             EDEN BACO GROUP
// //           </h2>

// //           <p
// //             className="
// //               mt-5
// //               leading-8
// //               text-black/50
// //             "
// //           >
// //             Deux expertises complémentaires, une seule exigence de qualité.
// //           </p>
// //         </div>

// //         <div
// //           className="
// //             grid
// //             md:grid-cols-2
// //             gap-8
// //           "
// //         >
// //           {divisions.map((division) => (
// //             <DivisionCard
// //               key={division.id}
// //               division={division}
// //               onSelect={onSelect}
// //             />
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // }

// "use client";

// import Container from "@/components/ui/Container";

// import DivisionCard from "./DivisionCard";

// import { divisions } from "@/data/divisions";

// import type { ServiceType } from "@/data/services";

// interface Props {
//   onSelect?: (tab: ServiceType) => void;
// }

// export default function Divisions({ onSelect }: Props) {
//   const handleSelect = (tab: ServiceType) => {
//     onSelect?.(tab);

//     setTimeout(() => {
//       document.getElementById("services")?.scrollIntoView({
//         behavior: "smooth",
//       });
//     }, 100);
//   };

//   return (
//     <section id="divisions" className="py-28 bg-[#F4F1E8]">
//       <Container>
//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-8
//           "
//         >
//           {divisions.map((division) => (
//             <DivisionCard
//               key={division.id}
//               division={division}
//               onSelect={handleSelect}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

// Divisions.tsx
"use client";

import Container from "@/components/ui/Container";
import DivisionCard from "./DivisionCard";
import { divisions } from "@/data/divisions";
import type { ServiceType } from "@/data/services";

interface Props {
  onSelect?: (tab: ServiceType) => void;
}

export default function Divisions({ onSelect }: Props) {
  const handleSelect = (tab: ServiceType) => {
    onSelect?.(tab);

    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section id="divisions" className="py-28 bg-[#F4F1E8]">
      <Container>
        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          md:gap-8
          "
        >
          {divisions.map((division) => (
            <DivisionCard
              key={division.id}
              division={division}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}