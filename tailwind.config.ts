import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1520px" },
    },
    extend: {
      fontFamily: { tartuffo: ["var(--font-tartuffo)"] },
      colors: {
        "fg-1": "#30171B",
        "fg-2": "#5D4043",
        "fg-3": "#816A6C",
        "bg-1": "#FFFFFF",
        "bg-2": "#FAF6F3",
        "bg-3": "#EBE0D8",
        "bg-blue": "#EFF1FD",
        "bg-trans": "#FFFFFF50",
      },
      keyframes: {
        mynthos: {
          "0%": { opacity: "0", transform: "translate(-100%, -100%)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translate(100%, 100%)" },
        },
      },
      animation: {
        mynthos: "mynthos 3s infinite",
      },
    },
  },
} satisfies Config;

export default config;
