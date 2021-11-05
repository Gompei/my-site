<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="px-5 py-6 mx-auto">
        <div class="flex flex-col text-center w-full mb-4">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Articles
          </h1>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            ※エラーではありません。テスト公開です。
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            (  ´∀｀)＜ぬるぽ
          </h1>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="alertMessage">
          run
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Content extends Vue {
  alertMessage () {
    alert('(  ´∀｀)＜NullPointerException')
  }
}
</script>
