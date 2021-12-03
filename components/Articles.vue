<template>
  <div>
    <div class="py-6">
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Articles
        </h1>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="flex flex-wrap place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div v-for="(article, i) in articles" :key="i" class="p-1 flex-1">
            <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-72 cursor-pointer m-2">
              <nuxt-link :to="{ name: 'article-id', params: { id: article.id }}">
                <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover">
                <div class="bg-white p-4">
                  <p class="text-indigo-500 text-2xl font-medium">
                    {{ article.title }}
                  </p>
                  <p class="text-gray-800 text-sm font-medium mb-2">
                    {{ article.subTitle }}
                  </p>
                  <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span v-for="(tag, j) in article.categoryTag" :key="j" class="m-1 px-2 py-1 rounded bg-indigo-500">
                      #{{ tag }}
                      {{ j }}
                    </span>
                  </div>
                  <div class="flex items-center mt-2">
                    <div class="pl-3">
                      <div class="font-medium">
                        {{ article.create_time_stamp }}
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Article } from '@/types'

@Component
export default class Articles extends Vue {
    @Prop({ type: [Object, Array], required: true, default: [] })
      articles!: Article[]

    mounted () {
      console.log(this.articles)
    }
}
</script>
