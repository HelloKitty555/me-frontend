<template>
  <div class="articleListItem-container">
    <div class="title">{{articleInfo.title}}</div>
    <div class="summary">{{articleInfo.create_time}}</div>
  </div>
</template>

<script>
export default {
  props: {
   articleInfo: Object
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
  .articleListItem-container {
    padding-bottom: 35px;
    .title {
     font-size: 20px;
     margin-bottom: 10px;
    }
    .summary {
     font-size: 12px;
     color: #858585;
    }
  }
</style>