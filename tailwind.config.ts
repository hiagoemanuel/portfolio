import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      light: '#E4DED0',
      dark: '#201F1D',
      main: '#FF4342',
    },
    extend: {
      fontSize: {
        16: '4rem',
      },
    },
  },
  plugins: [],
}
export default config
