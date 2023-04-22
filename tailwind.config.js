/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingImage': 'url(/src/assets/Background.png)'
      },
      colors: {
        'gray': '#6B7A99',
        'grayBlue': '#4D5E80',
        'grayBlue-70': '#7D8FB3',
        'lightGray': '#F7F8FA',
        'grayBlue-80': '#ADB8CC',
        'orange': '#FF6633'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        },
        fadeIn: {
          '0%': { opacity: '0%', transform: 'translateX(-20%)' },
          '100%': { opacity: '100%', transform: 'translateX(0)' }
        }
      },
      animation: {
        fade: 'fade 1.2s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out'
      },
    },
  },
  plugins: [],
}