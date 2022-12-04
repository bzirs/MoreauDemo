/**
 * @Author: bzirs
 * @Date: 2022-12-04 15:27:17
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 15:42:00
 * @FilePath: /interview/src/api/storage.js
 * @Description: localstorage 模块化提取封装
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

// 设置token名
const token = 'my_token'

// 获取token
export const getToken = _ => localStorage.getItem(token)

// 设置token
export const setToken = newToken => localStorage.setItem(token, newToken)

// 删除token
export const delToken = _ => localStorage.removeItem(token)
