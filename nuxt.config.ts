import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  target: 'static',
  head: {
    title: 'Shoei Gompei: Gompei',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shoei Gompei About' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Shoei Gompei About' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Shoei Gompei: Gompei' },
      { hid: 'og:url', property: 'og:url', content: 'https://gom60.com/' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  modules: [],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/error/404.vue')
      })
    }
  }
}

export default nuxtConfig
