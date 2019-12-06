<template>
  <div class="index-container">
    <div class="header-bar">
      <div class="contact">
        <!-- <contact></contact> -->
      </div>
      <div class="title">“梓健的个人网站”</div>
      <div class="line"></div>
      <div class="tabs">
        <span :class="activeTab === '/about' ? 'tab active' : 'tab'"
              @click="handleTabClick('/about')">
          个人
        </span>
        <span :class="activeTab === '/blog' ? 'tab active' : 'tab'"
              @click="handleTabClick('/blog')">
          见解
        </span>
        <span :class="activeTab === '/photography' ? 'tab active' : 'tab'"
              @click="handleTabClick('/photography')">
          摄影
        </span>
        <span :class="activeTab === '/lifestyle' ? 'tab active' : 'tab'"
              @click="handleTabClick('/lifestyle')">
          生活
        </span>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      activeTab: '/about'
    }
  },
  mounted() {
  },
  methods: {
    handleTabClick(path) {
      if (this.$route.path !== path) {
        this.activeTab = path
        this.$router.push(path)
      }
    }
  }
}
</script>
<style lang="less" scoped>
@media screen and (min-width: 800px) {
  .index-container {
    width: "80%";
    .header-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      .contact {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .title {
        font-size: 36px;
        letter-spacing: 10px;
        padding-top: 60px;
        padding-bottom: 40px;
        font-weight: bolder;
      }
      .line {
        width: 70%;
        border-bottom: 1px solid rgba(#858585, 0.3);
      }
      .tabs {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        .tab {
          font-size: 20px;
          letter-spacing: 2px;
          padding: 0 30px;
          color: rgba(#858585, 0.7);
          transition: all cubic-bezier(0.36, 0.66, 0.04, 1) 500ms;
          font-weight: bolder;
          a {
            text-decoration: none;
          }
        }
        .active {
          color: #000000;
        }
      }
    }
    .content {
      width: 60%;
      max-width: 800px;
      margin: 0 auto;
      padding-top: 60px;
      padding-bottom: 60px;
      overflow: hidden;
    }
  }
}
@media screen and (max-width: 800px) {
  .index-container {
    padding: 0 20px;
  .header-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    .contact {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .title {
      font-size: 28px;
      letter-spacing: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: bolder;
    }
    .line {
      width: 100%;
      border-bottom: 1px solid rgba(#858585, 0.3);
    }
    .tabs {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .tab {
        font-size: 16px;
        letter-spacing: 2px;
        padding: 0 20px;
        color: rgba(#858585, 0.7);
        transition:  all cubic-bezier(0.36, 0.66, 0.04, 1) 500ms;
        font-weight: bolder;
        a {
          text-decoration: none;
        }
      }
      .active {
        color: #000000;
      }
    }
  }
  .content {
    padding: 30px 0;
    overflow: hidden;
  }
}
}
</style>