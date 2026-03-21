import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        spaceBlack: "var(--spaceBlack)",
        spaceDark: "var(--spaceDark)",
        lavenderGlow: "var(--lavenderGlow)",
        pinkGlow: "var(--pinkGlow)",
        primaryGlow: "var(--primary)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', scale: '0.8' },
          '50%': { opacity: '1', scale: '1.1' },
        },
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
