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
          DEFAULT: '#5F56F1',

          white: '#FFFFFF',
          black: '#000000',

          primary: '#5F56F1'
        }
      },
      fontFamily: {
        brand: ['Inter', 'sans-serif']
      }
    }
  }
}
