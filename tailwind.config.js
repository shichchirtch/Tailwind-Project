/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'




export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', "serif"],
        poppins:'poppins, sans-serif'
      },
      backgroundImage:{
        'custom-grad': 'linear-gradient(90deg, rgba(117,42,155,1) 0%, rgba(199,147,87,1) 50%, rgba(237,221,83,0.74) 100%)',
      },
      colors:{
        primary:'#27B72A',
        secondary: '#C7C5C0'
      }

    },

  },
  plugins:[ typography],
}

