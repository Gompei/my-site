
// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'
import { Article } from '@/types'

export interface CRUDActions {
    list(): Promise<AxiosResponse<Article[]>>
    get(id: string): Promise<AxiosResponse<Article>>
}

export default (client: NuxtAxiosInstance) => (resource: string) => ({
  list () {
    return client.get<Article[]>(`api/${resource}/list`)
  },
  get (id: number) {
    return client.get<Article>(`api/${resource}/${id}`)
  }
})
