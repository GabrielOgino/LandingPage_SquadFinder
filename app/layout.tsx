import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Squad Finder — Conectando talentos a empresas",
  description:
    "O Squad Finder forma as equipes ideais para cada projeto usando algoritmos inteligentes. Conecte talentos acadêmicos a empresas que fazem a diferença.",
  keywords: ["squad finder", "talentos", "estudantes", "empresas", "matchmaking", "squads"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
