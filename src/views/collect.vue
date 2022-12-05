<!--
 * @Author: bzirs
 * @Date: 2022-12-04 15:59:51
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 23:00:38
 * @FilePath: /interview/src/views/collect.vue
 * @Description: 收藏页
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="collect-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="收藏" fixed></van-nav-bar>
    <!-- cell列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-item v-for="it in list" :key="it.id" :item="it"></article-item>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import { getCollctList } from '@/api/article'
export default {
  name: 'collect-page',
  components: {
    ArticleItem
  },
  data () {
    return {
      // 创建请求参数对象
      reqObj: {
        optType: 2,
        pageSize: 10,
        page: 1
      },
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      try {
        const {
          data: { rows }
        } = await getCollctList(this.reqObj)
        // this.list.push(...rows)
        // 加载动画结束
        !rows.length && (this.finished = true)
        this.loading = false
      } catch (error) {}
    }
  }
}
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
