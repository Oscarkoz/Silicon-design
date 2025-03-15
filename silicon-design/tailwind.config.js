/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Jag ser till att Tailwind använder 'class' för mörkertema
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Fick hjälp av Copilot för att skapa denna kod, jag förstår inte riktigt vad den gör.
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
