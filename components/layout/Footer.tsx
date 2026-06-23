// import Link from "next/link";

// import Logo from "@/components/ui/Logo";
// import Container from "@/components/ui/Container";

// import { PhoneIcon, MailIcon } from "@/components/icons";

// const services = [
//   "Solution de sécurité",
//   "Agents de sécurité",
//   "Sécurité rapprochée",
//   "Sécurité événementielle",
//   "Télésurveillance",
//   "Maître-chien",
// ];

// const agencies = [
//   "Casablanca",
//   "Marrakech",
//   "Rabat",
//   "Agadir",
//   "Canada (Laval)",
// ];

// const company = [
//   "Qui sommes-nous",
//   "Nos clients",
//   "Formations",
//   "Galerie",
//   "Actualités",
//   "Contact",
// ];

// export default function Footer() {
//   return (
//     <footer
//       className="
// bg-[#141412]
// border-t
// border-white/10
// "
//     >
//       <Container>
//         <div
//           className="
// py-16

// grid

// grid-cols-1

// md:grid-cols-2

// xl:grid-cols-4

// gap-12
// "
//         >
//           {/* BRAND */}

//           <div>
//             <div
//               className="
// mb-5
// "
//             >
//               <Logo />
//             </div>

//             <p
//               className="
// max-w-[260px]

// text-sm

// leading-7

// font-light

// text-white/40

// mb-6
// "
//             >
//               Votre spécialiste en sécurité privée, gardiennage et surveillance
//               au Maroc depuis plus de 12 ans.
//             </p>

//             <div
//               className="
// space-y-3
// "
//             >
//               <FooterContact icon={<PhoneIcon />} text="+212 5 22 41 68 68" />

//               <FooterContact icon={<MailIcon />} text="contact@grsmaroc.ma" />
//             </div>
//           </div>

//           {/* SERVICES */}

//           <FooterColumn title="Services" items={services} />

//           {/* AGENCIES */}

//           <FooterColumn title="Agences" items={agencies} />

//           {/* COMPANY */}

//           <FooterColumn title="Entreprise" items={company} />
//         </div>

//         {/* BOTTOM */}

//         <div
//           className="
// border-t

// border-white/10

// py-6

// flex

// flex-col

// md:flex-row

// justify-between

// gap-4
// "
//         >
//           <p
//             className="
// text-xs

// text-white/25
// "
//           >
//             © GRS Maroc 2025 — Tous droits réservés.
//             <span
//               className="
// text-[#C8102E]
// "
//             >
//               Société de sécurité agréée au Maroc
//             </span>
//           </p>

//           <p
//             className="
// text-xs

// text-white/25
// "
//           >
//             Casablanca · Marrakech · Rabat · Agadir · Canada
//           </p>
//         </div>
//       </Container>
//     </footer>
//   );
// }

// function FooterColumn({ title, items }: { title: string; items: string[] }) {
//   return (
//     <div>
//       <h4
//         className="
// font-['Bebas_Neue']

// text-xl

// tracking-[2px]

// text-[#F4F1E8]

// mb-5

// pb-3

// border-b

// border-white/10
// "
//       >
//         {title}
//       </h4>

//       <ul
//         className="
// space-y-3
// "
//       >
//         {items.map((item) => (
//           <li key={item}>
//             <Link
//               href="#"
//               className="
// group

// flex

// items-center

// gap-2

// text-sm

// font-light

// text-white/40

// hover:text-white

// transition

// "
//             >
//               <span
//                 className="
// w-1.5
// h-[1px]

// bg-[#C8102E]
// "
//               />

//               {item}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function FooterContact({
//   icon,
//   text,
// }: {
//   icon: React.ReactNode;
//   text: string;
// }) {
//   return (
//     <div
//       className="
// flex

// items-center

// gap-3

// text-sm

// text-white/40
// "
//     >
//       <span
//         className="
// w-4
// h-4

// text-[#C8102E]

// shrink-0
// "
//       >
//         {icon}
//       </span>

//       <span>{text}</span>
//     </div>
//   );
// }

import Logo from "@/components/ui/Logo";

import { PhoneIcon, MailIcon } from "@/components/icons";

const services = [
  "Solution de sécurité",
  "Agents de sécurité",
  "Sécurité rapprochée",
  "Sécurité événementielle",
  "Télésurveillance",
  "Maître-chien",
];

const cities = ["Casablanca", "Marrakech", "Rabat", "Agadir", "Canada"];

export default function Footer() {
  return (
    <footer className="bg-[#141412] py-16 px-6 border-t border-white/10">
      <div
        className="
max-w-7xl
mx-auto
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-12
"
      >
        <div>
          <Logo />

          <p className="mt-5 text-sm text-white/40 leading-7 max-w-xs">
            Votre spécialiste en sécurité privée, gardiennage et surveillance au
            Maroc.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/50">
            <div className="flex gap-3 items-center">
              <PhoneIcon className="w-4 h-4 text-red" />
              +212 5 22 41 68 68
            </div>

            <div className="flex gap-3 items-center">
              <MailIcon className="w-4 h-4 text-red" />
              contact@grsmaroc.ma
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-white mb-5">Services</h4>

          <ul className="space-y-3">
            {services.map((item) => (
              <li
                key={item}
                className="text-sm text-white/40 hover:text-white transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-white mb-5">Agences</h4>

          <ul className="space-y-3">
            {cities.map((city) => (
              <li
                key={city}
                className="text-sm text-white/40 hover:text-white transition"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-white mb-5">Entreprise</h4>

          <ul className="space-y-3">
            <li className="text-sm text-white/40">Qui sommes-nous</li>

            <li className="text-sm text-white/40">Nos clients</li>

            <li className="text-sm text-white/40">Galerie</li>

            <li className="text-sm text-white/40">Contact</li>
          </ul>
        </div>
      </div>

      <div
        className="
max-w-7xl
mx-auto
mt-14
pt-8
border-t
border-white/10
flex
flex-col
md:flex-row
gap-4
justify-between
text-xs
text-white/30
"
      >
        <p>© GRS Maroc 2026 — Tous droits réservés.</p>

        <p>Casablanca · Marrakech · Rabat · Agadir</p>
      </div>
    </footer>
  );
}
