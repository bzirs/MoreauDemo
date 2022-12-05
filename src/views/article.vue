<!--
 * @Author: bzirs
 * @Date: 2022-12-04 15:59:51
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-05 20:53:56
 * @FilePath: /interview/src/views/article.vue
 * @Description: 面经首页
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="article-page">
    <!-- 顶部栏 -->
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;" @click="changeSorter('weight_desc')">推荐</a>
      <!-- javascript:; 只有a标签可用 阻止默认跳转 -->
      <a href="javascript:;" @click="changeSorter('')">最新</a>
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
    </nav>
    <!-- cell列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-item
        v-for="it in list"
        :key="it.id"
        :item="it"
        @click.native="$router.push({ name: 'detail', params: { id: it.id } })"
      ></article-item>
      <!-- 默认给组件添加事件是$emit()传上来的事件 注册原生事件要用native修饰符 -->
    </van-list>
  </div>
</template>
<script>
import ArticleItem from '@/components/ArticleItem.vue'

import { getArticleList } from '@/api/article'
export default {
  components: { ArticleItem },
  name: 'article-page',
  data () {
    return {
      // 创建请求参数对象
      reqObj: {
        current: 1,
        pageSize: 10,
        sorter: ''
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
          data: { rows, pageTotal }
        } = await getArticleList(this.reqObj)
        this.list.push(...rows)
        // 加载动画结束
        pageTotal === this.reqObj.current++ && (this.finished = true)
        this.loading = false
      } catch (error) {}
    },
    changeSorter (sorter) {
      this.reqObj.current = 1
      this.reqObj.sorter = sorter
      this.list = []
      this.loading = true
      this.finished = false
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
