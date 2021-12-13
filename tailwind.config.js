module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1,h2,h3,h4': {
              marginTop: '1em',
              marginBottom: '1em'
            },
            p: {
              marginTop: '0.2em',
              marginBottom: '0.2em'
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
