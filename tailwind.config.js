/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: '#5865F2',
        minecraft: '#4CAF50',
        gold: '#FFD700',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
