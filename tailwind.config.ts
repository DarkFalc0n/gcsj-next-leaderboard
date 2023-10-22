import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        stat: "20px 20px 30px rgba(37, 99, 235, 0.7)",
        mstat: "10px 10px 20px rgba(37, 99, 235, 0.7)",
        winner: "10px 10px 20px rgba(249, 115, 22, 0.7)",
        mwinner: "5px 5px 10px rgba(249, 115, 22, 0.7)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
