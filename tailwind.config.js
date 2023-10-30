/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      GeorgiaRegular: ["GeorgiaRegular"],
      GeorgiaSemiBold: ["GeorgiaSemiBold"],
      RubikRegular: ["RubikRegular"],
      RubikSemiBold: ["RubikSemiBold"],
      Poppins: ["PoppinsRegular"]
    },
    
    colors: {
      green: "#9CCF32",
      white: "#ffffff",
      orange: "#FF9D01",
      grey: "#D9D9D9",
      greyBlack: "#1D1D1D",
      boxGrey: "#F9F8F8",
      lightGrey: "#C1C1C1",
      blue: "#3399FE",
      black: "#042001",
      LoginHeaderTextColor: "#313131",
      textInputborderColor: "#C8C8C8",
      tc: "#777777",
      newbg: '#F6F6F6',
      blacktext: '#121B2B',
      graytext:'#959EAD',
      bcolor:'#E5E5E5',
      postbg:'#F9F9F9'
    
    },
    fill: {
      current: "#86888C",
      hover: "#ffffff",
    },
  },
  plugins: [],
}

