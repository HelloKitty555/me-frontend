import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 使用函数引入，可以对组件进行按需加载，提升首页加载性能
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index'),
      children: [
        {
          path: '',
          redirect: 'about'
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/index/subViews/blog/blog')
        },
        {
          path: 'photography',
          name: 'photography',
          component: () => import('../views/index/subViews/photography/photography')
        },
        {
          path: 'lifestyle',
          name: 'lifestyle',
          component: () => import('../views/index/subViews/lifestyle/lifestyle')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/index/subViews/introduction/introduction')
        }
      ]
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      component: () => import('../views/articleDetail/articleDetail')
    }
  ]
})