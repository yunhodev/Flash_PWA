const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Flash_PWA',
    workboxPluginMode: "InjectManifest",
    workboxOptions:{
      swSrc: "./src/service-worker.js"
    }
  },

  publicPath: '/Flash_PWA/',
  outputDir: 'docs'
})
