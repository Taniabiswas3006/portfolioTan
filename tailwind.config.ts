import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        editorial: {
          dark: "#0B0A09",
          paper: "#F4EFE8",
          card: "#141311",
          cardLight: "#FFFFFF",
          subtle: "#1C1B18",
          text: "#EDE8DF",
          textLight: "#1A1917",
          muted: "#8A847A",
          mutedLight: "#6B655D",
          hairline: "rgba(237, 232, 223, 0.08)",
          hairlineLight: "rgba(26, 25, 23, 0.1)",
        },
        blush: {
          DEFAULT: "#FF85A1",
          hover: "#FF9DB5",
          soft: "rgba(255, 133, 161, 0.12)",
          ring: "rgba(255, 133, 161, 0.28)",
          glow: "rgba(255, 133, 161, 0.06)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Instrument Serif", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Geist Mono", "monospace"],
      },
      borderRadius: {
        "editorial-sm": "12px",
        "editorial-md": "20px",
        "editorial-lg": "28px",
        "editorial-pill": "9999px",
      },
      letterSpacing: {
        widestEditorial: "0.22em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
