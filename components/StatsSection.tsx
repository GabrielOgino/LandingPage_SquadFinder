"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1200, suffix: "+", label: "Estudantes cadastrados" },
  { value: 85, suffix: "+", label: "Empresas parceiras" },
  { value: 320, suffix: "+", label: "Squads formados" },
  { value: 98, suffix: "%", label: "Taxa de satisfação" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "var(--primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="space-y-1">
              <div
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="text-sm opacity-80 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
