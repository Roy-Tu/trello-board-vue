// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  ssr: false,
  devServer: {
    port: 2258,
  },
  app: {
    head: {
      title: "My Trello Board",
    },
  },
});
