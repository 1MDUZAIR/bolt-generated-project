/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-secondary': '#1E1E1E',
        'dark-text': '#FAFAFA',
        'gold': '#FFD700',
        'primary': '#FF4949',
        'secondary': '#4CAF50',
        'accent': '#FF9800',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
