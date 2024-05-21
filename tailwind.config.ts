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
      main: '#FF4342',
    },
    extend: {
      width: { 18: '4.5rem', 21: '5.25rem' },
      height: { 18: '4.5rem', 26: '6.5rem', 30: '7.5rem', 74: '18.5rem' },
      fontSize: { 7: '1.75rem', 16: '4rem' },
      screens: { xs: '420px' },
    },
  },
  plugins: [],
}
export default config
