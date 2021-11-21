import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
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
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {
  }
}

export default nuxtConfig
