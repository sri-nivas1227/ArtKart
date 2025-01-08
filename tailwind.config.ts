import type { Config } from "tailwindcss";
// import tailwindcssMotion from "tailwindcss-motion";
// import tailwindCSSAnimated from "tailwindcss-animated";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        brand: {
          blue: "#38b6ff",
          pink: "#ff66c4",
          yellow: "#ffde59",
          green: "#7ed957",
          beige: "#ffdfcd",
        },
      },
      textColor: {
        brand: {
          blue: "#83ccf3",
          pink: "#e8669e",
          orange: "#f6a800",
          green: "#85bb1d",
        },
        dark: {
          black: "#1a1a1a",
          brown: "#7a4600",
          green: "#305d02",
          blue: "#0d3b66",
        },
      },
      fontFamily: {
        delius: ["var(--font-delius)"],
        fingerPaint: ["var(--font-finger-paint)"],
        waterlily: ["var(--font-water-lily)"],
        itim: ["var(--font-itim)"],
      },
      boxShadow: {
        bubble:
          " 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.05) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.04) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.02) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
        base: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
        stripe:
          "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
      },
    },
    plugins: [],
  },
};
export default config;
