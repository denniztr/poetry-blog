import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: 'rgba(247, 249, 247, 1)',
        darkBackground: 'rgba(40, 0, 3, 1)',
      },
      screens: {
        sm: '360px',
      },
    },
  },
  plugins: [],
};
export default config;
