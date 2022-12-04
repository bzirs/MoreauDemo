<!--
 * @Author: bzirs
 * @Date: 2022-12-04 15:59:43
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 17:15:49
 * @FilePath: /interview/src/views/layout.vue
 * @Description:
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="layout-page">
    <!-- 首页架子 - 内容区域 -->
    <router-view></router-view>
    <!-- 底部tabbar - 区域 -->
    <van-tabbar route>
      <van-tabbar-item to="/layout/article" icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item to="/layout/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/layout/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/layout/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page'
}
</script>

<style lang="less" scoped></style>
