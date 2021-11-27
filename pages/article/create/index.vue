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
          :style="style"
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

  get style () {
    return {
      '--v-calendar-picker-color': ' #1b1e23;',
      '--v-calendar-input-bg-color': '#1b1e23;',
      '--v-calendar-select-bg-color': ' #1b1e23;',
      '--v-calendar-border-color': ' #323B43;',
      '--v-calendar-triangle-color': ' #1b1e23;',
      '--v-calendar-shadow': ' 0 20px 30px 0 rgba(0, 0, 0, 0.2);',
      '--v-calendar-top-shadow': ' 3px -14px 30px 0px rgba(0, 0, 0, 0.2);',
      '--v-calendar-text-color': '#b8b8b9;',
      '--v-calendar-action-color': ' #b8b8b9;',
      '--v-calendar-text-disabled-color': ' #b8b8b97c;',
      '--v-calendar-view-button-color': '#b8b8b9;',
      '--v-calendar-datepicker-icon-color': ' #b8b8b9;',
      '--v-calendar-datepicker-icon-size': ' 1.1rem;',
      '--v-calendar-active-bg-color': ' #f7cd00;',
      '--v-calendar-active-text-color': '#323B43;',
      '--v-calendar-range-bg-color': ' #282c34;',
      '--v-calendar-view-button-font-weight': ' 00;',
      '--v-calendar-view-button-font-size': ' 1.1rem;',
      '--v-calendar-range-text-color': ' #ddd;',
      '--v-calendar-range-radius': ' 100%;',
      '--v-calendar-day-hover-bg-color': '#323B43;',
      '--v-calendar-day-width': ' 45px;',
      '--v-calendar-day-height': ' 45px;',
      '--v-calendar-day-font-size': ' 0.8rem;',
      '--v-calendar-day-font-weight': ' 500;',
      '--v-calendar-input-border': ' 1px solid #383e48;',
      '--v-calendar-input-text-color': ' #323B43;',
      '--v-calendar-input-font-size': ' 0.9rem;',
      '--v-calendar-input-font-weight': ' 500;',
      '--v-calendar-content-radius': ' 6px;',
      '--v-calendar-day-name-font-size': ' 0.9rem;',
      '--v-calendar-day-name-font-weight': ' 600;',
      '--v-calendar-day-name-color': '#323B43;',
      '--v-calendar-year-font-size': ' 1.1rem;',
      '--v-calendar-year-color': ' #b8b8b9;',
      '--v-calendar-year-font-weight': ' 500;',
      '--v-calendar-input-bg-disable-color': 'rgb(245, 245, 245);',
      '--v-calendar-input-text-disable-color': '#b8b8b9;',
      '--v-calendar-year-disabled-color': ' #b8b8b9;',
      '--v-calendar-year-disabled-bg-color': ' transparent;',
      '--v-calendar-year-padding': ' 10px;',
      '--v-calendar-year-border': ' none;',
      '--v-calendar-year-border-radius': ' none;',
      '--v-calendar-month-font-size': ' 1.1rem;',
      '--v-calendar-month-color': ' #b8b8b9;',
      '--v-calendar-month-font-weight': ' 500;',
      '--v-calendar-month-disabled-color': ' #b8b8b9;',
      '--v-calendar-month-disabled-bg-color': ' transparent;',
      '--v-calendar-month-padding': ' 8px;',
      '--v-calendar-month-border': ' none;',
      '--v-calendar-month-border-radius': ' none;'
    }
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
