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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/Cta";
import Equipements from "@/components/sections/Equipements";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Stats />

        <Services />

        <WhyUs />

        <Clients />
        
        <Equipements />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
