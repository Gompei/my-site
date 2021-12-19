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
                <img alt="blog photo" :src="article.imageUrl" class="max-h-40 w-full object-cover" width="100%" height="100%">
                <div class="bg-white px-4 py-3">
                  <p class="text-indigo-500 text-xl font-medium">
                    {{ article.title }}
                  </p>
                  <p class="text-gray-800 text-sm font-medium mb-2">
                    {{ article.subTitle }}
                  </p>
                  <div class="flex flex-wrap justify-starts items-center py-2 border-b-2 text-xs text-white font-medium">
                    <span v-for="(tag, j) in article.categoryTag" :key="j" class="text-xs m-1 px-2 py-1 rounded bg-indigo-500">
                      #{{ tag }}
                    </span>
                  </div>
                  <div class="flex items-center mt-2">
                    <div class="pl-1">
                      <div class="text-xs font-medium">
                        作成日:{{ article.createTimeStamp }}&nbsp;
                        更新日:{{ article.updateTimeStamp }}
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
}
</script>
