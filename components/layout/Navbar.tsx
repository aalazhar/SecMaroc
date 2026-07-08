// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// import Logo from "@/components/ui/Logo";
// import Button from "@/components/ui/Button";
// import Container from "@/components/ui/Container";

// const navLinks = [
//   {
//     label: "Services",
//     href: "#services",
//   },
//   {
//     label: "Pourquoi EDEN BACO",
//     href: "#pourquoi",
//   },
//   {
//     label: "Nos Clients",
//     href: "#clients",
//   },
//   { label: "Contact",
//     href: "#contact"
//   }
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-[#F4F1E8]/95 shadow-sm" : "bg-[#F4F1E8]/90"
//       } backdrop-blur-xl border-b border-black/10`}
//     >
//       <Container>
//         <div className="h-[96px] flex items-center justify-between">
//           {/* LOGO */}

//           <Link href="/" onClick={() => setOpen(false)}>
//             <Logo src="/images/logo/EdenLogo_Blue_full.png" />
//           </Link>

//           {/* DESKTOP MENU */}

//           <nav className="hidden lg:flex items-center gap-9">
//             {navLinks.map((item) => (
//               <NavItem key={item.href} {...item} />
//             ))}

//             <Link href="#contact">
//               <Button>Demander un devis</Button>
//             </Link>
//           </nav>

//           {/* MOBILE BUTTON */}

//           <button
//             aria-label="Menu"
//             onClick={() => setOpen(!open)}
//             className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
//           >
//             <span
//               className={`w-6 h-[2px] bg-[#1E1E1C] transition ${
//                 open ? "rotate-45 translate-y-2" : ""
//               }`}
//             />

//             <span
//               className={`w-6 h-[2px] bg-[#1E1E1C] transition ${
//                 open ? "opacity-0" : ""
//               }`}
//             />

//             <span
//               className={`w-6 h-[2px] bg-[#1E1E1C] transition ${
//                 open ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* MOBILE MENU */}

//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             open ? "max-h-96 pb-6" : "max-h-0"
//           }`}
//         >
//           <nav className="flex flex-col gap-5 pt-4">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="uppercase text-xs tracking-[2px] text-black/60 hover:text-[#C8102E] transition"
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link href="#contact" onClick={() => setOpen(false)}>
//               <Button className="w-full">Demander un devis</Button>
//             </Link>
//           </nav>
//         </div>
//       </Container>
//     </header>
//   );
// }

// function NavItem({ label, href }: { label: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="group relative text-[13px] uppercase tracking-[1px] font-medium text-black/50 hover:text-[#1E1E1C] transition"
//     >
//       {label}

//       <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[#C8102E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// import Logo from "@/components/ui/Logo";
// import Button from "@/components/ui/Button";
// import Container from "@/components/ui/Container";

// import { navigation } from "@/data/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     onScroll();

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`
//         fixed inset-x-0 top-0 z-50
//         transition-all duration-300
//         border-b border-black/10
//         backdrop-blur-xl
//         ${
//           scrolled
//             ? "bg-[#F4F1E8]/95 shadow-sm"
//             : "bg-[#F4F1E8]/80"
//         }
//       `}
//     >
//       <Container>
//         <div className="flex h-24 items-center justify-between">

//           <Link href="#hero">
//             <Logo src="/images/logo/EdenLogo_Blue_full.png" />
//           </Link>

//           <nav className="hidden lg:flex items-center gap-8">
//             {navigation.map((item) => (
//               <NavLink
//                 key={item.href}
//                 {...item}
//               />
//             ))}
//           </nav>

//           <div className="hidden lg:block">
//             <Link href="#contact">
//               <Button>
//                 Demander un devis
//               </Button>
//             </Link>
//           </div>

//           <button
//             onClick={() => setOpen(!open)}
//             className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`h-0.5 w-6 bg-[#1E1E1C] transition ${
//                 open ? "translate-y-2 rotate-45" : ""
//               }`}
//             />

//             <span
//               className={`h-0.5 w-6 bg-[#1E1E1C] transition ${
//                 open ? "opacity-0" : ""
//               }`}
//             />

