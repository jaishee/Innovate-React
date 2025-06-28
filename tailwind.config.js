/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ["Open Sans"],
        'paprika': ["Paprika"],
        'nunito':["Nunito"]
      },
      colors: {
        'primary':"#1BBF00",
        'secondary': "#160C6D",
        'third': "#141135",
        'bgTwo': "#F9F9FB",
        'fourth': "#726E9E",
        'fifth': "#FAFAFE",
        'sixth': "#E6E5F3",
        'seventh': "#F4F4F5",
        'bgThree': "#6B62C5"
      },
      maxWidth: {
        "container": "1170px"
      },
      backgroundImage: {
        'banner': "url('./assets/Banner.png')"
      }
    },
  },
  plugins: [],
}