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
        BASIC_TEXT: '#555555',
        BASIC_HOVER: '#B6B4E7',
        // 이 밑으로는 설정 없다고 에러뜨길래 임시로 해뒀어요!
        BASIC_WHITE: '#ffffff',
        BASIC_BLACK: '#000000',
        POINT_COLOR: '#888888',
        HOVER_COLOR: '#898989',
        ITEM_TITLE: '#121212',

      }
    },
  },
  plugins: [],
}

