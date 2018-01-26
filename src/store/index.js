import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const UPDATE_SUBREDDIT = 'update_subreddit'
const UPDATE_POST = 'update_post'
const UPDATE_FILTER = 'update_filter'
const UPDATE_AFTER = 'update_after'
const UPDATE_PAGE = 'update_page'
const GET_LIST_DATA = 'get_list_data'
const GET_POST_DATA = 'get_post_data'
const GET_COMMENTS_DATA = 'get_comments_data'
const UPDATE_LOADING = 'update_loading'

const redditUrl = 'https://www.reddit.com/r'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    subreddit: 'all',
    post: '',
    filter: 'hot',
    listData: [],
    postData: {},
    commentsData: [],
    after: '',
    page: 25,
    loading: false
  },
  getters: {
    subreddit: state => () => state.subreddit,
    post: state => () => state.post,
    filter: state => () => state.filter
  },
  mutations: {
    [UPDATE_SUBREDDIT] (state, payload) {
      state.subreddit = payload.subreddit
      state.listData = []
    },
    [UPDATE_POST] (state, payload) {
      state.post = payload.post
    },
    [UPDATE_FILTER] (state, payload) {
      state.filter = payload.filter
    },
    [UPDATE_AFTER] (state, payload) {
      state.after = payload.after
    },
    [UPDATE_PAGE] (state) {
      state.page += 25
    },
    [GET_LIST_DATA] (state, payload) {
      state.listData = payload.data
    },
    [GET_POST_DATA] (state, payload) {
      state.postData = payload.data
    },
    [GET_COMMENTS_DATA] (state, payload) {
      state.commentsData = payload.data
    },
    [UPDATE_LOADING] (state, payload) {
      state.loading = payload.loading
    }
  },
  actions: {
    loadList ({commit, state}) {
      commit({
        type: UPDATE_LOADING,
        loading: true
      })
      fetch(`${redditUrl}/${state.subreddit}/${state.filter}.json`)
        .then(r => r.json())
        .then((j) => {
          commit({
            type: GET_LIST_DATA,
            data: [...j.data.children]
          })
          commit({
            type: UPDATE_AFTER,
            after: j.data.after
          })
          commit({
            type: UPDATE_LOADING,
            loading: false
          })
        })
    },
    loadNext ({commit, state}) {
      const queryString = `count=${state.page}&after=${state.after}`
      fetch(`${redditUrl}/${state.subreddit}/${state.filter}.json?${queryString}`)
        .then(r => r.json())
        .then((j) => {
          commit({
            type: GET_LIST_DATA,
            data: [...state.listData, ...j.data.children]
          })
          commit({
            type: UPDATE_AFTER,
            after: j.data.after
          })
          commit({
            type: UPDATE_PAGE
          })
        })
    },
    loadPost ({commit, state}) {
      commit({
        type: UPDATE_LOADING,
        loading: true
      })
      fetch(`${redditUrl}/${state.subreddit}/${state.post}.json`)
        .then(r => r.json())
        .then((j) => {
          commit({
            type: GET_POST_DATA,
            data: j[0].data.children[0].data
          })
          commit({
            type: GET_COMMENTS_DATA,
            data: j[1].data.children
          })
          commit({
            type: UPDATE_LOADING,
            loading: false
          })
        })
    }
  }
})
