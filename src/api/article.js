/**
 * @Author: bzirs
 * @Date: 2022-12-04 20:37:33
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 22:59:36
 * @FilePath: /interview/src/api/article.js
 * @Description: article api
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import request from '@/utils/request'

// 获取文章列表
export const getArticleList = params => request.get('/interview/query', { params })

// 获取喜欢/收藏列表
export const getCollctList = params => request({ url: '/interview/opt/list', method: 'get', params })
