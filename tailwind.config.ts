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
        stripe:
          "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
      },
      keyframes: {
        pop: {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1.4)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        rotateSmooth: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-12deg)" },
        },
      },
      animation: {
        "pop-300": "pop 300ms ease-in-out",
        "pop-400": "pop 400ms ease-in-out",
        "pop-500": "pop 500ms ease-in-out",
        "pop-600": "pop 600ms ease-in-out",
        "pop-700": "pop 700ms ease-in-out",
        "pop-800": "pop 800ms ease-in-out",
        "pop-1000": "pop 1000ms ease-in-out",
        "pop-1200": "pop 1200ms ease-in-out",
        "rotate-smooth": "pop 1000ms rotateSmooth 0.5s ease-in-out ",
      },
    },
    plugins: [],
  },
};
export default config;
