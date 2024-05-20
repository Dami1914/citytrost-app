/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        darkmode: {
          1: 'var(--bg-color1-dark)',
          2: 'var(--bg-color2-dark)'
        },
        lightmode: {
          1: 'var(--bg-color1-light)',
          2: 'var(--bg-color2-light)'
        }
      },
      color: {
        colorborder: 'var(--bg-color2-dark)'
      },
      textColor: {
        darkmode: {
          dark: 'var(--text-color-dark)'
        },
        lightmode: {
          light: 'var(--text-color-light)'
        }
      },
      screens: {
        smscreen: '1285px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
