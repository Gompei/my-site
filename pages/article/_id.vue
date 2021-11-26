<template>
  <div class="relative container mx-auto bg-white px-4">
    <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
      <img class="absolute inset-0 object-cover object-top w-full h-full filter blur" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="">
    </div>

    <div class="mt-[-10%] w-1/2 mx-auto">
      <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
        <img class="w-full h-full absolute inset-0 object-cover" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="">
      </div>
    </div>

    <article class="max-w-prose mx-auto py-8">
      <h1 class="text-2xl font-bold">
        テストタイトル
      </h1>

      <div class="flex flex-wrap justify-starts items-center text-xs text-white font-medium">
        <span class="m-1 px-2 py-1 rounded bg-indigo-500">
          #タグ
        </span>
      </div>

      <h2 class="mt-2 text-sm text-gray-500">
        作成:YYYY年MM月DD日 更新:YYYY年MM月DD日
      </h2>
      <p class="mt-6">
        これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。
      </p>
      <p class="mt-6">
        これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。
      </p>
      <p class="mt-6">
        これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。
      </p>
      <p class="mt-6">
        これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。これはテスト。
      </p>

      <!-- max-w-prose -->
      <!-- <div class="mt-6 prose prose-sm sm:prose break-all">
        <div v-html="post" />
      </div> -->
    </article>

    <div>
      <div class="container pt-5 w-1/2 mx-auto">
        <div class="text-center">
          <p class="sm:text-xl text-2xl font-medium text-gray-900">
            別記事
          </p>
        </div>
        <div class="flex justify-center">
          <div class="w-2/5 line rounded-full bg-indigo-500 inline-flex" />
        </div>
        <div>
          <div class="container mx-auto">
            <div class="flex flex-wrap place-items-center grid grid-cols-1 sm:grid-cols-2">
              <div class="p-1 flex-1">
                <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-72 cursor-pointer m-2">
                  <nuxt-link to="/article/11111">
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
              <div class="p-1 flex-1">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { marked } from 'marked'
import hljs from 'highlight.js'

@Component
export default class Id extends Vue {
  private markdown: string = `
# これ見出し
By default, Tailwind removes all of the default browser styling from paragraphs,

For more, [read the documentation](https://github.com/tailwindcss/typography/blob/master/README.md).

## AAA

### AAA

\`\`\`ruby
puts 'Hello World'
\`\`\`

\`\`\`html
<article class="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->
</article>
\`\`\`
---

\`\`\`js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
\`\`\`

## What to expect from here on out

It's important to cover all of these use cases for a few reasons:

1. We want everything to look good out of the box.
2. Really just the first reason, that's the whole point of the plugin.
3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.

### Typography should be easy

> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.
  `

  private post: string = ''

  created () {
    marked.setOptions({
      langPrefix: '',
      highlight (code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      },
      sanitize: true
    })
  }

  mounted () {
    this.post = marked(this.markdown)
  }
}
</script>

<style>
.line {
  height: 0.1px;
}

.pt-\[17\%\] {
padding-top: 17%;
}
.mt-\[-10\%\] {
margin-top: -10%;
}
.pt-\[56\.25\%\] {
padding-top: 56.25%;
}
</style>
