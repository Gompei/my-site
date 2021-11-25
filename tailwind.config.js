module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // 'max-width': '100%',
            // 'box-sizing': 'border-box',
            'overflow-wrap': 'break-word',
            h1: {
              // color: '#3182ce',
              'margin-top': '0.6em'
            },
            h3: {
              // color: '#3182ce',
              'margin-top': '0.6em'
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
