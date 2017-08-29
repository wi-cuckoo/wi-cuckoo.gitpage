const axios = require('axios')
const { join } = require('path')
const fs = require('fs')
const loaders = require('./config/extend_loader.js')

// console.log('shit', fs.readdirSync(join(__dirname, 'content/blog')))
// var blogs = fs.readdirSync(join(__dirname, 'content/blog'))
// blogs = blogs.map( el => el.split('.')[0].toLocaleLowerCase())

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wi-cuckoo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alive Fish' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push(loaders.lint_loader)
      }
    },
    /*
    ** Vuetify Plugin
    */
    vendor: ['vuetify']
  },

  /*
  ** dynamic route
  */
  // generate: {
  //   routes: []
  // },
  /*
  ** Module
  */
  modules: ['nuxtent'],

  plugins: ['~plugins/vuetify.js'],
  css: [
    { src: join(__dirname, 'assets/css/app.styl'), lang: 'styl' }
  ]
}
