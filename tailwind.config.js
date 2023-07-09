/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '5px 12px 12px -2px rgba(0, 0, 0, 0.7)',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '4rem',
      '3xl': '6rem',
      '4xl': '8rem',
      '5xl': '10rem',
      '6xl': '12rem',
      '7xl': '14rem',
      '8xl': '16rem',
      '9xl': '18rem',
      '10xl': '20.0rem',
    },
    
  },
  plugins: [],
}
