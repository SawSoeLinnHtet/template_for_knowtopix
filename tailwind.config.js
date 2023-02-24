/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#f5f5f5",
          red: "#fff000",
        },
      },
    },
  },
  plugins: [],
}
