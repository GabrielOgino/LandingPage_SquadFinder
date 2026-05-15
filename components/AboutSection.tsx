"use client";

import { useEffect, useRef } from "react";
import { Target, Users, Layers } from "lucide-react";

const pillars = [
  {
    icon: Target,
    label: "Match Inteligente",
    desc: "Algoritmos que combinam perfis técnicos e comportamentais com precisão cirúrgica.",
  },
  {
    icon: Users,
    label: "Squads sob Medida",
    desc: "Equipes multidisciplinares montadas especificamente para cada projeto e empresa.",
  },
  {
    icon: Layers,
    label: "Gestão Simplificada",
    desc: "Dashboard unificado para acompanhar squads, candidatos e progresso em tempo real.",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--card)]">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="badge-pill mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            Sobre a plataforma
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            O que é o{" "}
            <span style={{ color: "var(--primary)" }}>Squad Finder</span>?
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Uma plataforma inteligente que conecta talentos acadêmicos a empresas, formando as equipes
            ideais para cada tipo de projeto. Através de algoritmos avançados de matchmaking,
            analisamos habilidades, experiências e objetivos para criar combinações perfeitas.
          </p>
          <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed">
            Empresas encontram os profissionais certos, e estudantes ganham oportunidades reais de
            crescimento — tudo de forma rápida, transparente e eficiente.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className="card-hover group flex flex-col items-center text-center p-7 rounded-2xl border border-[var(--border)] bg-white"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="flex items-center justify-center w-13 h-13 rounded-xl mb-5 transition-colors group-hover:bg-[hsl(168,80%,36%,0.1)]"
                style={{
                  width: "52px",
                  height: "52px",
                  background: "var(--primary-faint)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <h3
                className="text-base font-semibold text-[var(--foreground)] mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {label}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
