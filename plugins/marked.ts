import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { marked } from 'marked'
import hljs from '@/utils/hljs'

marked.setOptions({
  langPrefix: '',
  highlight (code, lang) {
    return hljs.highlightAuto(code, [lang]).value
  }
})

export default (_context: Context, inject: Inject) => {
  inject('marked', marked)
}
