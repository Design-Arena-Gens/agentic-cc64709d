/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '41.99%': { opacity: 1 },
          '42%': { opacity: 0.4 },
          '43%': { opacity: 1 },
          '45.99%': { opacity: 1 },
          '46%': { opacity: 0.2 },
          '46.5%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
