<template>
  <div class="my-4 w-screen flex items-center">
    <div class="container flex flex-col md:flex-row items-center justify-center text-gray-700">
      <div class="text-center max-w-md">
        <div class="text-5xl font-dark font-bold">
          {{ error.statusCode }}
        </div>
        <p class="text-2xl md:text-3xl font-dark font-bold">
          {{ errorMessage }}
        </p>
      </div>
      <div>
        <img src="~/assets/image/error_icon.png" class="error-image" alt="error icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  mounted () {
    switch (this.error.statusCode) {
      case 404:
        this.errorMessage = 'Not Found'
        break
      case 500:
        this.errorMessage = 'Internal Server Error'
        break
      default :
        this.errorMessage = 'Error'
    }
  }
}
</script>
