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
        brand: "#10b981",
        "brand-dark": "#059669",
        surface: "#0f172a",
        "surface-light": "#1e293b",
        text: {
          DEFAULT: "#f1f5f9",
          muted: "#94a3b8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
