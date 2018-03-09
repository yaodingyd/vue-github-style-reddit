import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/containers/Post'
import List from '@/containers/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/list/:subreddit',
      component: List
    },
    {
      path: '/list/:subreddit/:page',
      component: List
    },
    {
      path: '/issue/:id/',
      component: Post
    }
  ]
})
