/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'serif', 'sans-serif'],
        heading: ['Space Grotesk', 'serif', ...defaultTheme.fontFamily.sans],
        serif: ['serif']
      }
    }
  }
}
