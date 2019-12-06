<template>
  <div class="commentitem-container">
    <div class="commentitem-name">
      {{comment.commenter_name}}
    </div>
    <div class="commentitem-content">
      {{comment.comment_content}}
    </div>
    <div class="commentitem-action">
      <span class="expand" @click="handleExpandClick">查看回复</span>
      <div class="buttons">
        <!-- <button><i class="iconfont iconlike"></i></button> -->
        <button @click="handleReplyClick"><i class="iconfont iconreply"></i></button>
      </div>
    </div>
    <div class="create_reply"
         v-if="reply">
      <div class="name"><input type="text"
               v-model="replyComment.replyCommenter_name"
               placeholder="回复者"></div>
      <div class="content"><textarea name=""
                  id=""
                  rows="6"
                  placeholder="回复内容..."
                  v-model="replyComment.replyComment_content"></textarea></div>
      <div class="action">
        <button @click="cancelComment" class="cancel-button">取消</button>
        <button @click="createReplyComment" class="publish-button">发表</button>
      </div>
    </div>
    <div class="reply-comment-list" v-if="showReplyCommentList">
      <div v-for="item in replyCommentList"
           :key="item.replyComment_id">
        <replyCommentItem :replyComment="item"></replyCommentItem>
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
      color: #858585;
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
  .create_reply {
    margin-top: 12px;
    .name {
      margin-bottom: 8px;
      input {
        border: none;
        background: rgba(#858585, 0.15);
        height: 35px;
        width: 200px;
        padding: 0 12px;
        line-height: 35px;
        &::-webkit-input-placeholder {
          color: #858585;
        }
      }
    }
    .content {
      margin-bottom: 8px;
      textarea {
        border: none;
        background: rgba(#858585, 0.15);
        resize: none;
        display: block;
        width: 100%;
        padding: 12px 12px;
        &::-webkit-input-placeholder {
          color: #858585;
        }
      }
    }
    .action {
      text-align: right;
     .cancel-button {
          display: inline-block;
          background: #ffffff;
          border: none;
          height: 35px;
          width: 60px;
          margin-right: 20px;
        }
        .publish-button {
          display: inline-block;
          background: rgba(#858585, 0.15);
          border: none;
          height: 35px;
          width: 60px;
        }
    }
  }
  .reply-comment-list {
    padding-left: 25px;
  }
}
</style>

<script>
import replyCommentItem from './replyCommentItem.vue'
export default {
  props: {
    comment: Object,
  },
  data() {
    return {
      reply: false,
      replyComment: {
        replyCommenter_name: '',
        replyCommenter_content: '',
        comment_id: this.comment.comment_id,
        article_id: this.comment.article_id
      },
      showReplyCommentList: false,
      replyCommentList: []
    }
  },
  mounted() {
  },
  methods: {
    // 处理回复点击
    handleReplyClick() {
      this.reply = !this.reply
    },
    // 展示回复
    handleExpandClick() {
      this.listReplyComments()
      this.showReplyCommentList = !this.showReplyCommentList
    },
    // 创建回复
    createReplyComment() {
      this.$api.createReplyComment(this.replyComment).then((data) => {
        if (data.code === 'S_OK') {
          this.refreshReplyComments()
        }
      }, error => {
        console.log(error)
      })
    },
    // 取消回复
    cancelComment() {
      this.reply = false
      this.replyComment.replyCommenter_name = ''
      this.replyComment.replyComment_content = ''
    },
    // 刷新回复
    refreshReplyComments() {
      this.listReplyComments()
    },
    // 列出回复
    listReplyComments() {
      this.$api.listReplyComments({
        comment_id: this.comment.comment_id
      }).then((data) => {
        if (data.code === 'S_OK') {
          this.replyCommentList = data.data
        }
      })
    }
  },
  components: {
    replyCommentItem
  }
}
</script>