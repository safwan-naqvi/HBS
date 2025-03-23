import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import plugin from "tailwindcss/plugin";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
        neue: ["var(--font-neue)"],
        syne: ["var(--font-syne)"],
        gellery: ["var(--tp-ff-gallery)"],
      },
      colors: {
        background: {
          light: "#F8F8F8",
          dark: "#1A1A1A",
          DEFAULT: "hsl(var(--background))",
        },
        foreground: {
          light: "#1A1A1A",
          dark: "#F8F8F8",
          DEFAULT: "hsl(var(--foreground))",
        },
        primary: {
          DEFAULT: "#028dff",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          light: "#EAEAEA",
          dark: "#2D2D2D",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          light: "#D6D6D6",
          dark: "#3B3B3B",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          light: "#EAEAEA",
          dark: "#2D2D2D",
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          light: "#F8F8F8",
          dark: "#1A1A1A",
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // addVariablesForColors,
    // plugin(function ({ addUtilities }) {
    //   addUtilities({
    //     ".stroke-text": {
    //       "-webkit-text-stroke-width": "1px",
    //       "-webkit-text-stroke-color": "currentColor",
    //     },
    //   });
    // }),
  ],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
