"use client";

import { Rocket, Building2, GraduationCap, ArrowRight, Zap, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden mesh-bg"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, hsl(168, 70%, 85%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(168, 60%, 88%) 0%, transparent 70%)",
          }}
        />
        {/* Decorative grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(168,80%,36%)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating badges (decoration) */}
      <div className="pointer-events-none absolute hidden lg:block top-32 left-16 animate-[float_5s_ease-in-out_infinite]">
        <div className="bg-white/80 backdrop-blur-sm border border-[var(--border)] rounded-xl px-3 py-2 shadow-lg text-xs font-medium text-[var(--muted)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          3 squads formados hoje
        </div>
      </div>
      <div className="pointer-events-none absolute hidden lg:block bottom-40 right-16 animate-[float_7s_ease-in-out_1s_infinite]">
        <div className="bg-white/80 backdrop-blur-sm border border-[var(--border)] rounded-xl px-3 py-2 shadow-lg text-xs font-medium text-[var(--muted)] flex items-center gap-2">
          <GraduationCap className="w-3 h-3 text-[var(--primary)]" />
          1.200+ estudantes cadastrados
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl text-center space-y-7">
        {/* Badge */}
        <div className="inline-flex animate-[fadeUp_0.6s_ease-out_both]">
          <span className="badge-pill">
            <Zap className="w-3.5 h-3.5 text-[var(--primary)]" />
            Matchmaking inteligente de talentos
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--foreground)] animate-[fadeUp_0.7s_ease-out_0.1s_both]"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Conectamos{" "}
          <em className="not-italic" style={{ color: "var(--primary)" }}>
            talentos
          </em>{" "}
          a empresas que fazem a{" "}
          <span className="relative inline-block">
            diferença
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              style={{ height: "8px" }}
            >
              <path
                d="M0,8 Q75,0 150,6 Q225,12 300,4"
                fill="none"
                stroke="hsl(168,80%,60%)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-xl text-base sm:text-lg text-[var(--muted)] leading-relaxed animate-[fadeUp_0.7s_ease-out_0.2s_both]">
          O Squad Finder forma as equipes ideais para cada projeto usando algoritmos inteligentes.
          Encontre seu squad perfeito em minutos — sem fricção, sem ruído.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 animate-[fadeUp_0.7s_ease-out_0.3s_both]">
          <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[var(--primary-light)] transition-all hover:shadow-lg hover:shadow-[hsl(168,80%,36%,0.25)] hover:-translate-y-0.5">
            <Building2 className="w-4 h-4" />
            Sou Empresa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[var(--foreground)] border border-[var(--border)] px-6 py-3.5 rounded-xl font-semibold text-sm hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-md">
            <GraduationCap className="w-4 h-4" />
            Sou Estudante
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Social proof */}
        <p className="text-xs text-[var(--muted)] animate-[fadeUp_0.7s_ease-out_0.4s_both]">
          Gratuito para estudantes · Sem compromisso para empresas
        </p>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 text-[var(--muted)] hover:text-[var(--primary)] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
