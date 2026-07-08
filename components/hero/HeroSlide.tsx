import type { HeroSlide as HeroSlideType } from "@/data/hero";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import { ServiceType } from "@/data/services";

interface Props {
  slide: HeroSlideType;
  onSelect?: (type: ServiceType) => void;
}

export default function HeroSlide({ slide, onSelect }: Props) {
  return (
    <div
      key={slide.id}
      className="
        w-full
        grid
        lg:grid-cols-2
        gap-12
        items-center
        ml-10
        animate-[heroFade_.8s_cubic-bezier(.4,0,.2,1)_forwards]
      "
    >
      {/* LEFT CONTENT */}
      <div className="min-w-0">
        <HeroContent slide={slide} />
      </div>

      {/* RIGHT VISUAL */}
      <div className="hidden lg:flex justify-end min-w-0">
        <HeroVisual type={slide.id} onSelect={onSelect} />
      </div>
    </div>
  );
}