//             <span
//               className={`h-0.5 w-6 bg-[#1E1E1C] transition ${
//                 open ? "-translate-y-2 -rotate-45" : ""
//               }`}
//             />
//           </button>
//         </div>

//         <div
//           className={`
//             overflow-hidden
//             transition-all
//             duration-300
//             lg:hidden
//             ${
//               open
//                 ? "max-h-[500px] pb-6"
//                 : "max-h-0"
//             }
//           `}
//         >
//           <nav className="flex flex-col gap-5 pt-5">

//             {navigation.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="uppercase tracking-[2px] text-xs text-black/60 hover:text-[#023E8A] transition"
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link
//               href="#contact"
//               onClick={() => setOpen(false)}
//             >
//               <Button className="w-full">
//                 Demander un devis
//               </Button>
//             </Link>

//           </nav>
//         </div>
//       </Container>
//     </header>
//   );
// }

// function NavLink({
//   label,
//   href,
// }: {
//   label: string;
//   href: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className="group relative text-[13px] font-medium uppercase tracking-[1px] text-black/60 transition hover:text-[#023E8A]"
//     >
//       {label}

//       <span
//         className="
//           absolute
//           -bottom-1
//           left-0
//           h-px
//           w-full
//           origin-left
//           scale-x-0
//           bg-[#C8102E]
//           transition-transform
//           duration-300
//           group-hover:scale-x-100
//         "
//       />
//     </Link>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// import { useDevisModal } from "@/components/cta/DevisModalContext";

// import Logo from "@/components/ui/Logo";
// import Button from "@/components/ui/Button";
// import Container from "@/components/ui/Container";

// import { navigation } from "@/data/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const { openModal } = useDevisModal();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const closeMenu = () => setOpen(false);

//   return (
//     <header
//       className={`
//         fixed
//         top-0
//         left-0
//         right-0
//         z-50

//         transition-all
//         duration-300

//         border-b
//         border-black/10

//         backdrop-blur-xl

//         ${scrolled ? "bg-[#F4F1E8]/95 shadow-sm" : "bg-[#F4F1E8]/80"}
//       `}
//     >
//       <Container>
//         <div
//           className="
//             flex
//             h-24
//             items-center
//             justify-between
//           "
//         >
//           {/* LOGO */}

//           <Link href="#hero" onClick={closeMenu}>
//             <Logo src="/images/logo/EdenLogo_Blue_full.png" />
//           </Link>

//           {/* DESKTOP */}

//           <nav
//             className="
//               hidden
//               lg:flex
//               items-center
//               gap-9
//             "
//           >
//             {navigation.map((item) => (
//               <NavLink key={item.href} {...item} />
//             ))}
//           </nav>

//           {/* CTA */}

//           <div
//             className="
//               hidden
//               lg:block
//             "
//           >
//             {/* <Link href="#contact">
//               <Button>Obtenir un devis</Button>
//             </Link> */}
//             <Button onClick={openModal}>Demander un devis</Button>
//           </div>

//           {/* MOBILE */}

//           <button
//             onClick={() => setOpen(!open)}
//             className="
//               lg:hidden
//               flex
//               h-10
//               w-10
//               flex-col
//               items-center
//               justify-center
//               gap-1.5
//             "
//             aria-label="menu"
//           >
//             <span
//               className={`
//                 h-[2px]
//                 w-6
//                 bg-[#1E1E1C]
//                 transition

//                 ${open ? "translate-y-2 rotate-45" : ""}
//               `}
//             />

//             <span
//               className={`
//                 h-[2px]
//                 w-6
//                 bg-[#1E1E1C]
//                 transition

//                 ${open ? "opacity-0" : ""}
//               `}
//             />

//             <span
//               className={`
//                 h-[2px]
//                 w-6
//                 bg-[#1E1E1C]
//                 transition

//                 ${open ? "-translate-y-2 rotate-45" : ""}
//               `}
//             />
//           </button>
//         </div>

//         {/* MOBILE MENU */}

//         <div
//           className={`
//             lg:hidden
//             overflow-hidden
//             transition-all
//             duration-300

