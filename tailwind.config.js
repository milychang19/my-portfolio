/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    color: {
      'forest': '#095D40',
      'beige': '#FFFFEC',
      'blue': '#034AB4',
      'sun': '#FDB777',
      'brown': '#1F1A12',
      'matcha': '#EFEEDD',
    },
    fontFamily: {
      title: ['Yeseva One', 'serif'],
      sub: ['Fraunces', 'serif'],
      text: ['Josefin Sans', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
    }
  },
  plugins: [],
}

