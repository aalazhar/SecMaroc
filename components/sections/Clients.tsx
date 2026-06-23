import Container from "@/components/ui/Container";

const clients = [
  "ONCF",
  "Marjane",
  "Lydec",
  "CIH Bank",
  "Sofitel",
  "Tanger Med",
  "OCP Group",
  "Attijariwafa",
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-navy-2 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-red mb-4">
            <span className="w-7 h-px bg-red" />
            Ils nous font confiance
            <span className="w-7 h-px bg-red" />
          </p>

          <h2 className="font-bebas text-5xl md:text-6xl leading-none tracking-wide text-dark">
            Des clients qui comptent sur nous
          </h2>
        </div>

        <div className="mt-14 border-y border-black/10 py-10 overflow-hidden">
          <div className="flex gap-20 w-max animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="
font-bebas
text-2xl
tracking-[3px]
text-black/25
hover:text-black/70
transition
"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
