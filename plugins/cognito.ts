import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { CognitoUserPool } from 'amazon-cognito-identity-js'

export default (context: Context, inject: Inject) => {
  inject('cognito', new CognitoUserPool({ UserPoolId: context.$config.userPoolId, ClientId: context.$config.clientId }))
}
