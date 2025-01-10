/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#095D40", //name title
        beige: "#FFFFEC", //background
        blue: "#034AB4", //about me
        yellow: "#FFA857", //icon
        brown: "#1F1A12", //text
        matcha: "#EFEEDD", //header & contact card
        sage: "#F3F7E4", //project cards
        grey: "#95A29D",
        sun: "#FDB777", //hovered icon
        forest: "#074D35", //hovered button
        coral: "#CD807B", //tag1
        mint: "#7DA68D", //tag2
        star: "#F4CD94", //tag3
        sky: "#AEBFD5", //project name
        quartz: "#EAC4BB", //company description
        aloe: "#85A69B", //goal tabs
        grey: "#DCDBCF", //goal tabs
      },
      boxShadow: {
        card: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        card: "0px 20px 10px rgba(0, 0, 0, 0.03)",
      },
      fontSize: {
        "calc-size": "calc(10px + 2vmin)",
      },
      keyframes: {
        "fade-in-zoom": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-zoom1": "fade-in-zoom 0.5s ease-out",
        "fade-in-zoom2": "fade-in-zoom 0.6s ease-out",
        "fade-in-zoom3": "fade-in-zoom 0.7s ease-out",
        "fade-in-zoom4": "fade-in-zoom 0.8s ease-out",
      },
    },
    fontFamily: {
      title: ["Yeseva One", "serif"],
      sub: ["Fraunces", "serif"],
      text: ["Josefin Sans", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
      xbold: "800",
    },
  },
  plugins: [],
};
