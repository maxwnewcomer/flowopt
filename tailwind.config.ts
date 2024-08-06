import type { Config } from "tailwindcss";
import { createPlugin } from "windy-radix-palette";

const colors = createPlugin();

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        error: colors.alias("red"),
        success: colors.alias("green"),
        warning: colors.alias("amber"),
        info: colors.alias("blue"),
        base: colors.alias("sage"),
        primary: colors.alias("teal"),
      },
      fontFamily: {
        sans: ["Inter", "sans"],
        mono: ["JetBrains Mono Variable", "monospace"],
        workbench: ["Workbench Variable", "monospace"],
      },
    },
  },
  plugins: [colors.plugin, require("tailwindcss-animate")],
} satisfies Config;
