<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center w-full h-full mb-5">
      <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <!-- https://hiyokoyarou.com/about/#kiyaku -->
        <img src="https://gom60.com/image/utile/nanimoshitenai.gif" width="360px">
      </div>
    </div>
    <div v-else>
      <Articles
        :articles="articles"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Article } from '@/types'

@Component
export default class Index extends Vue {
  private articles: Article[] = []
  private loading: boolean = true

  created () {
    this.listArticleData()
  }

  async listArticleData () {
    const response = await this.$repositories.clients.list()
    this.articles = response.data

    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
