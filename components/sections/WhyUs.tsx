import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import WhyPoint from "@/components/cards/WhyPoint";

import {whyUs} from "@/data/why-us";


export default function WhyUs() {
  return (
    <section id="pourquoi" className="py-24 bg-[#F4F1E8]">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


          {/* LEFT CONTENT */}

          <div>

            <SectionHeader
              eyebrow="Pourquoi nous choisir"
              title="La sécurité est notre seule priorité"
              description="Depuis plus de 12 ans, GRS Maroc protège les entreprises, institutions et particuliers à travers tout le Royaume."
            />


            <div className="mt-10 space-y-7">

              {whyUs.map((item) => (
                <WhyPoint
                  key={item.title}
                  title={item.title}
                  text={item.description}
                  icon={item.icon}
                />
              ))}

            </div>

          </div>



          {/* RIGHT CARD */}

          <div className="hidden lg:block relative h-[480px]">


            <div className="absolute top-0 left-0 right-[60px] bottom-[60px] bg-[#1E1E1C] p-9 flex flex-col justify-end border border-black/10 overflow-hidden">

              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E]" />


              <p className="uppercase tracking-[3px] text-xs font-semibold text-[#C8102E] mb-2">
                Notre engagement
              </p>


              <h3 className="font-['Bebas_Neue'] text-5xl leading-tight text-[#F4F1E8]">
                Votre sécurité.
                <br />
                Notre réputation.
              </h3>


            </div>




            <div className="absolute right-0 bottom-0 w-[200px] h-[160px] bg-[#C8102E] flex flex-col items-center justify-center text-center">


              <div className="font-['Bebas_Neue'] text-6xl text-white">
                12+
              </div>


              <p className="text-xs uppercase tracking-[2px] text-white/80">
                Ans de confiance
              </p>


            </div>


          </div>



        </div>


      </Container>
    </section>
  );
}