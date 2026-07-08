import Logo from "@/components/ui/Logo";

import { PhoneIcon, MailIcon, LocationIcon } from "@/components/icons";

const services = [
  "Solution de sécurité",
  "Agents de sécurité",
  "Sécurité rapprochée",
  "Sécurité événementielle",
  "Télésurveillance",
  "Maître-chien",
];

const cities = ["Casablanca"];

export default function Footer() {
  return (
    <footer className="bg-[#F4F1E8] py-16 px-6 border-t border-[#1E1E1C]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12">
        <div>
          <Logo src="/images/logo/EdenLogoFooter.png" />

          <div className="mt-6 space-y-3 text-sm text-[#1E1E1C]/50">
            <div className="flex gap-3 items-center">
              <PhoneIcon className="w-4 h-4 text-red" />
              +212 661 370 673 / +212 661 187 105
            </div>

            <div className="flex gap-3 items-center">
              <MailIcon className="w-4 h-4 text-red" />
              eden.baco01@gmail.com
            </div>

            <div className="flex gap-3 items-start">
              <LocationIcon className="w-4 h-4 text-red mt-1 shrink-0" />
              <span>
                HAY SALAM 1 GROUPE A, RUE 915
                <br />
                AHL LOUGHLAM 20000, CASABLANCA
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-[#1E1E1C] mb-5">Services</h4>

          <ul className="space-y-3">
            {services.map((item) => (
              <li
                key={item}
                className="text-sm text-[#1E1E1C]/40 hover:text-[#1E1E1C] transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-[#1E1E1C] mb-5">Agences</h4>

          <ul className="space-y-3">
            {cities.map((city) => (
              <li
                key={city}
                className="text-sm text-[#1E1E1C]/40 hover:text-[#1E1E1C] transition"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bebas text-xl text-[#1E1E1C] mb-5">Entreprise</h4>

          <ul className="space-y-3">
            <li className="text-sm text-[#1E1E1C]/40">Qui sommes-nous</li>
            <li className="text-sm text-[#1E1E1C]/40">Nos clients</li>
            <li className="text-sm text-[#1E1E1C]/40">Galerie</li>
            <li className="text-sm text-[#1E1E1C]/40">Contact</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-[#1E1E1C]/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-[#1E1E1C]/30">
        <p>© Eden Baco 2026 — Tous droits réservés.</p>

        <p> · Casablanca · </p>
      </div>
    </footer>
  );
}
