/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        BASIC_BLACK: '#161616',
        BASIC_WHITE: '#ffff',
        BASIC_GRAY: '#A09F9F',
        POINT_COLOR: '#8580E1',
        HOVER_COLOR: '#6A66B4',
        ITEM_TITLE: '#474646'
      }
    },
  },
  plugins: [],
}

