<template>
  <div>
    <Content :articles="articles" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { Article } from '@/types'

@Component
export default class Index extends Vue {
  private articles: Article[] = []

  asyncData ({ query }: Context) {
    console.log(query)

    // TODO: テストデータ
    const articles: Article[] = []
    for (let i = 1; i <= 30; i++) {
      articles.push({
        id: i,
        title: 'テストタイトル' + i,
        subTitle: 'テストサブタイトル' + i,
        categoryTag: 'テストタグ' + i
      })
    }

    return { articles }
  }
}
</script>
