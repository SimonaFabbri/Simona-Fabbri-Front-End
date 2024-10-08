/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      plugins: [],
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-league_Gothic)"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
