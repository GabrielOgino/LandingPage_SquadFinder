"use client";

import { Rocket, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 space-y-4">
            <div
              className="flex items-center gap-2 font-bold text-[var(--foreground)]"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.125rem" }}
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--primary)] text-white">
                <Rocket className="w-3.5 h-3.5" />
              </span>
              Squad Finder
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              Conectando talentos acadêmicos a empresas que transformam ideias em realidade. Matchmaking inteligente, squads de alto impacto.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Mail, href: "#", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">Plataforma</h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {[
                { label: "O que é?", id: "about" },
                { label: "Benefícios", id: "benefits" },
                { label: "Como funciona", id: "how" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-[var(--foreground)] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[var(--foreground)]">Conta</h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {["Login", "Cadastro", "Recuperar senha", "Suporte"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[var(--foreground)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Squad Finder. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
