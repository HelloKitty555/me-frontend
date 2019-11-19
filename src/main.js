import Vue from 'vue'
import App from './App.vue'
import './assets/style/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './assets/iconfont/iconfont.css'
import api from './network/api'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ElementUI)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
