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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: "#83ccf3",
          pink: "#e8669e",
          orange: "#f6a800",
          green: "#85bb1d",
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
      },
    },
    plugins: [],
  },
};
export default config;
