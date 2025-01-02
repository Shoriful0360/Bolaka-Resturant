/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'feature-bg': "url('./src/assets/home/featured.jpg')",
        'menu-page-bg': "url('./src/assets/menu/banner3.jpg')",
        logImg: "url('./src/assets/reservation/wood-grain-pattern-gray1x.png')",
       
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
