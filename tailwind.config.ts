import type { Config } from "tailwindcss";

const config: Config = {
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
          DEFAULT: "#007BFF",
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
        border: {
          light: "#EAEAEA",
          dark: "#3B3B3B",
          DEFAULT: "hsl(var(--border))",
        },
        input: {
          light: "#F8F8F8",
          dark: "#2D2D2D",
          DEFAULT: "hsl(var(--input))",
        },
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
