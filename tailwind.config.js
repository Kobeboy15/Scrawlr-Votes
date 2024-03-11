/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: {
          background: '#F4F6F8',
          arrow: '#343A40'
        },
        selected: {
          background: '#E5E8FD',
          arrow: '#253CF2'
        }
      },
    },
  },
  plugins: [],
}