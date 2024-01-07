import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "noise-bg": 'url("/assets/home/scatteredWave.svg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF3B2D",
        "blue-state": "#3C83EC",
        "yellow-state": "#EFD05C",
        "white-state": "#FBF5ED",
        "red-state": "#EC3C3C",
        "green-state": "#51BA81",
        "black-state": "#030303",
        gray: {
          50: '#FBF5ED',
          450: "#1A191A",
        },
      },
      fontSize: {
        "head-400": "128px",
        "head-300": "64px",
        "head-250": "60px",
        "head-200": "48px",
        "head-100": "36px",
      },
      screens: {
        xs: "440px",
        short: { raw: "(max-height: 1000px)" },
        tall: { raw: "(min-height: 1000px)" },
      },
    },
  },
  plugins: [],
};
export default config;
