module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        social: 'var(--font-social), var(--font-heading-fallback)',
        quadrant: 'var(--font-quadrant), var(--font-body-fallback)',
      },
      borderColor: {
        DEFAULT: '#000', // This sets the default border color to black
      },
    },
  },
  plugins: [],
};
