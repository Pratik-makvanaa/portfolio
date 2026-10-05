"use client";

import React, { useEffect, useRef, useState } from "react";
import { stats } from "@/data/portfolio";

const MagicBento = () => {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/60">More About Me</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
          {stats.map((stat) => (
            <SwissItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const SwissItem = ({ value, suffix, label, description }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const duration = 1200;
    const startTime = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  return (
    <div ref={ref} className="flex flex-col items-start">
      <span className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
        {label}
      </span>
      <h3 className="mb-2 font-sans text-4xl md:text-5xl font-bold tracking-tight leading-none">
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="max-w-xs font-sans text-sm leading-5 text-white/55">{description}</p>
    </div>
  );
};

export default MagicBento;