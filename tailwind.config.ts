import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '558px',
      md: '863px',
      lg: '1125px',
      xl: '1440px',
    },
    extend: {
      colors: {
        colorBgLight: "#F5F5F5",
        colorBg2Light: "#f7f4f1",
        colorBg3Light: "#f0e9e3",
        colorBgNavLight: "rgba(255, 255, 255, 0.9)",
        colorTextLight: "#212121 ",
        colorHighlightsLight:"#6200EE",
        colorLinksLight: "#03DAC5",

        colorBgDark: "#232323",
        colorBg2Dark: "#2C2C2C",
        colorBg3Dark: "#1B1B1B",
        colorBgNavDark: "rgba(39, 34, 37, 0.9)",
        colorTextDark: "#FAFAFA ",
        colorHighlightsDark:"#BB86FC",
        colorLinksDark: "#03DAC5",
      },
    },
  },
  plugins: [],
} satisfies Config;
