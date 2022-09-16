module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#1e1d26',
        secondaryBg: '#282730',
        secondaryBgHover: '#2b2936',
        standardC: '#b4b2c2'
      },
      borderRadius: {
        standard: '0.5rem'
      },
      spacing: {
        'standardP': '1.25rem',
        'navItemDesktop': '2rem',
        'navItemMobile': '2.5rem',
        'iconSizeDesktop': '1.5rem',
        'iconSizeMobile': '2rem'
      }
    },
  },
  plugins: [],
}