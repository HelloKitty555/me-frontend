<template>
  <div class="introduction-container">
    <transition name="content-animate"
                mode="out-in"
                appear
                appear-class="custom-appear-class"
                appear-to-class="custom-appear-to-class"
                appear-active-class="custom-appear-active-class">
      <div class="content">
        <div class="pc"
             v-if="false">
          <div class="profile">
            <div class="name">谢梓健（zijian xie）</div>
            <div class="info">广东财经大学</div>
            <div class="info">广州论客科技有限公司</div>
            <div class="info">前端开发工程师 摄影爱好者</div>
          </div>
          <div class="avatar"><img src="../../../../assets/img/个人博客头像.jpg"></div>
        </div>
        <div class="mobile"
             v-if="true">
          <div class="info">
            <div>"谢梓健"</div>
            <div>广东财经大学</div>
            <div>前端 摄影 音乐</div>
          </div>
          <div class="triangle"></div>
          <img class="avatar"
               src="../../../../assets/img/个人博客头像.jpg">
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.introduction-container {
  .content {
    .pc {
      display: flex;
      justify-content: center;
      .profile {
        z-index: 2;
        .name {
          font-size: 32px;
          letter-spacing: 3px;
          margin-top: 30px;
          margin-bottom: 30px;
        }
        .info {
          letter-spacing: 1px;
          font-size: 15px;
          padding-bottom: 20px;
        }
      }
      .avatar {
        margin-left: 60px;
        img {
          width: 350px;
        }
      }
    }
    .mobile {
      position: relative;
      .info {
        position: absolute;
        top: 18px;
        left: 10px;
        font-size: 18px;
        font-weight: bolder;
        font-style: italic;
      }
      .triangle {
        width: 0;
        height: 0;
        border-width: 16px;
        border-style: solid;
        border-color: #ffffff #ffffff transparent transparent;
        position: absolute;
        top:30px;
        right:0;
      }
      .avatar {
        width: 100%;
        margin-top: 30px;
      }
    }
  }
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
}
</style>

<script>
export default {
  name: 'introduction'
}
</script>