const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "abn-green-1": "#009286",
        "abn-green-2": "#005554",
        "abn-yellow-1": "#FDB912",
        "black-1": "#141414"
      },
    },
  },
  plugins: [],
}
