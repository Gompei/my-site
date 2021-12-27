<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center w-full h-full mb-5">
      <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <!-- https://hiyokoyarou.com/about/#kiyaku -->
        <video autoplay loop muted playsinline width="360px">
          <source src="https://gom60.com/image/utile/nanimoshitenai.webm" type="video/webm">
          Sorry, your browser doesn't support embedded videos.
        </video>
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { Article } from '@/types'

@Component({
  async asyncData (context: Context) {
    if (context.route.params.id === undefined) {
      context.redirect('/')
    }

    const article = await (await context.$repositories.clients.get(context.route.params.id)).data
    if (article.id === undefined || article.id === 0) {
      context.redirect('error/404')
    }

    return {
      article
    }
  },
  head () {
    return {
      title: `${this.article.title} | Gompei Blog - Gompeiのテックブログ`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.article.title} | Gompeiのテックブログ` },
        { hid: 'og:site_name', property: 'og:site_name', content: `${this.article.title} | Gompeiのテックブログ` },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `https://gom60.com/article/${this.article.id}` },
        { hid: 'og:title', property: 'og:title', content: `${this.article.title} | Gompeiのテックブログ` }
      ]
    }
  }
})
export default class Id extends Vue {
  private article: Article = {}
  private markdown: string = ''
  private loading: boolean = true

  created () {
    this.markdown = this.$marked(this.article.content === undefined ? '' : this.article.content)
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
