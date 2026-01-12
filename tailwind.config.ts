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
        background: {
          DEFAULT: "#020617",
          light: "#0F172A",
        },
        cta: "#22D3EE",
        text: "#E5E7EB",
        panel: "#020617",
      },
    },
  },
  plugins: [],
};
export default config;
