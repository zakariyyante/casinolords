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
          DEFAULT: "#0A0A0F",
          light: "#12121E",
        },
        cta: "#F59E0B",
        text: "#E5E7EB",
        panel: "#0A0A0F",
      },
    },
  },
  plugins: [],
};
export default config;
