"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { ServiceType } from "@/data/services";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Clients from "@/components/sections/Clients";
import Equipements from "@/components/sections/Equipements";
import CTA from "@/components/sections/Cta";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<ServiceType>("security");
  return (
    <>
        <Navbar />

        <main>
          <Hero onSelect={setActiveService} />

          <Stats />

          <Services activeTab={activeService} setActiveTab={setActiveService} />

          <WhyUs />

          <Clients />

          <Equipements />

          <CTA />
          
        </main>

        <Footer />
    </>
  );
}
