const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        evil: ['EvilEmpire','sans'],
        game: ['Evil','sans'],
        nasa: ['Nasalization','sans-serif'],
        bigspace: ['BigSpace','sans-serif'],
        raleway: ["'Raleway'", ...defaultTheme.fontFamily.sans],
        poppins: ["'Poppins'", ...defaultTheme.fontFamily.sans],
        mioge:['Mioge','sans-serif'],
        pilot: ['Pilot','sans-serif'],
        evil400: ['Evil400','sans'],
      },
      colors:{
        orange: '#E87914',
        workshop_primary: '#e8190f'
      }
    },
  },
  plugins: [],
}