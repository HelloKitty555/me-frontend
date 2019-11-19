<template>
  <transition   name="content-animate"
                mode="out-in"
                appear
                appear-class="custom-appear-class"
                appear-to-class="custom-appear-to-class"
                appear-active-class="custom-appear-active-class"
                >
  <div class="articleDetail-container" v-if="!isFetching">
    <div class="articleDetail-header">
      <div class="title">{{articleInfo.title}}</div>
      <div class="summary">{{articleInfo.create_time}}</div>
    </div>
    <div class="articleDetail-content"
         v-html="articleInfo.content"></div>
    <div class="articleDetail-comment">
      <div class="create_comment">
        <div class="name"><input type="text"
                 v-model="comment.commenter_name"
                 placeholder="留言昵称"></div>
        <div class="content"><textarea name=""
                    @focus="handleTextareaFocus"
                    id=""
                    :rows="activeComment ? 6 : 1"
                    placeholder="我要留言"
                    v-model="comment.comment_content"></textarea></div>
        <div class="action"
             v-if="activeComment">
          <button @click="cancelComment"
                  class="cancel-button">取消</button>
          <button @click="createComment"
                  class="publish-button">发表</button>
        </div>
      </div>
      <div class="comment-title">全部评论（{{totalComments}}）：</div>
      <div class="comment-list">
        <transition-group name="comment-list"
                          tag="div">
          <commentItem v-for="item in commentList"
                       :comment="item"
                       v-bind:key="item.comment_id"></commentItem>
        </transition-group>
      </div>
    </div>
  </div>
  </transition>
</template>

<style lang="less" scoped>
 .custom-appear-class {
    transform: translateY(10px);
    opacity: 0;
  }
  .custom-appear-to-class {
    opacity: 1;
  }
  .custom-appear-active-class {
    transition: all 0.8s cubic-bezier(0.36, 0.66, 0.04, 1);
  }
  .content-animate-enter-active {
    transition: all 0.8s cubic-bezier(0.36, 0.66, 0.04, 1);
  }
  .content-animate-enter {
    transform: translateY(10px);
    opacity: 0;
  }
.articleDetail-container {
  .articleDetail-header {
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
  .articleDetail-content {
  }
  .articleDetail-content /deep/ img {
    max-width: 100%;
  }
  .articleDetail-comment {
    padding: 12px 0px;
    margin-top: 20px;
    margin-bottom: 100px;
    .comment-title {
      font-size: 16px;
      color: #858585;
      font-weight: bolder;
    }
    .comment-list {
      .comment-list-enter-active,
      .comment-list-leave-active {
        transition: all 0.8s cubic-bezier(0.36, 0.66, 0.04, 1);
      }
      .comment-list-enter, .comment-list-leave-to{
        opacity: 0;
        transform: translateY(30px);
      }
    }
    .create_comment {
      margin-bottom: 20px;
      margin-top: 80px;
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
          transition: all ease-in-out 220ms;
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
  }
}
</style>

<script>
import commentItem from './commentItem'
export default {
  name: 'articleDetail',
  data() {
    return {
      isFetching: true,
      activeComment: false,
      articleInfo: {},
      commentList: [],
      totalComments: 0,
      comment: {
        commenter_name: '',
        comment_content: '',
        article_id: ''
      },
      comment_list_transition_name : ''
    }
  },
  mounted() {
    this.getArticleInfo(this.$route.params.id)
  },
  methods: {
    getArticleInfo(id) {
      this.isFetching = true
      this.$api.getArticleInfo(id).then((data) => {
        if (data.code === 'S_OK') {
          this.articleInfo = data.data
          this.comment.article_id = data.data.id
          this.listComments()
        }
      }, (error) => {
        console.log(error)
      }).finally(() => {
        this.isFetching = false
      })
    },
    // 创建评论
    createComment() {
      this.$api.createComment(this.comment).then(() => {
        this.cancelComment()
        this.refreshComments()
      }, (error) => {
        console.log(error)
      })
    },
    // 取消评论
    cancelComment() {
      this.activeComment = false
      this.comment.comment_content = ''
      this.comment.commenter_name = ''
    },
    // 列出评论
    listComments() {
      this.$api.listComments({
        article_id: this.articleInfo.id,
      }).then((data) => {
        if (data.code === 'S_OK') {
          this.commentList = data.data
          this.totalComments = data.total
        }
      }, (error) => {
        console.log(error)
      }).finally(() => {
      })
    },
    // 刷新评论
    refreshComments() {
      this.listComments()
    },
    // textarea聚焦事件监听器
    handleTextareaFocus() {
      this.activeComment = true
    },
    // textarea失焦监听器
    handleTextareaBlur() {
      this.showFullTextarea = !this.showFullTextarea
    }
  },
  components: {
    commentItem
  }
}
</script>