import { Repositories } from '@/plugins/repositoryFactory'

declare module 'vue/types/vue' {
    interface Vue {
      $repositories: Repositories
      // TODO
      $marked(src: string): string;
    }
}

declare module '@nuxt/types' {
  interface Context {
    $repositories: Repositories
    // TODO
    $marked(src: string): string;
  }
}
