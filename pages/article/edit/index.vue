<template>
  <client-only>
    <div class="relative container mx-auto bg-white px-4">
      <div class="relative">
        <input type="file" multiple class="cursor-pointer absolute block opacity-0 w-full h-full p-20 z-50" @change="changeImgURL($event)">
        <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img class="absolute inset-0 object-cover object-top w-full h-full filter blur" :src="imgURL" alt="create article img">
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
            v-model="title"
            placeholder="タイトル,サブタイトル"
            type="text"
            class="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          >
        </div>

        <div>
          <input
            v-model="tag"
            placeholder="タグ,タグ,タグ"
            type="text"
            class="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          >
        </div>

        <div class="my-2">
          <input class="rounded-lg border-2" type="date">
        </div>

        <div>
          <editor previewStyle="tab" />
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

@Component
export default class Create extends Vue {
  private imgURL: any = require('@/assets/image/example.jpg')
  private title: string = ''
  private subTitle = ''
  private tag: string = ''
  private date: any = ''

  changeImgURL (event: any) {
    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])

    reader.onload = () => {
      this.imgURL = reader.result
    }
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
