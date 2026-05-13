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
        mist: "#f6f8f4",
        foam: "#eef4ed",
        linen: "#fbf7f0",
        sage: "#7b9278",
        clay: "#c47d68",
        night: "#222d41"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 8px 20px rgba(23, 32, 27, 0.05)",
        soft: "0 20px 45px rgba(23, 32, 27, 0.08)",
        card: "0 16px 36px rgba(23, 32, 27, 0.07)",
        lift: "0 22px 52px rgba(23, 32, 27, 0.12)",
        button: "0 10px 22px rgba(23, 32, 27, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
