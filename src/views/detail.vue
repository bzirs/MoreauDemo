<!--
 * @Author: bzirs
 * @Date: 2022-12-04 15:59:43
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-05 21:32:12
 * @FilePath: /interview/src/views/detail.vue
 * @Description:
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="detail-page">
    <van-nav-bar left-text="返回" fixed title="面经详细" @click.native="$router.back()" />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>{{ article.createdAt }} | {{ article.views }} 浏览量 | {{ article.likeCount }} 点赞数</p>
      <p>
        <img :src="article.avatar" alt="" />
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="article.content"></main>
    <div class="opt">
      <van-icon :class="{ active: article.likeFlag }" name="like-o" @click="toChangeLike" />
      <van-icon :class="{ active: article.collectFlag }" name="star-o" @click="toChangeCollect" />
    </div>
  </div>
</template>

<script>
// 导入接口
import { getArticleDetail, changeCollect, changeLike } from '@/api/article'
import { Toast } from 'vant'

export default {
  name: 'detail-page',
  data () {
    return {
      article: {},
      id: this.$route.params.id
    }
  },
  async created () {
    const { data } = await getArticleDetail(this.id)
    this.article = data
  },
  methods: {
    async toChangeCollect () {
      try {
        await changeCollect(this.id)

        this.article.collectFlag = !this.article.collectFlag
        this.article.collectFlag ? Toast.success('收藏成功') : Toast.fail('取消收藏')
      } catch (error) {}
    },
    async toChangeLike () {
      try {
        await changeLike(this.id)

        this.article.likeFlag = !this.article.likeFlag
        if (this.article.likeFlag) {
          Toast.success('喜欢成功')
          this.article.likeCount++
        } else {
          Toast.fail('取消喜欢')
          this.article.likeCount--
        }
      } catch (error) {}
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
