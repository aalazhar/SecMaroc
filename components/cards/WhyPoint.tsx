import React from "react";

interface Props {
  title: string;
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function WhyPoint({ title, text, icon: Icon }: Props) {
  return (
    <div className="flex gap-5 items-start pb-7 border-b border-black/10 last:border-none last:pb-0">
      <div className="w-10 h-10 min-w-10 flex items-center justify-center bg-red/10 border border-red/20 mt-1">
        <Icon className="w-5 h-5 text-red" />
      </div>

      <div>
        <h3 className="font-bebas text-xl tracking-wide text-[#023e8a] mb-2">
          {title}
        </h3>

        <p className="text-sm text-black/50 font-light leading-7">{text}</p>
      </div>
    </div>
  );
}
