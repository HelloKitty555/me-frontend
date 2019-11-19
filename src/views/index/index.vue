<template>
  <div class="index-container">
    <div class="header-bar">
      <div class="contact">
        <!-- <contact></contact> -->
      </div>
      <div class="title">Chris Xie</div>
      <div class="line"></div>
      <div class="tabs">
        <span :class="currentPath === '/blog' ? 'tab active' : 'tab'" @click="handleTabClick('/blog')">
          见解
        </span>
        <span :class="currentPath === '/photography' ? 'tab active' : 'tab'" @click="handleTabClick('/photography')">
          摄影
        </span>
        <span :class="currentPath === '/lifestyle' ? 'tab active' : 'tab'" @click="handleTabClick('/lifestyle')">
          生活
        </span>
        <span :class="currentPath === '/about' ? 'tab active' : 'tab'" @click="handleTabClick('/about')">
          关于
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
      currentPath: '/blog'
    }
  },
  mounted() {
  },
  methods: {
    handleTabClick(path) {
      this.currentPath = path
      this.$router.push(path)
    }
  }
}
</script>
<style lang="less" scoped>
.index-container {
  width: '80%';
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
        font-size: 13px;
        letter-spacing: 2px;
        padding: 0 30px;
        color: rgba(#858585, 0.7);
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
  }
}
</style>