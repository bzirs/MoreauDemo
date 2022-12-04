<!--
 * @Author: bzirs
 * @Date: 2022-12-04 15:59:43
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 19:40:34
 * @FilePath: /interview/src/views/login.vue
 * @Description: login 页
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="login-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="面经登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{6,16}$/, message: '用户名为6-16位字符' }
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,16}$/, message: '密码为6-16位字符' }
        ]"
      />
      <div style="margin: 16px">
        <van-button square block type="info" native-type="submit">登录</van-button>
      </div>
      <router-link to="/register" class="link">点我注册捏</router-link>
    </van-form>
  </div>
</template>

<script>
import { userLogin } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const {
          data: { token }
        } = await userLogin(values)

        setToken(token)

        this.$toast.success('登录成功')
        this.$router.push('/')
      } catch (error) {}
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
