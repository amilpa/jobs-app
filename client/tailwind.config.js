/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5837f9',
        secondary: '#000000',
        teritiary: '#ffffff',
        inputcolor: "#fcfbff",
        bookmarkcolor: "#c6bee0"
      },
    },
  },
  plugins: [],
}

