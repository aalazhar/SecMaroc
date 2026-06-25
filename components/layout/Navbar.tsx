"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Pourquoi EDEN BACO",
    href: "#pourquoi",
  },
  {
    label: "Nos Clients",
    href: "#clients",
  },
  { label: "Contact", 
    href: "#contact" 
  }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F4F1E8]/95 shadow-sm" : "bg-[#F4F1E8]/90"
      } backdrop-blur-xl border-b border-black/10`}
    >
      <Container>
        <div className="h-[96px] flex items-center justify-between">
          {/* LOGO */}

          <Link href="/" onClick={() => setOpen(false)}>
            <Logo src="/images/logo/EdenLogoNavbar.png" />
          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}

            <Link href="#contact">
              <Button>Demander un devis</Button>
            </Link>
          </nav>

          {/* MOBILE BUTTON */}

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span
              className={`w-6 h-[2px] bg-[#1E1E1C] transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-[#1E1E1C] transition ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-[#1E1E1C] transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-5 pt-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="uppercase text-xs tracking-[2px] text-black/60 hover:text-[#C8102E] transition"
              >
                {item.label}
              </Link>
            ))}

            <Link href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Demander un devis</Button>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative text-[13px] uppercase tracking-[1px] font-medium text-black/50 hover:text-[#1E1E1C] transition"
    >
      {label}

      <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[#C8102E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}