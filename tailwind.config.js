/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        lg: '984px',
        xl: '1240px'
      }
    },
    extend: {}
  },
  plugins: []
}
