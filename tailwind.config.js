module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'logoBlue': '#3498DB',
        'lightBlue': '#EDF2F7',
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
