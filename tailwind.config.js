/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    "./src/components/*.tsx",
],
  theme: {
    extend: {
      fontFamily: {
        card: 'Poppins_600SemiBold',
      },
      colors: {

        'green': {
          500: '#015F43'
        },
        'gray': {
          200: '#C4C4CC',
          900: '#121214'
        },
      },
    },
  },
  plugins: [],
}

