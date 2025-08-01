/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Activează dark mode prin clasa 'dark'
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Căutare în fișierele componente
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFDF88', // fundal light cald
        charcoal: '#0D0D0D', // fundal dark profund
        roseGold: '#DAA49A', // elegant, cald
        pinkAccent: '#FF9AA2', // pastel vibrant
        gold: '#E9A319 ', // accente elegante
        softPink: '#7C4585', // ton blând
        deepGray: '#2B2B2B', // text/detalii dark
        lightGray: '#F3F4F6', // text/detalii light
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
//model 2
//colors: {
// ivory: '#FDFCFB',
//charcoal: '#1A1A1A',
//roseGold: '#C28872',
// pinkAccent: '#F6BDC0',
//gold: '#E4C580',
//softPink: '#FDE2E4',
//deepGray: '#2E2E2E',
//lightGray: '#FAFAFA',
//}

//model 3
//colors: {
// ivory: '#F0ECE2',
// charcoal: '#121212',
// roseGold: '#D9A673',
// pinkAccent: '#FF6B6B',
// gold: '#F9CB40',
// softPink: '#FFE6E6',
// deepGray: '#1C1C1C',
// lightGray: '#EDEDED',
//}
