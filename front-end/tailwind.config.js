/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      s: ['10px', '14px'],
      xs: ['12px', '16px'],
      m: ['14px', '18px']
    },
    borderWidth: {
      DEFAULT : '1px'
    }
  },
  
  plugins: [],
}
