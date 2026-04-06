import type { Config } from 'tailwindcss'\n\nconst config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
\nexport default config