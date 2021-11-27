<template>
  <div class="relative container mx-auto bg-white px-4">
    <div class="relative">
      <input type="file" multiple class="cursor-pointer absolute block opacity-0 w-full h-full p-20 z-50" @change="upload($event)">
      <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
        <img class="absolute inset-0 object-cover object-top w-full h-full filter blur" :src="imgURL" alt="">
      </div>

      <div class="mt-[-10%] w-1/2 mx-auto">
        <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
          <img class="w-full h-full absolute inset-0 object-cover" :src="imgURL" alt="">
        </div>
      </div>
    </div>

    <article class="max-w-prose mx-auto py-8">
      <h1 class="text-2xl font-bold">
        テストタイトル
      </h1>

      <div class="flex flex-wrap justify-starts items-center text-xs text-white font-medium">
        <span class="m-1 px-2 py-1 rounded bg-indigo-500">
          #タグ
        </span>
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
    </article>
  </div>
  </div>
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
