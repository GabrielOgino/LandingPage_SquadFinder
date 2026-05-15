"use client";

import { useEffect, useRef } from "react";
import { Award, Briefcase, Users, Zap, Target, DollarSign, GraduationCap, Building2 } from "lucide-react";

const studentBenefits = [
  {
    icon: Award,
    title: "Crie seu Portfólio",
    desc: "Construa um portfólio profissional com projetos reais que impressionam recrutadores e abrem portas.",
  },
  {
    icon: Briefcase,
    title: "Trabalhe em Projetos Reais",
    desc: "Participe de desafios reais de empresas e aplique o que aprendeu na prática desde cedo.",
  },
  {
    icon: Users,
    title: "Ganhe Experiência em Equipe",
    desc: "Desenvolva habilidades colaborativas trabalhando em squads multidisciplinares e diversos.",
  },
];

const companyBenefits = [
  {
    icon: Zap,
    title: "Formação Automática de Squads",
    desc: "Nossos algoritmos montam a equipe ideal com base nas necessidades específicas do seu projeto.",
  },
  {
    icon: Target,
    title: "Talentos Qualificados sob Medida",
    desc: "Acesse estudantes com habilidades específicas, filtrados e ranqueados para cada vaga.",
  },
  {
    icon: DollarSign,
    title: "Gestão de Custos Otimizada",
    desc: "Reduza custos de recrutamento e onboarding com squads prontos para entregar resultados.",
  },
];

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  desc,
  accent,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  accent: "green" | "primary";
  delay: number;
}) {
  const bg = accent === "green" ? "var(--primary-faint)" : "hsl(168,80%,36%,0.08)";
  const color = "var(--primary)";

  return (
    <div
      className="card-hover group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-white"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-colors"
        style={{ background: bg }}
      >
        <Icon className="w-5 h-5 transition-colors" style={{ color }} />
      </div>
      <h3
        className="text-base font-semibold text-[var(--foreground)] mb-2"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
    </div>
  );
}

function SectionHeader({
  badge,
  icon: Icon,
  title,
  subtitle,
}: {
  badge: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10">
      <span className="badge-pill mb-4 inline-flex">
        <Icon className="w-3.5 h-3.5" style={{ color: "var(--primary)" }} />
        {badge}
      </span>
      <h2
        className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {title}
      </h2>
      {subtitle && <p className="text-[var(--muted)] mt-3 text-sm max-w-md mx-auto">{subtitle}</p>}
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Students */}
        <RevealSection>
          <SectionHeader
            badge="Para Estudantes"
            icon={GraduationCap}
            title="Impulsione sua carreira"
            subtitle="Saia da teoria e entre no mercado com projetos reais no currículo."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {studentBenefits.map((b, i) => (
              <BenefitCard key={b.title} {...b} accent="green" delay={i * 100} />
            ))}
          </div>
        </RevealSection>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border)] bg-white"
            style={{ color: "var(--primary)" }}
          >
            ✦
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Companies */}
        <RevealSection delay={100}>
          <SectionHeader
            badge="Para Empresas"
            icon={Building2}
            title="Monte equipes de alto impacto"
            subtitle="Deixe o algoritmo trabalhar por você. Foque no produto, não no recrutamento."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {companyBenefits.map((b, i) => (
              <BenefitCard key={b.title} {...b} accent="primary" delay={i * 100} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
