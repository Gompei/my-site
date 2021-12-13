<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center w-full h-full mb-5">
      <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <svg fill="none" class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>
        <div>Loading ...</div>
      </div>
    </div>
    <div v-else class="relative container mx-auto bg-white px-4">
      <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
        <img class="absolute inset-0 object-cover object-top w-full h-full filter blur" :src="article.imageUrl" alt="article image">
      </div>

      <div class="mt-[-10%] w-1/2 mx-auto">
        <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
          <img class="w-full h-full absolute inset-0 object-cover" :src="article.imageUrl" alt="article image">
        </div>
      </div>

      <article class="max-w-prose mx-auto py-8">
        <h1 class="text-2xl font-bold">
          {{ article.title }}
        </h1>

        <div class="flex flex-wrap justify-starts items-center py-2 border-b-2 text-xs text-white font-medium">
          <span v-for="(tag, j) in article.categoryTag" :key="j" class="text-xs m-1 px-2 py-1 rounded bg-indigo-500">
            #{{ tag }}
          </span>
        </div>

        <h2 class="mt-2 text-sm text-gray-500">
          作成日:{{ article.createTimeStamp }}&nbsp;
          更新日:{{ article.updateTimeStamp }}
        </h2>

        <div class="mt-6 prose prose-sm sm:prose break-all">
          <div v-html="markdown" />
        </div>
      </article>

    <!-- <div>
      <div class="container pt-5 w-1/2 mx-auto">
        <div class="text-center">
          <p class="sm:text-xl text-2xl font-medium text-gray-900">
            別記事
          </p>
        </div>
        <div class="flex justify-center">
          <div class="w-2/5 line rounded-full bg-indigo-500 inline-flex" />
        </div>
        <div>
          <div class="container mx-auto">
            <div class="flex flex-wrap place-items-center grid grid-cols-1 sm:grid-cols-2">
              <div class="p-1 flex-1">
                <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-72 cursor-pointer m-2">
                  <nuxt-link to="/article/11111">
                    <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover">
                    <div class="bg-white p-4">
                      <p class="text-indigo-500 text-2xl font-medium">
                        テストタイトル
                      </p>
                      <p class="text-gray-800 text-sm font-medium mb-2">
                        テストサブタイトル
                      </p>
                      <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                        <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                          #タグ
                        </span>
                      </div>
                      <div class="flex items-center mt-2">
                        <div class="pl-3">
                          <div class="font-medium">
                            YYYY年MM月DD日
                          </div>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <div class="p-1 flex-1">
                <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-72 cursor-pointer m-2">
                  <nuxt-link to="/article">
                    <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover">
                    <div class="bg-white p-4">
                      <p class="text-indigo-500 text-2xl font-medium">
                        テストタイトル
                      </p>
                      <p class="text-gray-800 text-sm font-medium mb-2">
                        テストサブタイトル
                      </p>
                      <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                        <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                          #タグ
                        </span>
                      </div>
                      <div class="flex items-center mt-2">
                        <div class="pl-3">
                          <div class="font-medium">
                            YYYY年MM月DD日
                          </div>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { Article } from '@/types'

@Component
export default class Id extends Vue {
  private article: Article = {}
  private markdown: string = ''
  private loading: boolean = true

  created () {
    marked.setOptions({
      langPrefix: '',
      highlight (code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      }
    })

    if (this.$route.params.id !== undefined) {
      this.getArticleData(this.$route.params.id.toString())
    } else {
      this.$router.push('/')
    }
  }

  async getArticleData (id: string) {
    const response = await this.$repositories.clients.get(id)
    this.article = response.data
    this.markdown = marked(this.article.content === undefined ? '' : this.article.content)
    this.loading = false
  }
}
</script>

<style>
.line {
  height: 0.1px;
}

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
