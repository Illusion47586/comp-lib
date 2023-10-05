import { defineConfig, definePreset } from "@pandacss/dev";

export default defineConfig({
  presets: [
    definePreset({
      theme: {
        extend: {
          tokens: {
            colors: {
              purps: {
                3: { value: "#6600CC" },
                10: { value: "#F3E9FF" },
                20: { value: "#E6CCFF" },
                default: { value: "#8000FF" },
              },
              gray: {
                "4a": { value: "#9F9F9F" },
                5: { value: "#C4C4C4" },
              },
            },
          },
          keyframes: {
            slideDown: {
              from: { height: 0 },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            slideUp: {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: 0 },
            },
          },
        },
      },
    }),
  ],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",
  jsxStyleProps: "minimal",
  jsxFactory: "styled",
  prefix: "ho",

  // The output directory for your css system
  outdir: "styled-system",
});
