/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1F3A',
          800: '#142A4A',
          DEFAULT: '#0B1F3A'
        },
        institutional: {
          DEFAULT: '#145DA0',
          hover: '#0F4A82'
        },
        gold: {
          DEFAULT: '#C9A227',
          hover: '#B59122'
        },
        graphite: '#1F2937',
        light: '#F4F6F8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
