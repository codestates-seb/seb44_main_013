/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        BASIC_PURPLE: '#8580E1',
        BASIC_PINK: '#FFD9E0',
        BASIC_GRAY: '#999999',
        BASIC_LINE: '#EEEEEE',
        BASIC_BORDER: '#737A81',
        BASIC_TEXT: '#555555'
      }
    },
  },
  plugins: [],
}

