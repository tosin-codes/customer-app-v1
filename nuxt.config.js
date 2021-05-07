export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vue-select/dist/vue-select.css', '~/assets/transition.css'],

  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/mixins/user.js',
    './plugins/axios.js',
    './plugins/mixins/validation.js',
    { src: '~/plugins/vuelidate.js' },
    // { src: '~/plugins/vue-web-cam.js', mode: 'client' },
    { src: '~/plugins/noty.js', mode: 'client' },
    { src: '~/plugins/persistedState.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // 'vue-web-cam/nuxt',

    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'data',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/signin', method: 'post' },
          signup: { url: '/signup', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' },
        },
      },
    },
    redirect: {
      login: '/login',
      home: '/dashboard',
      logout: '/login',
    },
  },
  router: {
    middleware: ['clearValidationErrors'],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://cashapi.cashdrive.co/api/v1/',
    // baseURL: 'https://cashapi.staging.cashdrive.co/api/v1/',
    baseURL: 'http://127.0.0.1:8000/api/v1/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
