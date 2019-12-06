<template>
  <div class="container">
    <div class="box">{{isFetching ? '加载中...' : (hasMoreData ? '加载更多' : '没有更多了')}}</div>
  </div>
</template>

<style lang="less">
  .container {
    .box {
      display: inline-block;
      width:200px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: rgba(#858585,0.4);
      font-weight: bolder;
    }
  }
</style>

<script>
export default {
  props: {
   hasMoreData: Boolean,
   isFetching: Boolean
  },
  data() {
    return {
    }
  }
}
</script>