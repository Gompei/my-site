<template>
  <div>
    <Articles
      :nowPage="nowPage"
      :articles="articles"
      :total="total"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Article } from '@/types'

@Component
export default class Index extends Vue {
  private articles: Article[] = []
  private total: number = 0
  private nowPage: number = 1

  asyncData () {
    return {}
  }
}
</script>
