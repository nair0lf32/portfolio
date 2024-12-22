
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: '0.1rem',
        sm: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
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

    extend: {
      animation: {
        'faster-ping': 'ping 0.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
