module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0b0b0b',
        light: '#fefefe',
      },
      scale: {
        '110': '1.1',
        '125': '1.25',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        shine: 'shine 3s linear infinite', // Added shine animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shine: {
          '0%': { backgroundPosition: '-200%' },
          '100%': { backgroundPosition: '200%' },
        },
      },
    },
  },
  plugins: [],
}
