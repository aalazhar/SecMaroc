// import Navbar from "@/components/layout/Navbar";
// import Hero from "@/components/sections/Hero";
// // import Stats from "@/components/sections/Stats";
// import Services from "@/components/sections/Services";
// import WhyUs from "@/components/sections/WhyUs";
// import Clients from "@/components/sections/Clients";
// import CTA from "@/components/sections/CTA";
// import Footer from "@/components/layout/Footer";

// export default function HomePage() {
//   return (
//     <main className="overflow-x-hidden bg-[#F4F1E8]">
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Services />
//       <WhyUs />
//       <Clients />
//       <CTA />
//       <Footer />
//     </main>
//   );
// }
"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { ServiceType } from "@/data/services";
// import Hero from "@/components/hero";

// import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
// import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Clients from "@/components/sections/Clients";
import Equipements from "@/components/sections/Equipements";
import CTA from "@/components/sections/Cta";
import Hero from "@/components/hero";
import Divisions from "@/components/divisions";
import Services from "@/components/services";
import { useState } from "react";
import { DevisModalProvider } from "@/components/cta/DevisModalContext";
import DevisModal from "@/components/cta/DevisModal";
// import Hero from "@/components/hero/Hero";

export default function Home() {
  const [activeService, setActiveService] = useState<ServiceType>("security");
  return (
    <>
        <Navbar />

        <main>
          <Hero onSelect={setActiveService} />

          {/* <Divisions onSelect={setActiveService} /> */}

          <Stats />

          <Services activeTab={activeService} setActiveTab={setActiveService} />

          <WhyUs />

          <Clients />

          <Equipements />

          <CTA />
          {/* 



*/}
        </main>

        <Footer />
    </>
  );
}
