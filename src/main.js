import Vue from 'vue'
import App from './App.vue'
import './assets/style/index.less'
import router from './router'
import './assets/iconfont/iconfont.css'
import api from './network/api'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$isMobile = window.matchMedia('(max-width: 800px)').matches
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
