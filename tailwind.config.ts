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
            fontFamily: {
                tartuffo: ["var(--font-tartuffo)"],
                gustavo: ["var(--font-gustavo)"],
            },
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
        },
    },
} satisfies Config;

export default config;
