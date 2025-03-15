/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 🔥 Se till att Tailwind använder 'class' för dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Anpassa efter dina filvägar
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
