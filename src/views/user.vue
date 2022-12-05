<!--
 * @Author: bzirs
 * @Date: 2022-12-04 15:59:51
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-05 20:42:29
 * @FilePath: /interview/src/views/user.vue
 * @Description: 用户页
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="user-page">
    <!-- 用户信息 -->
    <div class="user">
      <img :src="userInfor.avatar" alt="" />
      <h3>{{ userInfor.username }}</h3>
    </div>
    <!-- 宫格 -->
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="clock-o" text="历史记录" to="/" />
      <van-grid-item icon="label-o" text="我的收藏" to="/layout/collect" />
      <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/layout/like" />
    </van-grid>
    <!-- cell列表 -->
    <van-cell-group class="mt20">
      <van-cell title="推荐分享" is-link />
      <van-cell title="意见反馈" is-link />
      <van-cell title="关于我们" is-link />
      <van-cell title="退出登录" is-link @click="runDelToken" />
    </van-cell-group>
  </div>
</template>

<script>
import { delToken } from '@/utils/storage'
import { userInfo } from '@/api/user'

export default {
  name: 'user-page',
  components: {},
  data () {
    return {
      userInfor: {}
    }
  },
  async created () {
    const { data } = await userInfo()
    this.userInfor = data
  },
  methods: {
    async runDelToken () {
      await this.$dialog.confirm({
        title: '退出登录',
        message: '你确定要退出吗?',
        beforeClose
      })
      delToken()
      this.$router.push('/')
    }
  }
}

function beforeClose (action, done) {
  if (action === 'confirm') {
    setTimeout(done, 1000)
  } else {
    done()
  }
}
</script>

<style lang="less" scoped>
.user-page {
  padding: 0 10px;
  background: #f5f5f5;
  height: 100vh;
  .mt20 {
    margin-top: 20px;
  }
  .user {
    display: flex;
    padding: 20px 0;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    h3 {
      margin: 0;
      padding-left: 20px;
      font-size: 18px;
    }
  }
}
</style>
