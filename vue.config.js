/**
 * @Author: bzirs
 * @Date: 2022-12-03 21:50:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 16:50:53
 * @FilePath: /interview/vue.config.js
 * @Description: vue配置文件
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
