const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Flash_PWA'
  },

  publicPath: '/Flash_PWA/',
  outputDir: 'docs'
})
