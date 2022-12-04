/**
 * @Author: bzirs
 * @Date: 2022-12-04 14:48:27
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 14:48:30
 * @FilePath: \interview\postcss.config.js
 * @Description: 创建postcss-pxtorem配置文件
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
