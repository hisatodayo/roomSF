export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'roomSF',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/firebase'],

  firebase: {
    config: {
      apiKey: "AIzaSyCw5w5lMqWH8JfKI5cCKoUA_2p2FTbyNNc",
      authDomain: "room-sf.firebaseapp.com",
      projectId: "room-sf",
      storageBucket: "room-sf.appspot.com",
      messagingSenderId: "623581770327",
      appId: "1:623581770327:web:2b7202f19d59ecda3ae912",
      measurementId: "G-4PTKJCZR36"
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
