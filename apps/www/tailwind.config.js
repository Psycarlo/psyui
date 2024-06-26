/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,md}',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#04AA6D',

          white: '#FFFFFF',
          black: '#000000',

          primary: '#04AA6D',
          primaryLight: '#07C680',
          primaryDark: '',

          secondary: '',
          secondaryLight: '',
          secondaryDark: '',

          success: '',
          successLight: '',
          sucessDark: '',
          warning: '',
          warningLight: '',
          warningDark: '',
          danger: '',
          dangerLight: '',
          dangerDark: '',
          info: '',
          infoLight: '',
          infoDark: '',

          gray: {
            50: '#f8f8f8',
            100: '#f4f4f4',
            200: '#efefef',
            300: '#e8e8e8',
            400: '#dddddd',
            500: '#cdcdcd',
            600: '#b6b6b6',
            700: '#9b9b9b',
            800: '#818181',
            900: '#686868',
            1000: '#4f4f4f',
            1100: '#343434',
            1200: '#090909'
          }
        }
      },
      fontFamily: {
        brand: ['Inter', 'sans-serif']
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      }
    }
  }
}
