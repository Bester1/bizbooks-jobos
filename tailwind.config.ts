import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#39ff14',
      },
      boxShadow: {
        glow: '0 0 20px #39ff14, 0 0 40px #39ff14',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
