import Button from "@/components/ui/Button";

import { PhoneIcon } from "@/components/icons";

export default function CTA() {
  return (
    <section
      id="contact"
      className="
relative
py-24
bg-dark
text-center
overflow-hidden
"
    >
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="font-bebas text-5xl md:text-7xl text-navy leading-none tracking-wide">
          Prêt à sécuriser
          <br />
          votre activité ?
        </h2>

        <p className="mt-6 text-white/60 text-base leading-8 max-w-xl mx-auto">
          Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos
          besoins en sécurité. Nos experts vous répondent sous 24h.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button>Demander un devis gratuit</Button>

          <Button variant="outline">Nous appeler</Button>
        </div>

        <div className="mt-8 flex justify-center items-center gap-3 text-white/60 text-sm">
          <PhoneIcon className="w-5 h-5 text-red" />

          <span>
            Disponible 24h/24 —
            <strong className="text-white text-lg ml-2">
              +212 5 22 41 68 68
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
}
