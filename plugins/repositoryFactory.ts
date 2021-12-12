import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import createRepositories, { CRUDActions } from '@/api/repository'
import settingsAxios from '~/utils/axios'

export interface Repositories {
    clients: CRUDActions
}

export default (context: Context, inject: Inject) => {
  const axios = settingsAxios(context, context.$axios)
  const repositoryWithAxios = createRepositories(axios)
  const repositories = {
    clients: repositoryWithAxios('article')
  }
  inject('repositories', repositories)
}
