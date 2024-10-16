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
        sans: ["Inter", "sans-serif"],
        aspekta: ["var(--font-aspekta)", "sans-serif"],
      },
      colors: {
        // Base colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        foreground2: "var(--foreground2)",
        foreground3: "var(--foreground3)",
        muted: "var(--muted)",
        border: "var(--border)",

        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",
        primaryHover: "var(--primary-hover)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",

        blu: "var(--blu)",
        org: "var(--org)",
        grn: "var(--grn)",
        peach: "var(--peach)",

        blackBg: "var(--blackBg)",
        blackFg: "var(--blackFg)",
        blackPri: "var(--blackPri)",

        graySecondary: "var(--gray-secondary)",
        graySecondaryForeground: "var(--gray-secondary-foreground)",
        graySecondaryForegroundMuted: "var(--gray-secondary-foreground-muted)",

        purple: "#A155E0",
        lightPurple: "#E3B4FF",
        hoverPaste: "#5A5A5A",
        mutedGray: "#797878",
        borderGray: "#84cc16",
      },
    },
  },
  plugins: [],
};

export default config;
