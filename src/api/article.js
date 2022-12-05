/**
 * @Author: bzirs
 * @Date: 2022-12-04 20:37:33
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-05 21:13:05
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

// 获取文章内容
export const getArticleDetail = id => request.get('/interview/show', { params: { id } })

// 收藏和取消收藏
export const changeCollect = id => request.post('/interview/opt', { id, optType: 2 })

// 喜欢和取消喜欢
export const changeLike = id => request.post('/interview/opt', { id, optType: 1 })
