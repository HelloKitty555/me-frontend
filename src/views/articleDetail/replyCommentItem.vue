<template>
  <div class="commentitem-container">
    <div class="commentitem-name">
      <span>{{replyComment.replyCommenter_name}}</span>
      <span v-if="replyComment.isAuthor" class="author">(作者)</span>
    </div>
    <div class="commentitem-content">
       {{replyComment.replyComment_content}}
    </div>
    <div class="commentitem-action">
      <span class="expand"></span>
      <div class="buttons">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.commentitem-container {
  padding: 10px 0;
  .commentitem-name {
    font-size: 16px;
    margin-bottom: 2px;
    color: #858585;
    .author {
      text-decoration: underline;
    }
  }
  .commentitem-content {
    font-size: 14px;
    margin-bottom: 2px;
  }
  .commentitem-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .expand {
      font-size: 12px;
    }
    .buttons {
      button {
        border: none;
        background: none;
        padding: 0 5px;
      }
      .iconfont {
        font-size: 16px;
        color: #858585;
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    replyComment: Object
  },
  mounted() {
  },
}
</script>