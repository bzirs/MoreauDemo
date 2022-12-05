<template>
  <div class="like-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="喜欢" fixed></van-nav-bar>
    <!-- cell列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-item
        v-for="it in list"
        :key="it.id"
        :item="it"
        @click.native="$router.push({ name: 'detail', params: { id: it.id } })"
      ></article-item>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
import { getCollctList } from '@/api/article'
export default {
  name: 'like-page',
  components: { ArticleItem },
  data () {
    return {
      // 创建请求参数对象
      reqObj: {
        optType: 1,
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
        this.list.push(...rows)
        this.reqObj.page++
        // 加载动画结束
        !rows.length && (this.finished = true)
        this.loading = false
      } catch (error) {}
    }
  }
}
</script>

<style lang="less" scoped>
.like-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
