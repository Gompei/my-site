<template>
  <div>
    <!-- Title -->
    <div class="py-6">
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Articles
        </h1>
      </div>
    </div>
    <!-- Content -->
    <div>
      <div class="container">
        <div class="flex flex-wrap place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div v-for="(article, index) in articles" :key="index" class="p-1 flex-1">
            <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-72 cursor-pointer m-2">
              <nuxt-link to="/article">
                <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover">
                <div class="bg-white p-4">
                  <p class="text-indigo-500 text-2xl font-medium">
                    テストタイトル
                  </p>
                  <p class="text-gray-800 text-sm font-medium mb-2">
                    テストサブタイトル
                  </p>
                  <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                      #タグ
                    </span>
                  </div>
                  <div class="flex items-center mt-2">
                    <div class="pl-3">
                      <div class="font-medium">
                        YYYY年MM月DD日
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- スクロールページ -->
      <div class="flex flex-col items-center my-12">
        <div class="flex text-gray-700">
          <div class="h-8 w-8 mr-1 flex justify-center items-center  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-left w-4 h-4"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
          <div class="flex h-8 font-medium ">
            <nuxt-link to="/?page=1" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2" @click.native="transitionPage">
              1
            </nuxt-link>
            <nuxt-link to="/?page=2" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
              2
            </nuxt-link>
            <nuxt-link to="/?p=3" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
              3
            </nuxt-link>
            <div class="w-8 md:flex justify-center items-center hidden leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
              ...
            </div>
            <nuxt-link to="/?p=4" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
              13
            </nuxt-link>
            <nuxt-link to="/?p=5" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
              14
            </nuxt-link>
            <nuxt-link to="/?p=6" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
              15
            </nuxt-link>
          </div>
          <div class="h-8 w-8 ml-1 flex justify-center items-center  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-right w-4 h-4"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
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
    @Prop({ type: [Object, Array], required: true })
      articles: Article[] | undefined

    created () {
      console.log(this.articles)
    }
}
</script>
