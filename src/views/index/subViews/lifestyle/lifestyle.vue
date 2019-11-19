<template>
  <div class="blog-container">
    <transition-group name="article-list"
                      tag="div">
      <div class="article-item"
           v-bind:key="item.id"
           v-for="item in articleList"
           @click="handleArticleClick(item.id)">
        <articleListItem :articleInfo="item"></articleListItem>
      </div>
    </transition-group>
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
</style>

<script>
import articleListItem from '../articleListItem/articleListItem'
export default {
  data() {
    return {
      articleList: []
    }
  },
  mounted() {
    this.listArticles()
  },
  methods: {
    listArticles() {
      this.$api.listArticles({ tabs: ['3'], desc: 'create_time' }).then((result) => {
        if (result.code === 'S_OK') {
          this.articleList = result.data
        }
      }, (error) => {
        console.log(error)
      })
    },
    handleArticleClick(id) {
      this.$router.push({ name: 'articleDetail', params: { id: id } })
    }
  },
  components: {
    articleListItem
  }
}
</script>