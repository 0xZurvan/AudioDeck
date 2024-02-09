// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  supabase: {
    redirect: false,
  },
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: ['./assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
