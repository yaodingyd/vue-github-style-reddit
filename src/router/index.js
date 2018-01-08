import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/containers/Post'
import List from '@/containers/List'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/r/:subreddit?/:filter?',
      redirect: '/list'
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/r/:subreddit/comments/:id/:title?',
      redirect: '/issue'
    },
    {
      path: '/issue',
      component: Post
    }
  ]
})
