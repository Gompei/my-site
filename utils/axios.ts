// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'

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

function toUnderscoreCase (str: string): string {
  return str.split(/(?=[A-Z])/).join('_').toLowerCase()
}

function toUnderscoreCaseObject (obj: any) {
  const result = {}
  for (const key in obj) {
    // TODO
    // @ts-ignore
    result[toUnderscoreCase(key)] = obj[key]
  }
  return result
}

const settingsAxios = (axios: NuxtAxiosInstance): NuxtAxiosInstance => {
  axios.interceptors.request.use((request) => {
    request.data = toUnderscoreCaseObject(request.data)
    return request
  })

  axios.interceptors.response.use((response) => {
    if (response.headers['content-type'] === 'application/json' && response.config.method === 'get') {
      response.data = toCamelCaseObject(response.data)
    }
    return response
  })

  return axios
}

export default settingsAxios
