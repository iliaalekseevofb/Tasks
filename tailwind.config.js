module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#1e1d26',
        secondaryBg: '#282730',
        secondaryBgHover: '#494854',
        iconsColor: '#b4b2c2'
      },
      borderRadius: {
        standard: '0.75rem'
      },
      spacing: {
        'navItem': '2rem',
        'iconSize': '1.5rem'
      }
    },
  },
  plugins: [],
}