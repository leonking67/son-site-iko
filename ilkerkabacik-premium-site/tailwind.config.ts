import type { Config } from 'tailwindcss';

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002E6B",
        secondary: "#0F6BFF",
        accent: "#C8A24A",
        midnight: "#00162B",
        ice: "#F3F6FA"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15,107,255,0.15)"
      }
    }
  },
  plugins: []
} satisfies Config;