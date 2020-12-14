module.exports = {
  purge: {
    enabled: true,
    content: [
      'public/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headings: ['Glass Antiqua', 'cursive'],
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
