/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(220, 98%, 61%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-g-b': 'hsl(236, 33%, 92%)',
        'light-g-b': 'hsl(233, 11%, 84%)',
        'dark-g-b': 'hsl(236, 9%, 61%)',
        'very-dark-g-b': 'hsl(235, 19%, 35%)',

        // for darkMode
        'very-dark-b-dm': 'hsl(235, 21%, 11%)',
        'very-dark-d-b-dm': 'hsl(235, 24%, 19%)',
        'light-g-b-dm': 'hsl(234, 39%, 85%)',
        'light-g-b-dm-hover': 'hsl(236, 33%, 92%)',
        'dark-g-b-dm': 'hsl(234, 11%, 52%)',
        'very-dark-g-b-dm-1': 'hsl(233, 14%, 35%)',
        'very-dark-g-b-dm-2': 'hsl(237, 14%, 26%)',

        // gradient
        'from-color': 'hsl(192, 100%, 67%)',
        'to-color': 'hsl(280, 87%, 65%)',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        'desktop-dark': "url('/src/assets/bg-desktop-dark.jpg')",
        'desktop-light': "url('/src/assets/bg-desktop-light.jpg')",
        'mobile-dark': "url('/src/assets/bg-mobile-dark.jpg')",
        'mobile-light': "url('/src/assets/bg-mobile-light.jpg')",
      }
    }
  },
  plugins: [],
}