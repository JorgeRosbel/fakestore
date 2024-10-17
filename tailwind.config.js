/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode:"class",
  theme: {
    animation: {
      fade: "fade 1s linear",
    },
    keyframes:{
      fade:{
        "0%":{ opacity: 0 },
        "100%": { opacity:  1 }
      }
    },
    extend: {
      minHeight:{
        custom:"calc(100vh - 50px)"
      },
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          accent: '#e9ecef',
          text: '#212529',
        },
        dark: {
          primary: '#212529',
          secondary: '#343a40',
          accent: '#495057',
          text: '#f8f9fa',
        },
      },
    },
  },
  plugins: [],
}

