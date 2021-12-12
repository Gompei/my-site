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
}
</script>
