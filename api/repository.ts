
// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'
import { Article } from '@/types'

export interface CRUDActions {
    list(query?: string): Promise<AxiosResponse<Article[]>>
    get(id: string): Promise<AxiosResponse<Article>>
    put<T>(payload: any): Promise<AxiosResponse<T>>
    delete<T>(id: string): Promise<AxiosResponse<T>>
    test<T>(): Promise<AxiosResponse<T>>
}

export default (client: NuxtAxiosInstance) => (resource: string) => ({
  list () {
    return client.get<Article[]>(`api/${resource}/list`)
  },
  get (id: number) {
    return client.get<Article>(`api/${resource}/${id}`)
  },
  put<T> (payload: any) {
    return client.put<T>(`api/${resource}`, payload)
  },
  delete (id?: number) {
    return client.delete(`api/${resource}/${id}`)
  },
  test () {
    return client.get('/api/test')
  }
})
