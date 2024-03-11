/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
          'blue1' : '#92C7CF',
          'blue2' : '#AAD7D9',
          'white1' : '#FBF9F1',
          'gray1' : '#E5E1DA'
      },
    },
  },
  plugins: [],
}

