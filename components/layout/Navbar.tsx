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

        ${
          scrolled
            ? "bg-[#F0F6FC]/95 shadow-sm shadow-[#0EA5E9]/5"
            : "bg-[#F0F6FC]/80"
        }
      `}
    >
      <Container>
        <div
          className="flex items-center justify-between h-24 "
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
            className="items-center hidden  lg:flex gap-9"
          >
            {navigation.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          {/* CTA */}

          <div
            className="hidden  lg:block"
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
            className="flex flex-col gap-5 pt-5 "
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

                  ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            <Button
              className="w-full"
              onClick={() => {
                closeMenu();
                openModal();
              }}
            >
              Obtenir un devis
            </Button>
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
