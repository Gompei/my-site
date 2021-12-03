import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { Repositories } from '@/plugins/repositoryFactory'

declare module 'vue/types/vue' {
    interface Vue {
      $repositories: Repositories
      $cognito: CognitoUserPool
    }
}

declare module '@nuxt/types' {
  interface Context {
    $repositories: Repositories
  }
}
