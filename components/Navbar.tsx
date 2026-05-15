"use client";

import { useState, useEffect } from "react";
import { Rocket, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 font-heading text-lg font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--primary)] text-white">
            <Rocket className="w-4 h-4" />
          </span>
          Squad Finder
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("about")}
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            O que é?
          </button>
          <button
            onClick={() => scrollTo("benefits")}
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollTo("how")}
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Como funciona
          </button>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors px-3 py-2">
            Entrar
          </button>
          <button className="text-sm font-semibold bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-light)] transition-colors">
            Cadastrar-se
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[var(--border)] px-4 py-4 space-y-3">
          {["about", "benefits", "how"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] py-2 transition-colors"
            >
              {id === "about" ? "O que é?" : id === "benefits" ? "Benefícios" : "Como funciona"}
            </button>
          ))}
          <div className="flex gap-3 pt-2 border-t border-[var(--border)]">
            <button className="flex-1 text-sm font-medium border border-[var(--border)] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Entrar
            </button>
            <button className="flex-1 text-sm font-semibold bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Cadastrar-se
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
