import { Middleware, Context } from '@nuxt/types'
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'

const loginList = ['/article/edit']

const login: Middleware = (context: Context) => {
  if (loginList.includes(context.route.path)) {
    const cognitoUser: CognitoUser | null = context.app.context.$cognitoUserPool.getCurrentUser()

    if (cognitoUser !== null) {
      cognitoUser.getSession((err: Error | null, _session : CognitoUserSession) => {
        if (err !== null) {
          context.redirect('/')
        }
      })
    } else {
      context.redirect('/')
    }
  }
}

export default login
