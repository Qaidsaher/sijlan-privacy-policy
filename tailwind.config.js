/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E4F5F2', 100: '#C7F1E6', 300: '#85DEC5',
          600: '#007871', 700: '#005A5A', 800: '#004B4C', 900: '#003C40'
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans Arabic', 'Inter', 'Tahoma', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
