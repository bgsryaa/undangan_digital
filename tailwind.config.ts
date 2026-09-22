import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF6EC",
        cream: "#F5EEDF",
        beige: "#EAD9BB",
        "brown-light": "#B9895A",
        "brown-dark": "#3E2A1B",
        "brown-deep": "#2A1B10",
        gold: "#C6952F",
        "gold-light": "#E4C77A",
        sage: "#AEBBA0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "parang-subtle":
          "repeating-linear-gradient(45deg, rgba(198,149,47,0.05) 0px, rgba(198,149,47,0.05) 2px, transparent 2px, transparent 14px)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
