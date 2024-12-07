/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2a4365',
          dark: '#0f2942',
        },
        secondary: {
          DEFAULT: '#c5a47e',
          light: '#d4b898',
          dark: '#b69164',
        },
      },
    },
  },
  plugins: [],
}