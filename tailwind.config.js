/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020817",
        surface: "#0f172a",
        border: "#1e293b",
        primary: "#8b5cf6",
        secondary: "#a855f7",
      }
    },
  },
  plugins: [],
}