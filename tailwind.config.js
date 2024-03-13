/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cdf0ea': '#CDF0EA',
        'custom-green': '#019673',
        'custom-black': '#252525',
        'custom-grey' : '#FFE6E6',
        'custom-white' : '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"]
    },
  },
}