/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Quicksand: ['Quicksand', 'sans-serif'],
      },
    extend: {},
  },
  plugins: [
     function ({ addUtilities }) {
         const newUtilities = {
             ".no-scrollbar::-webkit-scrollbar": {
                 display: "none",
             },
             ".no-scrollbar": {
                 "-ms-overflow-style": "none",
                 "scrollbar-width": "none",
             },
         };
         addUtilities(newUtilities);
     },
 ],
}