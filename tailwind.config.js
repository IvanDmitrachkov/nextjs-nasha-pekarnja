module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brown: '#5b362e',
      yellow: '#ffee02',
      red: '#FC0000',
      blackSolid: '#000',
      black40a: 'rgba(0, 0, 0, 0.4)',
      black: '#333333',
      gray: '#4F4F4F',
      grayLight: '#ababab',
      fog: '#e5e5e5',
      white: '#FFFFFF'
    },
    spacing: {
      gutter: '1.6rem',
      '1/2': '50%',
      '1/3': '33.33%',
      300: '30rem',
      240: '24rem',
      200: '20rem',
      160: '16rem',
      100: '10rem',
      80: '8rem',
      64: '6.4rem',
      40: '4rem',
      32: '3.2rem',
      24: '2.4rem',
      16: '1.6rem',
      12: '1.2rem',
      8: '.8rem',
      4: '.4rem',
      0: '0'
    },
    width: {
      desktop: '132rem',
      screen: '100vw',
      full: '100%',
      '1/3': '33.33%',
      '2/3': '66.66%',
      '1/2': '50%',
      64: '6.4rem',
      48: '4.8rem',
      32: '3.2rem',
      24: '2.4rem'
    },
    height: {
      1: '1px',
      2: '2px',
      '1/3': '33.33%',
      '1/4': '25%',
      '1/2': '50%',
      '2/3': '66.66%',
      full: '100%',
      screen: '100vh',
      700: '70rem',
      600: '60rem',
      500: '50rem',
      400: '40rem',
      360: '36rem',
      300: '30rem',
      240: '24rem',
      200: '20rem',
      140: '14rem',
      120: '12rem',
      80: '8rem',
      64: '6.4rem',
      56: '5.6rem',
      32: '3.2rem',
      48: '4.8rem',
      24: '2.4rem',
      4: '.4rem'
    },
    flex: {
      '0-0-100': '0 0 100%',
      '0-0-16': '0 0 16.66%',
      '0-0-25': '0 0 25%',
      '0-0-33': '0 0 33.33%',
      '0-0-50': '0 0 50%',
      '0-0-auto': '0 0 auto',
      1: '1 1 0%'
    },
    minHeight: {
      '2/3': '66.66%',
      screen: '100vh'
    },
    fontWeight: {
      bold: '700',
      medium: '500',
      regular: '400',
      light: '300'
    },
    borderWidth: {
      0: '0',
      1: '1px'
    },
    borderRadius: {
      DEFAULT: '.4rem',
      16: '1.6rem',
      full: '9999px'
    },
    fontSize: {
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      24: '2.4rem',
      32: '3.2rem',
      48: '4.8rem',
      72: '7.2rem'
    },
    screens: {
      lg: {
        min: '1025px'
      },
      md: {
        max: '1024px',
        min: '768px'
      },
      sm: {
        max: '767px'
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  prefix: '',
  experimental: {
    applyComplexClasses: true
  },
  future: {
    purgeLayersByDefault: true
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
    require('tailwindcss-aspect-ratio')
  ]
}
