<template>
  <client-only>
    <div class="relative container mx-auto bg-white px-4">
      <article class="max-w-prose mx-auto py-8">
        <div class="mb-2">
          <input
            v-model="article.title"
            placeholder="タイトル"
            type="text"
            class="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          >
        </div>

        <div class="mb-2">
          <input
            v-model="article.subTitle"
            placeholder="サブタイトル"
            type="text"
            class="text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          >
        </div>

        <div class="mb-2">
          <input
            v-model="article.imageUrl"
            placeholder="イメージ画像URL"
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
          作:
          <input v-model="article.createTimeStamp" class="rounded-lg border-2" type="date">
          更:
          <input v-model="article.updateTimeStamp" class="rounded-lg border-2" type="date">
        </div>

        <div>
          <label>
            公:
            <input v-model="article.publicFlg" type="checkbox">
          </label>
          <label>
            削:
            <input v-model="article.deleteFlg" type="checkbox">
          </label>
        </div>

        <div>
          <editor ref="toastuiEditor" previewStyle="tab" :initialValue="article.content" />
        </div>

        <div>
          <button class="mt-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" @click="putArticleData">
            PUT
          </button>
        </div>
      </article>
    </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import moment from 'moment'
import { Editor } from '@toast-ui/vue-editor'
import { Article } from '@/types'

@Component
export default class Create extends Vue {
  $refs!: {
    toastuiEditor: Editor
  }

  private article: Article = {
    id: 0,
    title: '',
    subTitle: '',
    imageUrl: '',
    categoryTag: [],
    content: '',
    createTimeStamp: moment().format('YYYY-MM-DD'),
    updateTimeStamp: moment().format('YYYY-MM-DD'),
    publicFlg: true,
    deleteFlg: false
  }

  private tag: string = ''

  created () {
    if (this.$route.query.id !== undefined) {
      this.getArticleData(this.$route.query.id.toString())
    }
  }

  async getArticleData (_id: string) {
    // const response = await this.$repositories.clients.get(id)
  }

  async putArticleData () {
    this.article.categoryTag = this.tag.split(',')
    this.article.content = this.getMarkdown()
    await this.$repositories.clients.put(this.article)
    alert('記事保存成功')
  }

  private getMarkdown () :string {
    return this.$refs.toastuiEditor.invoke('getMarkdown')
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
