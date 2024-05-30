import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector'],
  theme: {
    colors: {
      light: '#E4DED0',
      dark: '#201F1D',
      cyan: '#808080',
      main: '#FF4342',
    },
    extend: {
      padding: { 18: '4.5rem' },
      width: {
        18: '4.5rem',
        21: '5.25rem',
        37: '9.25rem',
        50: '12.5rem',
        76: '19rem',
        100: '25rem',
        180: '45rem',
      },
      minWidth: { 76: '19rem' },
      height: {
        18: '4.5rem',
        26: '6.5rem',
        30: '7.5rem',
        50: '12.5rem',
        64: '10.5rem',
        74: '18.5rem',
        76: '19rem',
        100: '25rem',
      },
      fontSize: { 7: '1.75rem', 16: '4rem' },
      screens: { xs: '420px' },
    },
  },
  plugins: [],
}
export default config
