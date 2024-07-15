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
        'sage': '#F3F7E4',
        'grey': '#95A29D',
        'sun': '#FDB777',
        'forest': '#074D35',
      },
      boxShadow: {
        'card': '0px 0px 10px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        easeInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        easeInLeft: 'easeInLeft 5s ease-in-out',
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

