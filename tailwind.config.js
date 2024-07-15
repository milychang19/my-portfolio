/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'green': '#095D40',
        'beige': '#FFFFEC',
        'blue': '#034AB4',
        'yellow': '#FFA857',
        'brown': '#1F1A12',
        'matcha': '#EFEEDD',
        'sun': '#FDB777',
        'forest': '#074D35',
      },
    },
    fontFamily: {
      title: ['Yeseva One', 'serif'],
      sub: ['Fraunces', 'serif'],
      text: ['Josefin Sans', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
      xbold: '800',
    }
  },
  plugins: [],
}

