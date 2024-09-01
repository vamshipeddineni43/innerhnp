/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { colors: { 'dark-gray': '#696969', 'light-gray': '#e1e1e1' } },
  },
  plugins: [],
  blocklist: ['collapse'],
  prefix: 'tw-',
}
