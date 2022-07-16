/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

    },
    fontFamily: {
      signature: ['Great Vibes']
    },
    screens: {
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'xs': '320px'
    }

  },
  plugins: [],
}
