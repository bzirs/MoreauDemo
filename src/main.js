/**
 * @Author: bzirs
 * @Date: 2022-12-03 21:50:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 20:30:27
 * @FilePath: /interview/src/main.js
 * @Description:
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入vantui组件
import '@/utils/vant'

// 导入 amfe-flexible
import 'amfe-flexible'

// 注册全局组件
import ArticleItem from '@/components/ArticleItem'

Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
