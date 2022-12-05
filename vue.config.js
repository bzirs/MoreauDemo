/**
 * @Author: bzirs
 * @Date: 2022-12-03 21:50:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-05 21:37:50
 * @FilePath: /interview/vue.config.js
 * @Description: vue配置文件
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 打包前要改变打包后的读取文件的路径
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            blue: '#FA6D1D'
          }
        }
      }
    }
  }
})
