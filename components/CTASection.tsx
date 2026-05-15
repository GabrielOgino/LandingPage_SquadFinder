"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--background)" }}>
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(168,80%,60%), transparent)" }}
      />

      <div ref={ref} className="reveal max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Decorative blob */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(168,80%,60%) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 space-y-6">
          <span className="badge-pill mb-2 inline-flex">
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--primary)" }} />
            Comece gratuitamente
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Pronto para encontrar seu squad?
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Cadastre-se gratuitamente e comece a conectar talentos a oportunidades reais. Sem
            burocracia, sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all hover:shadow-xl hover:shadow-[hsl(168,80%,36%,0.3)] hover:-translate-y-0.5">
              Começar agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-[var(--border)] text-[var(--foreground)] px-7 py-3.5 rounded-xl font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
              Saiba mais
            </button>
          </div>

          <p className="text-xs text-[var(--muted)]">
            ✓ Grátis para estudantes &nbsp;·&nbsp; ✓ Sem cartão de crédito &nbsp;·&nbsp; ✓ Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}
