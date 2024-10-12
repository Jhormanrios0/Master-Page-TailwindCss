/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3e6e30",
        secundaryColor: "#f9f9f9",
        thirdColor: "#f4f4f4",
        txtColor: "#2F2F2D",
      },
      height: {
        400: "400px",
        cardsHeight: "270px",
        containerServices: "1235px",
        heightNews: "1412px",
        heightFirstNew: "700px",
        "95%": "95%",
      },
      width: {
        cardsWidth: "280px",
        400: "400px",
        639: "639px",
        1250: "1450px",
        containerCards: "1280px",
        1576: "1576px",
        "95%": "95%",
      },
      spacing: {
        "20px": "20px",
      },
    },
  },
  plugins: [],
};
