<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nuxt-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img alt="gompei-blog-logo" src="@/assets/image/logo.webp" class="logo-image">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span class="ml-3 text-xl">Gompei Blog</span>
      </nuxt-link>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <nuxt-link to="/" class="mx-3 my-1 hover:text-gray-900">
          home
        </nuxt-link>
        <nuxt-link to="/about" class="mx-3 my-1 hover:text-gray-900">
          about
        </nuxt-link>
      </nav>
      <div>
        <a
          alt="github-logo"
          title="gompei gihtub account"
          href="https://github.com/Gompei"
          rel="noopener"
          target="_blank"
          class="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img class="object-cover object-center w-full h-full rounded-full" src="@/assets/image/gihtub_icon.webp" alt="github icon">
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo-image {
  width: 25px;
  height: 25px;
}
</style>
