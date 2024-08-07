import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,md}',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '425px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#04AA6D',

          white: '#FFFFFF',
          black: '#000000',

          light: '#F4F4F4',
          dark: colors.green[950],

          primary: '#04AA6D',
          primaryLight: '#07C680',
          primaryDark: '#038857',

          secondary: '#0441AA',
          secondaryLight: '#065AEC',
          secondaryDark: '#033488',

          success: colors.gray[500],
          successLight: colors.gray[400],
          sucessDark: colors.gray[600],
          warning: '#FFCC00',
          warningLight: '#FFD633',
          warningDark: '#CCA300',
          danger: '#EF4444',
          dangerLight: '#F87171',
          dangerDark: '#DC2626',
          info: '#007BFF',
          infoLight: '#3395FF',
          infoDark: '#0076F5',

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
        accordionDown: 'accordionDown 150ms cubic-bezier(0.87, 0, 0.13, 1)',
        accordionUp: 'accordionUp 150ms cubic-bezier(0.87, 0, 0.13, 1)',
        borderBeam: 'borderBeam calc(var(--duration)*1s) infinite linear',
        marquee: 'marquee var(--duration) linear infinite',
        meteor: 'meteor 5s linear infinite',
        selectHide: 'selectHide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectDown: 'selectDown 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectLeft: 'selectLeft 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectUp: 'selectUp 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        selectRight: 'selectRight 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        accordionDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        accordionUp: {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0px' }
        },
        borderBeam: {
          '100%': {
            'offset-distance': '100%'
          }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0
          }
        },
        selectHide: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        selectDown: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        selectLeft: {
          from: { opacity: '0', transform: 'translateX(6px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        selectUp: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        selectRight: {
          from: { opacity: '0', transform: 'translateX(-6px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  }
}
