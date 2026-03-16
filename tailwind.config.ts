import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./sanity/**/*.{ts,tsx}",
    ],
    theme: {},
    plugins: [],
} satisfies Config;