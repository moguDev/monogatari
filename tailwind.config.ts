import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bokutachi: ["bokutachi", "sans-serif"],
        shiasatte: ["shiasatte", "sans-serif"],
        buildingtracks: ["buildingtracks", "sans-serif"],
      },
      colors: {
        white: "#f1f1f1",
        black: "#213854",
        theme: "d7dcd8",
      },
      backgroundColor: {
        theme: "d7dcd8",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
export default config;
