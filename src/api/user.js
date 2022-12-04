/**
 * @Author: bzirs
 * @Date: 2022-12-04 15:15:54
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 17:28:13
 * @FilePath: /interview/src/api/user.js
 * @Description: user 请求二次封装
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */

import request from '@/utils/request'

// 用户登录
export const userLogin = obj => request.post('/user/login', obj)

// 用户注册
export const userRegister = obj => request.post('/user/register', obj)
