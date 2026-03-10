/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-20px) rotate(0deg)", opacity: "0.5" },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0.1" },
        },
      },
      animation: {
        fall: "fall 10s linear infinite",
      },
    },
  },
  plugins: [],
};
