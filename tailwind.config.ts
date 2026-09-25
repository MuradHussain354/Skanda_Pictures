import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0c0a08",
        surface: "#161310",
        line: "#2a251e",
        paper: "#f2ecdd",
        muted: "#94897a",
        gold: {
          DEFAULT: "#c69a3c",
          light: "#e0bd6c",
          dim: "#8a6b2c",
        },
        ember: "#9c3b2c",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.16em",
      },
      maxWidth: {
        prose: "38rem",
      },
      transitionTimingFunction: {
        reel: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
