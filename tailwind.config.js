
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
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': {  transform: 'translateX(0)' }
        },
        'fade-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': {  transform: 'translateY(0)' }
        }
      },
      animation: {
        'slide-right': 'slide-right 1s ease-in both',
        'fade-down': 'fade-down 1s ease-in both'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

