<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="md:mr-auto flex flex-wrap items-center text-base justify-center" />
      <div class="mr-4">
        <a
          alt="github-logo"
          title="gompei gihtub account"
          href="https://github.com/Gompei"
          rel="noopener"
          target="_blank"
          class="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img class="object-cover object-center w-full h-full rounded-full" src="https://gom60.com/image/utile/gihtub_icon.webp" alt="github icon" width="100%" height="100%">
        </a>
      </div>
      <div class="mr-3">
        <a
          alt="zenn-logo"
          title="gompei zenn account"
          href="https://zenn.dev/gompei"
          rel="noopener"
          target="_blank"
          class="block w-8 h-8 transition-all transform hover:scale-110 hover:rotate-12"
        >
          <img class="object-cover object-center w-full h-full" src="https://gom60.com/image/utile/zenn_icon.webp" alt="zenn icon" width="100%" height="100%">
        </a>
      </div>
      <div>
        <a
          alt="atcoder-icon"
          title="gompei atcoder account"
          href="#"
          rel="noopener"
          target="_blank"
          class="block w-9 h-9d transition-all transform hover:scale-110 hover:rotate-12"
          @click.prevent.stop="alert('Coming soon...')"
        >
          <img class="object-cover object-center w-full h-full" src="https://gom60.com/image/utile/unicorn_icon.webp" alt="atcoder icon" width="100%" height="100%">
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  private alert (message : string) {
    window.alert(message)
  }
}
</script>

<style scoped>
.logo-image {
  width: 25px;
  height: 25px;
}
</style>
