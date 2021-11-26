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
import { Context } from '@nuxt/types'
import { Article } from '@/types'

@Component({
  watchQuery: ['page']
})
export default class Index extends Vue {
  private articles: Article[] = []
  private total: number = 0
  private nowPage: number = 1

  asyncData ({ query }: Context) {
    console.log(typeof query)
    console.log(query.page)
    //  const page = parseInt(query.page);
    // this.nowPage = !query.page ? 1 : parseInt(query.page)

    // TODO: テストデータ
    const articles: Article[] = []
    for (let i = 1; i <= 8; i++) {
      articles.push({
        id: i,
        title: 'テストタイトル' + i,
        subTitle: 'テストサブタイトル' + i,
        categoryTag: 'テストタグ' + i
      })
    }

    return {
      articles,
      total: 80
    }
  }
}
</script>
