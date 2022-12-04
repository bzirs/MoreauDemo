/**
 * @Author: bzirs
 * @Date: 2022-12-03 21:50:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 16:40:23
 * @FilePath: /interview/babel.config.js
 * @Description: babel配置文件
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
}
