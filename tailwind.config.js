/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'axa-blue': '#005BAA',
        'axa-light-blue': '#E8F4FA',
        'axa-dark-blue': '#003C71',
        'axa-green': '#78BE20',
        'axa-light-green': '#E5F2E1',
        'axa-orange': '#FF6900',
        'axa-yellow': '#FFD800',
        'axa-red': '#E20613',
        'axa-black': '#000000',
        'axa-white': '#FFFFFF',
        'axa-grey-dark': '#4D4F53',
        'axa-grey-light': '#F3F3F3',
      },
    },
  },
  plugins: [],
}

