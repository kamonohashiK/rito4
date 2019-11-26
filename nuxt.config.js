import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'しまの時刻表',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '日本全国の有人離島の船の時刻表データ(定期航路が存在する場合のみ)を掲載しているサイトです。検索対象はこれから徐々に拡大してく予定。※当サイトと情報を掲載している海運会社等とは、一切関係はありません。' },
      { name: 'twitter:card', content: 'summary'},
			{ name: 'twitter:site', content: '@platypus_k86'},
			{ name: 'og:url', content: 'https://shimajikoku.com/'},
			{ name: 'og:title', content: 'しまの時刻表'},
			{ name: 'og:description', content: '日本全国の有人離島の船の時刻表データ(定期航路が存在する場合のみ)を掲載しているサイトです。検索対象はこれから徐々に拡大してく予定。※当サイトと情報を掲載している海運会社等とは、一切関係はありません。' },
			{ name: 'og:image', content: 'https://shimajikoku.com/image.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:"~plugins/vue2-google-maps.js"}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    ['@nuxtjs/moment', ['ja']],
    '@nuxtjs/device',
    ['@nuxtjs/google-analytics', {
      id: 'UA-90339429-5'
    }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  vendor:["vue2-google-maps"],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
