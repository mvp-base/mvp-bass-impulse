/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const daisyui = {
  themes: ["dark"],
};
export const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
    },
  },
  colors: {
    black: "#0F0E0E",
    "hard-white": "#ffffff",
    white: "#a6adba",
    "dark-blue": "#2A5057",
    "light-blue": "#228697",
    "black-80": "#1D232A",
    "black-30": "#cccccc",
    "admin-red": "#FF0000",
  },
  fontFamily: {
    trail: ["trail", "sans"],
    body: ["body", "sans"],
    display: ["display", "sans"],
    header: ["header", "sans"],
    "header-light": ["header-light", "sans"],
    footer: ["footer", "sans"],
  },
  extend: {},
};
export const plugins = [require("daisyui")];
