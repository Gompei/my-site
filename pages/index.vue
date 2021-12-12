<template>
  <div>
    <Articles
      :articles="articles"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Article } from '@/types'

@Component
export default class Index extends Vue {
  private articles: Article[] = []

  created () {
    this.listArticleData()
  }

  async listArticleData () {
    const response = await this.$repositories.clients.list()
    this.articles = response.data
  }
}
</script>
