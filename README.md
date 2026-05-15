# Squad Finder — Landing Page (Next.js)

Landing page responsiva construída com **Next.js 14**, **Tailwind CSS** e **TypeScript**, baseada no design original do repositório SquadFinder.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ícones)
- Fontes: DM Serif Display + DM Sans (Google Fonts)

## 📦 Como rodar

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## 🏗️ Build para produção

```bash
npm run build
npm run start
```

## 📁 Estrutura

```
├── app/
│   ├── globals.css      # Estilos globais + variáveis CSS
│   ├── layout.tsx       # Layout raiz com metadados
│   └── page.tsx         # Página principal
├── components/
│   ├── Navbar.tsx           # Navbar fixa com scroll + mobile
│   ├── HeroSection.tsx      # Hero com animações e CTAs
│   ├── StatsSection.tsx     # Contadores animados
│   ├── AboutSection.tsx     # Seção "O que é?"
│   ├── BenefitsSection.tsx  # Benefícios p/ estudantes e empresas
│   ├── HowItWorksSection.tsx # Passo a passo
│   ├── CTASection.tsx       # Call to action final
│   └── Footer.tsx           # Rodapé
└── public/
```

## 🎨 Design

- Paleta verde-esmeralda (`hsl(168, 80%, 36%)`) fiel ao original
- Tipografia: DM Serif Display (títulos) + DM Sans (corpo)
- Animações de scroll (IntersectionObserver)
- Totalmente responsivo (mobile-first)
- Efeitos: mesh gradient, blob decorativo, counters animados
