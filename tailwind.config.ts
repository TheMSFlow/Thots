/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        secondary: '#687684',
        tertiary: '#BDC5CD',
        accent: '#4C9EEB',
        brand: '#F4BDDD',
        hover: '#F4BDDD4D',
        pressed: '#C3F4BD',
        input: '#E7ECF0',
      },
      fontFamily: {
        jockey: ['"Jockey One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
