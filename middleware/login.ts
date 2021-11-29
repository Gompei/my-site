import { Middleware, Context } from '@nuxt/types'

const loginList = ['/article/edit']

const login: Middleware = (context: Context) => {
  if (loginList.includes(context.route.path)) {
    context.redirect('/')
  }
}

export default login
