/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Raleway", "serif"],
        Raleway: ["Raleway", "serif"],
        Lora: ["Lora", "serif"],
      }
    },
  },
  
  plugins: [require
    ('daisyui'),
  ],
  darkMode: 'class',
  
}
