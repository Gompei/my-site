// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Context } from '@nuxt/types'

function toCamelCase (str: string): string {
  return str.split('_').map(function (word, index) {
    if (index === 0) {
      return word.toLowerCase()
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }).join('')
}

function toCamelCaseObject (obj: Object) {
  const result = {}
  for (const key in obj) {
    // TODO
    // @ts-ignore
    result[toCamelCase(key)] = obj[key]
  }
  return result
}

const settingsAxios = (context: Context, axios: NuxtAxiosInstance): NuxtAxiosInstance => {
  axios.setBaseURL(context.$config.baseURL)
  axios.setHeader('x-api-key', context.$config.apiKey)

  axios.interceptors.response.use((response) => {
    if (response.headers['content-type'] === 'application/json' && response.config.method === 'get') {
      if (Array.isArray(response.data)) {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = toCamelCaseObject(response.data[i])
        }
      } else {
        response.data = toCamelCaseObject(response.data)
      }
    }
    return response
  })

  axios.onError((error) => {
    if (error.response?.status === 404) {
      context.redirect('/error/404')
    }

    context.redirect('/error/500')
  })

  return axios
}

export default settingsAxios
