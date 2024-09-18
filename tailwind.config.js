/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      '128': '32rem', // Example: adds ml-128 for 32rem
      '144': '36rem', // Adds ml-144 for 36rem
      '160': '40rem', // Adds ml-160 for 40rem
      colors: {
        'piink': '#243c5a',
      },
    },
  },
  plugins: [],
}

