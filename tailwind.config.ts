import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201b",
        mist: "#f5f7f4",
        sage: "#7d967f",
        clay: "#c9846f",
        night: "#26324a"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 45px rgba(23, 32, 27, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
