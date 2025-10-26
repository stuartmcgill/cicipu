/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'serif', ...defaultTheme.fontFamily.sans],
        serif: ['serif'],
        vernacular: ['CharisSILW', 'serif']
      }
    }
  }
}
