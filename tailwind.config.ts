import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(168, 80%, 36%)",
          foreground: "#ffffff",
          light: "hsl(168, 80%, 42%)",
        },
        accent: {
          DEFAULT: "hsl(168, 60%, 92%)",
          foreground: "hsl(168, 80%, 20%)",
        },
        background: "hsl(210, 20%, 98%)",
        foreground: "hsl(220, 25%, 10%)",
        card: "hsl(0, 0%, 100%)",
        border: "hsl(220, 13%, 91%)",
        muted: {
          DEFAULT: "hsl(210, 15%, 93%)",
          foreground: "hsl(220, 10%, 46%)",
        },
      },
      fontFamily: {
        heading: ["'DM Serif Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        bounce: "bounce 1.5s infinite",
        "pulse-slow": "pulse 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
