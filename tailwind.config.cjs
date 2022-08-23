/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'dark': '#142850',
      'dark-100': '#27496D',
      'light':'#EFFFFD',
    },
    extend: {

    },
  },
  plugins: [require('flowbite/plugin')],
  "darkMode": 'class'
}