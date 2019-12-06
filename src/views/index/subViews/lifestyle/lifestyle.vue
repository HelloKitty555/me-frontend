<template>
  <div class="container">
    <transition-group name="article-list"
                      tag="div">
      <div class="article-item"
           v-bind:key="item.id"
           v-for="item in articleList"
           @click="handleArticleClick(item.id)">
        <articleListItem :articleInfo="item"></articleListItem>
      </div>
    </transition-group>
 <div class="loadMore">
      <div class="box" @click="loadMore"><loadMore :hasMoreData="hasMoreData" :isFetching="isFetching"/></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.article-list-enter-active,
.article-list-leave-active {
  transition: all 0.8s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.article-list-enter,
.article-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.loadMore {
  text-align: center;
  .box {
    display: inline-block;
  }
}
</style>

<script>
import articleListItem from '../articleListItem/articleListItem'
import loadMore from '../../../../components/loadMore'
export default {
  data() {
    return {
       articleList: [],
      isFetching: false,
      limit: 20,
      hasMoreData: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
     // 初始化
    init() {
      this.listArticles({ start: 0, limit: this.limit, tabs: [3], desc: 'create_time' })
    },
       // 列出文章
    listArticles(options) {
      this.isFetching = true
      this.$api.listArticles(options).then((result) => {
        if (result.code === 'S_OK') {
          this.articleList = this.articleList.concat(result.data)
          this.hasMoreData = this.articleList.length < result.total
        }
      }, (error) => {
        console.log(error)
      }).finally(() => {
        this.isFetching = false
      })
    },
    // 加载更多
    loadMore() {
      this.hasMoreData && this.listArticles({ start: this.articleList.length, limit: this.limit, tabs: [3], desc: 'create_time' })
    },
    // 处理文章点击
    handleArticleClick(id) {
      this.$router.push({ name: 'articleDetail', params: { id: id } })
    }
  },
  components: {
    articleListItem,
    loadMore
  }
}
</script>