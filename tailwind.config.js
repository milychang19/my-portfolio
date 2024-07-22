/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'green': '#095D40', //name title
        'beige': '#FFFFEC', //background
        'blue': '#034AB4', //about me
        'yellow': '#FFA857', //icon
        'brown': '#1F1A12', //text
        'matcha': '#EFEEDD', //header & contact card
        'sage': '#F3F7E4', //project cards
        'grey': '#95A29D',
        'sun': '#FDB777', //hovered icon
        'forest': '#074D35', //hovered button
        'coral': '#CD807B', //tag1
        'mint': '#7DA68D', //tag2
        'star': '#F4CD94', //tag3
        'sky': '#AEBFD5', //project name
      },
      boxShadow: {
        'card': '0px 0px 10px rgba(0, 0, 0, 0.1)',
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

