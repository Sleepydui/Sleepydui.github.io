const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./", // 打包后的位置(如果不设置这个，放到服务器根目录下会报错)🐱
  configureWebpack: {
    plugins: [],
  },
  chainWebpack: config => {
    // 注入Vue编译期特性flag，消除生产提示
    config.plugin('define').tap(args => {
      args[0]['__VUE_OPTIONS_API__'] = JSON.stringify(true)
      args[0]['__VUE_PROD_DEVTOOLS__'] = JSON.stringify(false)
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false)
      return args
    })
  }
})
