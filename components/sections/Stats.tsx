"use client";

import Container from "@/components/ui/Container";
import Counter from "@/components/animations/Counter";

import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="bg-[#C8102E] grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} number={stat.value} label={stat.label} />
      ))}
    </section>
  );
}

function StatItem({
  number,
  label,
}: {
  number: number | string;
  label: string;
}) {
  return (
    <div className="py-8 px-5 text-center border-r border-white/20 last:border-r-0 hover:bg-[#A50D26] transition">
      <div className="font-['Bebas_Neue'] text-5xl leading-none text-white">
        {typeof number === "number" ? <Counter value={number} /> : number}
      </div>

      <span className="block mt-2 uppercase tracking-[2px] text-[11px] font-semibold text-white/70">
        {label}
      </span>
    </div>
  );
}