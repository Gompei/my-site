<template>
  <div>
    {{ articles }}
    <Articles
      :articles="articles"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { Context } from '@nuxt/types'
import { Article } from '@/types'

@Component
export default class Index extends Vue {
  private articles: Article[] = []

  // async asyncData (context: Context) {
  //   const response = await context.$repositories.clients.list()
  //   return {
  //     articles: response.data
  //   }
  // }
}
</script>
