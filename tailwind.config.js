
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        17: '4.5rem',
        35: '8rem'
      },
      fontSize: {
        xxs: '0.65rem'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

