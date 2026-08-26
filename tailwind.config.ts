import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        surface: "#0A0F24",
        primary: "#00E5FF",
        secondary: "#7B61FF",
        accent: "#00FFB3",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.12), transparent 60%)",
        "aurora":
          "linear-gradient(120deg, rgba(0,229,255,0.25), rgba(123,97,255,0.25), rgba(0,255,179,0.2))",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,229,255,0.25)",
        "glow-accent": "0 0 40px rgba(0,255,179,0.25)",
        "glow-secondary": "0 0 40px rgba(123,97,255,0.3)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
