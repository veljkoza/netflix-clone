module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary':'#CD2E25'
      },
      fontFamily: {
        'sans': ['"Noto Sans"'],
        'neue': ['"Bebas Neue"']
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
