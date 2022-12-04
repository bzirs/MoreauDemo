<!--
 * @Author: bzirs
 * @Date: 2022-12-04 15:59:43
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-04 20:37:08
 * @FilePath: /interview/src/views/register.vue
 * @Description: register页面
 *
 * Copyright (c) 2022 by bzirs, All Rights Reserved.
-->
<template>
  <div class="register-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="面经注册" />
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
        <van-button square block type="primary" native-type="submit">注册</van-button>
      </div>
      <router-link to="/login" class="link">已有账号?点我登录捏</router-link>
    </van-form>
  </div>
</template>

<script>
import { userRegister } from '@/api/user'

export default {
  name: 'register-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        await userRegister(values)

        const toast = this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '注册成功,一秒后切换登录页'
        })

        let second = 1
        const timer = setInterval(() => {
          second--
          if (second) {
            toast.message = `倒计时 ${second} 秒`
          } else {
            clearInterval(timer)
            // 手动清除 Toast
            this.$toast.clear()
            this.$router.push('/login')
          }
        }, 1000)
      } catch (error) {
        console.log(error)
      }
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
