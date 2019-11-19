import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import blog from '../views/index/subViews/blog/blog.vue'
import introduction from '../views/index/subViews/introduction/introduction.vue'
import photography from '../views/index/subViews/photography/photography.vue'
import lifestyle from '../views/index/subViews/lifestyle/lifestyle.vue'
import articleDetail from '../views/index/subViews/articleDetail/articleDetail.vue'
// import about from '../views/index/subViews/about/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          name: 'introduction',
          component: introduction
        },
        {
          path: 'blog',
          name: 'blog',
          component: blog
        },
        {
          path: 'photography',
          name: 'photography',
          component: photography
        },
        {
          path: 'lifestyle',
          name: 'lifestyle',
          component: lifestyle
        },
        {
          path: 'about',
          name: 'about',
          component: introduction
        },
        {
          path: 'articleDetail/:id',
          name: 'articleDetail',
          component: articleDetail
        }
      ]
    }
  ]
})