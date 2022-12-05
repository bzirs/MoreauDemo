/**
 * @Author: bzirs
 * @Date: 2022-12-04 14:53:46
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-05 21:25:37
 * @FilePath: /interview/src/utils/request.js
 * @Description: axios拦截器
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

// 导入 Toast
import { Toast } from 'vant'

import axios from 'axios'

// 导入token
import { getToken, delToken } from './storage'

// 导入router
import router from '@/router'
// 创建axios实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    const token = getToken() || ''

    token && (config.headers.Authorization = `Bearer ${token}`)

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const {
      response: {
        data: { message },
        status
      }
    } = error
    console.log(status)
    if (status === 401) {
      delToken()
      router.push('/login')
    }
    if (status === 422) router.push('/')
    Toast.fail(message)

    return Promise.reject(error)
  }
)

export default request
