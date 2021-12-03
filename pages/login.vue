<template>
  <div class="flex flex-col justify-center">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 class="font-bold text-center text-2xl mb-5">
        Gompei Blog
      </h1>
      <div v-if="loading" class="flex items-center justify-center w-full h-full mb-5">
        <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg fill="none" class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
          <div>Loading ...</div>
        </div>
      </div>
      <form>
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div class="px-5 py-7">
            <label class="font-semibold text-sm text-gray-600 pb-1 block">ID</label>
            <input v-model="userID" type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
            <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
            <input v-model="password" type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
            <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" @click="login">
              <span class="inline-block mr-2">Login</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'

@Component
export default class Login extends Vue {
  private userID : string = ''
  private password: string = ''
  private loading: boolean = false

  private login () {
    console.log('ログイン処理')
    this.loading = true

    const cognitoUser = new CognitoUser({ Username: this.userID, Pool: this.$cognito })
    const authenticationDetails = new AuthenticationDetails({ Username: this.userID, Password: this.password })

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (_session: CognitoUserSession) => {
        this.loading = false
        this.$router.push('/')
      },
      onFailure: (err: any) => {
        this.loading = false
        console.log(err)
      },
      newPasswordRequired (_userAttributes:any, _requiredAttributes: any) {
        // 本当はよろしくない処理(良い子は真似しちゃ駄目)
        cognitoUser.completeNewPasswordChallenge(authenticationDetails.getPassword(), {}, this)
      }
    })
  }
}
</script>
