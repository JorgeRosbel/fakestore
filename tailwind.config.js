/** @type {import('tailwindcss').Config} */

import { transform } from 'typescript';


export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode:"class",
  theme: {
    animation: {
      fade: "fade 1s linear",
      spin: "spin 2s linear infinite",
      slider:"slider 16s linear infinite",
      pulse: "pulse 2s linear infinite"
    },
    keyframes:{
      pulse:{
        "0%":{ opacity: 0.3 },
        "50%": { opacity:  1 },
        "100%": { opacity:  0.3 }
      },
      fade:{
        "0%":{ opacity: 0 },
        "100%": { opacity:  1 }
      },
      spin: {
        "0%": { transform: 'rotate(0deg)' },
        "100%": { transform: 'rotate(360deg)' }
      },
      slider:{
        "0%": {transform: 'translateX(-100%)'},
        "100%": {transform: 'translateX(100vw)'}
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
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.no-spinner': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'textfield',
        },
        '.no-spinner::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.no-spinner::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.promo-grid': {
          'grid-template-columns': 'repeat(auto-fill,minmax(250px,1fr))',
          'grid-template-rows': 'repeat(auto-fill,minmax(250px,1fr))',
        },
      }

      addUtilities(newUtilities)
    }
  ]
}

