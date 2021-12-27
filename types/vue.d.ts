import { Repositories } from '@/plugins/repositoryFactory'
import { Article } from '@/types'

declare module 'vue/types/vue' {
    interface Vue {
      $repositories: Repositories
      // TODO
      $marked(src: string): string;
      // TODO
      article: Article
    }
}

declare module '@nuxt/types' {
  interface Context {
    $repositories: Repositories
    // TODO
    $marked(src: string): string;
  }
}
