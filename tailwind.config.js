module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'logoBlue': '#3498DB',
        'lightBlue': '#EDF2F7',
        'transparent-white-500': 'RGBA(255, 255, 255, 0.5)'
      },
      screens: {
        'print': { 'raw': 'print' },
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['last']
    },
  },
  plugins: [],
}
