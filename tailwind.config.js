/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FF4D79',
        'accent-dark': '#E11D48',
        mint: '#10B981',
        violet: '#8B5CF6',
        lavender: '#C084FC',
      }
    },
  },
  plugins: [],
}