//             ${open ? "max-h-[500px] pb-6" : "max-h-0"}

//           `}
//         >
//           <nav
//             className="
//               flex
//               flex-col
//               gap-5
//               pt-5
//             "
//           >
//             {navigation.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={closeMenu}
//                 className="
//                   uppercase
//                   tracking-[2px]
//                   text-xs
//                   text-black/60
//                   hover:text-[#023E8A]
//                   transition
//                 "
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link href="#contact" onClick={closeMenu}>
//               <Button className="w-full">Obtenir un devis</Button>
//             </Link>
//           </nav>
//         </div>
//       </Container>
//     </header>
//   );
// }

// function NavLink({ label, href }: { label: string; href: string }) {
//   return (
//     <Link
//       href={href}
//       className="
//       group
//       relative

//       text-[13px]
//       font-medium
//       uppercase
//       tracking-[1px]

//       text-black/60

//       transition

//       hover:text-[#023E8A]
//     "
//     >
//       {label}

//       <span
//         className="
//         absolute
//         -bottom-1
//         left-0

//         h-px

//         w-full

//         origin-left

//         scale-x-0

//         bg-[#C8102E]

//         transition-transform

//         duration-300

//         group-hover:scale-x-100
//       "
//       />
//     </Link>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useDevisModal } from "@/components/cta/DevisModalContext";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { openModal } = useDevisModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        transition-all
        duration-300

        border-b
        border-[#0EA5E9]/10

        backdrop-blur-xl

        ${scrolled ? "bg-[#F0F6FC]/95 shadow-sm shadow-[#0EA5E9]/5" : "bg-[#F0F6FC]/80"}
      `}
    >
      <Container>
        <div
          className="
            flex
            h-24
            items-center
            justify-between
          "
        >
          {/* LOGO */}

          <Link
            href="#hero"
            onClick={closeMenu}
            className="transition-transform duration-300 hover:scale-[1.03]"
          >
            <Logo src="/images/logo/EdenLogoOfficial.png" />
          </Link>

          {/* DESKTOP */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-9
            "
          >
            {navigation.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          {/* CTA */}

          <div
            className="
              hidden
              lg:block
            "
          >
            <Button onClick={openModal}>Demander un devis</Button>
          </div>

          {/* MOBILE */}

          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-1.5
            "
            aria-label="menu"
          >
            <span
              className={`
                h-[2px]
                w-6
                bg-[#1E1E1C]
                transition-all
                duration-300

                ${open ? "translate-y-2 rotate-45 bg-[#0EA5E9]" : ""}
              `}
            />

            <span
              className={`
                h-[2px]
                w-6
                bg-[#1E1E1C]
                transition-all
                duration-300

                ${open ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                h-[2px]
                w-6
                bg-[#1E1E1C]
                transition-all
                duration-300

                ${open ? "-translate-y-2 -rotate-45 bg-[#0EA5E9]" : ""}
              `}
            />
          </button>
        </div>

        {/* MOBILE MENU */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-out

            ${open ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav
            className="
              flex
              flex-col
              gap-5
              pt-5
            "
          >
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`
                  uppercase
                  tracking-[2px]
                  text-xs
                  text-black/60
                  hover:text-[#0EA5E9]
                  transition-all
                  duration-300

                  ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}
                `}
              >
                {item.label}
              </Link>
            ))}

            <Link href="#contact" onClick={closeMenu}>
              <Button className="w-full">Obtenir un devis</Button>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="
        group
        relative

        text-[13px]
        font-medium
        uppercase
        tracking-[1px]

        text-black/60

        transition-colors
        duration-300

        hover:text-[#0EA5E9]
      "
    >
      {label}

      <span
        className="
          absolute
          -bottom-1
          left-0

          h-[2px]
          w-full

          origin-left
          scale-x-0

          rounded-full
          bg-gradient-to-r
          from-[#0EA5E9]
          to-[#C8102E]

          shadow-[0_0_8px_rgba(14,165,233,0.6)]

          transition-transform
          duration-300
          ease-out

          group-hover:scale-x-100
        "
      />
    </Link>
  );
}
