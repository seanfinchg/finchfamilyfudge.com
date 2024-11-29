// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode via a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        finchGold: "#D4AF37", // Gold color for branding
        darkBg: "#1a1a1a", // Dark background
        lightText: "#f5f5f5", // Light text
      },
    },
  },
  plugins: [],
};
