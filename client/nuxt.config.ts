// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    preset: 'netlify'
  },
  modules: [
    '@nuxtjs/supabase', 
    '@pinia/nuxt', 
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt', 
    '@nuxt/image'
  ],
  supabase: {
    redirect: false
  },
  // @ts-ignore
  image: {
    quality:'auto:best',
    presets: {
      avatar: {
        modifiers: {
          width: 8,
          height: 8
        }
      }
    },
    modifiers: {
      quality: 'auto:best',
    }
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
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
