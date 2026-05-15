"use client";

import { useEffect, useRef } from "react";
import { UserPlus, Search, Handshake, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Crie seu perfil",
    desc: "Cadastre-se como empresa ou estudante e preencha suas habilidades, objetivos e preferências.",
  },
  {
    icon: Search,
    step: "02",
    title: "O algoritmo trabalha",
    desc: "Nossa IA analisa todos os perfis e encontra os melhores matches para o seu projeto ou perfil.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Conheça seu squad",
    desc: "Receba sugestões de equipe ou de empresas parceiras — filtre, avalie e aceite as conexões.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Comece a construir",
    desc: "Com o squad formado, é hora de colocar a mão na massa e transformar ideias em realidade.",
  },
];

export default function HowItWorksSection() {
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how" className="py-24 md:py-32 bg-[var(--card)] relative overflow-hidden">
      {/* Decorative BG */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(168,60%,88%) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="reveal max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="badge-pill mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            Processo simples
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Como funciona?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "var(--border)", zIndex: 0 }}
          />

          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div
              key={step}
              className="relative z-10 flex flex-col items-center text-center group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step circle */}
              <div
                className="flex items-center justify-center w-20 h-20 rounded-2xl mb-5 border-2 border-[var(--border)] bg-white shadow-sm transition-all group-hover:border-[var(--primary)] group-hover:shadow-md"
                style={{ position: "relative" }}
              >
                <Icon className="w-8 h-8" style={{ color: "var(--primary)" }} />
                <span
                  className="absolute -top-2.5 -right-2.5 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {i + 1}
                </span>
              </div>
              <h3
                className="text-base font-semibold text-[var(--foreground)] mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
