module.exports = {
  purge: {
    enabled: false,
    content: [
      'public/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headings: ['Abril Fatface', 'cursive'],
        body: ['Nunito', 'sans-serif;'],
      },
      colors: {
        primary: '#84abb2',
        secondary: '#bbb29d'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}