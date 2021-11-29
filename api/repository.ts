
// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'

export interface CRUDActions {
    list<T>(query?: string): Promise<AxiosResponse<T>>
    get<T>(id: number): Promise<AxiosResponse<T>>
    put<T>(payload: any): Promise<AxiosResponse<T>>
    delete<T>(id: number): Promise<AxiosResponse<T>>
}

export default (client: NuxtAxiosInstance) => (resource: string) => ({
  list<T> (query?: string) {
    return client.get<T>(`api/${resource}/?${query}`)
  },
  get<T> (id: number) {
    return client.get<T>(`api/${resource}/${id}`)
  },
  put<T> (payload: any) {
    return client.put<T>(`api/${resource}`, payload)
  },
  delete (id?: number) {
    return client.delete(`api/${resource}/${id}`)
  }
})
