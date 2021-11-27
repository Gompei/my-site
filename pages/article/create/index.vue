<template>
  <client-only>
    <div class="relative container mx-auto bg-white px-4">
      <div class="relative">
        <input type="file" multiple class="cursor-pointer absolute block opacity-0 w-full h-full p-20 z-50" @change="upload($event)">
        <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img class="absolute inset-0 object-cover object-top w-full h-full filter blur" :src="imgURL" alt="">
        </div>

        <div class="mt-[-10%] w-1/2 mx-auto">
          <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img class="w-full h-full absolute inset-0 object-cover" :src="imgURL" alt="create article img">
          </div>
        </div>
      </div>

      <article class="max-w-prose mx-auto py-8">
        <div class="mb-2">
          <input
            placeholder="タイトル"
            type="text"
            class="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          >
        </div>

        <div>
          <input
            placeholder="タグ,タグ,タグ"
            type="text"
            class="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          >
        </div>

        <div class="my-2">
          <datepicker
            lang="ja"
            placeholder="作成日"
          />
        </div>

        <div>
          <editor
            previewStyle="tab"
          />
        </div>

        <div>
          <button class="mt-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            作成
          </button>
        </div>
      </article>
    </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Editor } from '@toast-ui/vue-editor'

@Component
export default class Id extends Vue {
  $refs!: {
    toastuiEditor: Editor
  }

  private imgURL: string = require('@/assets/image/example.jpg')

  created () {
  }

  mounted () {
  }

  upload (event: any) {
    console.log(event.target.files)
  }
}
</script>

<style>
.pt-\[17\%\] {
padding-top: 17%;
}
.mt-\[-10\%\] {
margin-top: -10%;
}
.pt-\[56\.25\%\] {
padding-top: 56.25%;
}
</style>
