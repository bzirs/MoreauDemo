/**
 * @Author: bzirs
 * @Date: 2022-12-03 21:50:39
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 20:36:53
 * @FilePath: /interview/src/router/index.js
 * @Description: 路由
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import login from '@/views/login'
import register from '@/views/register'
import detail from '@/views/detail'
import layout from '@/views/layout'

// 二级路由
import article from '@/views/article'
import collect from '@/views/collect'
import like from '@/views/like'
import user from '@/views/user'

import { getToken } from '@/utils/storage'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: '', redirect: '/layout' },
  { path: '/login', component: login, name: 'login' },
  { path: '/register', component: register, name: 'register' },
  { path: '/detail', component: detail, name: 'detail' },
  {
    path: '/layout',
    component: layout,
    name: 'layout',
    children: [
      { path: '/layout', name: '', redirect: '/layout/article' },
      { path: '/layout/article', component: article, name: 'article' },
      { path: '/layout/collect', component: collect, name: 'collect' },
      { path: '/layout/like', component: like, name: 'like' },
      { path: '/layout/user', component: user, name: 'user' }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 不需要跳转的白名单
const whiteList = ['/login', '/register']
// 路由前置守卫
router.beforeEach((to, from, next) => {
  whiteList.includes(to.path) || getToken() ? next() : next('/login')
})

export default router
