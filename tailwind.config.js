
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },

      margin: {
        '5px': '5px',
      },

      fontSize: {
        sm: ['14px', '20px'],
        base: ['24px', '30px'],
        lg: ['40px', '58px'],
        xl: ['64px', '72px'],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
