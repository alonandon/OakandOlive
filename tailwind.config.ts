import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50:  '#f3f6ec',
          100: '#e4eccc',
          200: '#cad9a3',
          300: '#a9c172',
          400: '#8aaa4a',
          500: '#6b8c34',
          600: '#527028',
          700: '#405822',
          800: '#35471e',
          900: '#2d3c1c',
          950: '#16200c',
        },
        sage: {
          50:  '#f4f7f0',
          100: '#e4ecda',
          200: '#cad9ba',
          300: '#a7bf92',
          400: '#84a46c',
          500: '#668850',
          600: '#506c3e',
          700: '#405633',
          800: '#35452b',
          900: '#2d3926',
        },
        cream: {
          50:  '#fdfcf8',
          100: '#f7f3ec',
          200: '#ede5d6',
          300: '#e0d3bc',
          400: '#cebfa3',
        },
        bark: {
          DEFAULT: '#2c2416',
          light:   '#4a3d2a',
          muted:   '#6b5d48',
        },
        gold: {
          DEFAULT: '#b8934f',
          light:   '#d4b47a',
          dark:    '#8f6e35',
        },
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:   ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'leaf-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b8c34' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
