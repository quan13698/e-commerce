/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        s: ['10px', '14px'],
        xs: ['12px', '16px'],
        xss: ['13px', '16px'],
        m: ['14px', '18px'],
        l: ['15px', '21px'],
      },
      height : {
        '70': '280px',
        '69': '276px',
      },
      screens: {
        'max-3xl': '1280px',
        'max-4xl': '1490px',
        'max-5xl': '1590px',
        'max-6xl': '1750px',
        'max-7xl': '1829px',
        'xll': '1490px',
        'xlll': '1590px',
        '4xl': '1750px',
      }
    },
    borderWidth: {
      DEFAULT : '1px'
    }
  },
  
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
