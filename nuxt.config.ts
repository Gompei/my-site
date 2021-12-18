import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  server: {
    port: '8080'
  },
  generate: {
    fallback: 'error.html'
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || '',
    // 別にみられて良いので記載
    apiKey: process.env.API_KEY || ''
  },
  target: 'static',
  head: {
    title: 'Gompei Blog',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gompei Blog' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Gompeiのテックブログ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Gompeiのテックブログ' },
      { hid: 'og:url', property: 'og:url', content: 'https://gom60.com/' },
      { hid: 'og:description', property: 'og:description', content: 'バックエンドエンジニア Gompeiのテックブログです。Golang、AWS、GCP、サーバーサイド寄りの情報を記事にしています。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/node_modules/highlight.js/styles/vs2015.css'
  ],
  plugins: [
    '@/plugins/repositoryFactory.ts',
    '@/plugins/tuiEditor.client.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
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
