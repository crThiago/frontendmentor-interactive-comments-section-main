/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moderate-blue': 'hsl(238, 40%, 52%)',
        'soft-red': 'hsl(358, 79%, 66%)',
        'light-grayish-blue': 'hsl(239, 57%, 85%)',
        'pale-red': 'hsl(357, 100%, 86%)',

        'dark-blue': 'hsl(212, 24%, 26%)',
        'grayish-blue': 'hsl(211, 10%, 45%)',
        'light-gray': 'hsl(223, 19%, 93%)',
        'very-light-gray': 'hsl(228, 33%, 97%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      maxWidth: {
        'card': '730px',
      },
      screens: {
        'desktop': '1440px',
        'mobile': '375px',
      },
      fontFamily: {
        'sans': ['Rubik']
      }
    },
  },
  plugins: [],
}
