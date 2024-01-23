const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'fp_pwa_with_ruffle'
  },

  publicPath: '/fp_pwa_with_ruffle',
  outputDir: 'docs',
  baseUrl: ""
})
