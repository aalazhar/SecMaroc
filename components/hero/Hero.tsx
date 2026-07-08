"use client";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import HeroBackground from "./HeroBackground";
import HeroSlide from "./HeroSlide";
import { heroSlides } from "@/data/hero";
import type { ServiceType } from "@/data/services";

interface Props {
  onSelect: (type: ServiceType) => void;
}

export default function Hero({ onSelect }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = heroSlides[activeIndex];

  const handleSelect = (type: ServiceType) => {
    onSelect(type);

    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 120);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="
        overflow-hidden
        min-h-screen
        pt-24
        bg-[#F0F6FC]
        relative
      "
    >
      {/* AURORA GLOW BLOBS — living background */}
      <div
        aria-hidden
        className="
          h-[420px] w-[420px]
          bg-[radial-gradient(circle,rgba(14,165,233,0.20),transparent_70%)]
          rounded-full
          pointer-events-none animate-aurora
          absolute -top-32 -left-24 blur-3xl
        "
      />

      <div
        aria-hidden
        style={{ animationDelay: "3s" }}
        className="
          h-[480px] w-[480px]
          bg-[radial-gradient(circle,rgba(200,16,46,0.10),transparent_70%)]
          rounded-full
          pointer-events-none animate-aurora
          absolute top-1/3 -right-32 blur-3xl
        "
      />

      <div
        aria-hidden
        style={{ animationDelay: "6s" }}
        className="
          h-[360px] w-[360px]
          bg-[radial-gradient(circle,rgba(20,184,166,0.14),transparent_70%)]
          rounded-full
          pointer-events-none animate-aurora
          absolute bottom-0 left-1/3 blur-3xl
        "
      />

      <HeroBackground />

      <Container>
        <div
          className="
            z-10 flex
            min-h-[calc(100vh-96px)]
            relative items-center
          "
        >
          <HeroSlide slide={activeSlide} onSelect={handleSelect} />
        </div>

        {/* indicators */}

        <div className="absolute z-20 flex gap-3 -translate-x-1/2 bottom-10 left-1/2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              aria-label={`Go to ${slide.id}`}
              onClick={() => setActiveIndex(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500
                ${activeIndex === index
                  ? "w-12 bg-gradient-to-r from-[#0EA5E9] to-[#C8102E] shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                  : "w-5 bg-black/15 hover:bg-black/25"
                }
              `}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
