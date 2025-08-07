/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#141619',
        secondary: '#687684',
        tertiary: '#BDC5CD',
        accent: '#687684',
        brand: '#F4BDDD',
        hover: '#F4BDDD4D',
        pressed: '#C3F4BD',
        input: '#E7ECF0',
      },
    },
  },
  plugins: [],
}
