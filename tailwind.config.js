module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui'],
        display: ['Work Sans', 'ui-sans-serif'],
      },
      fontSize: {
        'display-large': [
          '48px',
          {
            lineHeight: '56px',
            letterSpacing: '0.025em',
            fontWeight: '700',
          },
        ],
        'display-medium': [
          '34px',
          {
            lineHeight: '40px',
            fontWeight: '600',
          },
        ],
        'display-small': [
          '24px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
      },
      colors: {
        primary: {
          'light-1': '#5E98FD',
          DEFAULT: '#3C84FC',
          'dark-1': '#0E65FB',
          'dark-2': '#023CA1',
        },
        secondary: {
          'light-1': '#33FFBB',
          DEFAULT: '#00FCA8',
          'dark-1': '#00E096',
          'dark-2': '#00CC88',
        },
        accent: '#7284FF',
        important: '#FC3C82',
        'on-primary': '#F9F9F9',
        'on-light': '#404040',
        'on-secondary': '#404040',
        'on-dark': '#FAFAFA',
        dark: '#2A2A2A',
        light: {
          1: '#F5F5F5',
          2: '#FAFAFA',
          DEFAULT: '#E1E5F2',
        },
        link: '#3324BB',
      },
    },
  },
  plugins: [],
};
