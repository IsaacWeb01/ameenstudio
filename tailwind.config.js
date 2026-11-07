/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F06432',
          'orange-deep': '#C94B25',
          'orange-light': '#FF8758',
          cream: '#F5F1E9',
          white: '#FFFFFF',
          black: '#111110',
          charcoal: '#1B1B19',
          muted: '#85827C',
          border: '#D8D2C8',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
        mono: ['monospace'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        dramatic: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
};
