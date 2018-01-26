<template lang="html">
  <section>
    <!--<h1> {{name}} [{{filter}}]</h1>-->

    <p v-if="!data.length">Loading...</p>

    <div class="issues-listing">
      <div class="subnav">
          <a href="https://github.com/yaodingyd/vue-github-style-reddit" class="btn btn-primary float-right" role="button" data-hotkey="c">
            New issue
          </a>

          <div class="float-left subnav-spacer-right" role="search">
            <div class="float-left select-menu js-menu-container js-select-menu subnav-search-context">
              <button class="btn js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
                Filter
              </button>
            </div>
            <form class="subnav-search float-left">
              <input aria-label="Search all issues" class="form-control form-control subnav-search-input input-contrast" v-model="search">
              <svg aria-hidden="true" class="octicon octicon-search subnav-search-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
            </form>
          </div>

          <div class="subnav-links float-left" role="navigation">
            <button class="js-selected-navigation-item subnav-item" :class="{selected: filter === 'hot'}" @click="updateFilter({filter: 'hot'})">Hot</button>
            <button class="js-selected-navigation-item subnav-item"  :class="{selected: filter === 'new'}" @click="updateFilter({filter: 'new'})">New</button>
          </div>
      </div>

      <div class="table-list-header">
        <div class="table-list-filters">
          <div class="table-list-header-toggle states float-left pl-3">
              <a href="/yaodingyd/vue-github-style-reddit/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aopen" class="btn-link selected">
                <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                {{data.length}} Open
              </a>

              <a href="/yaodingyd/vue-github-style-reddit/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed" class="btn-link ">
                <svg aria-hidden="true" class="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                0 Closed
              </a>
          </div>
          <div class="table-list-header-toggle float-right">
            <div class="float-left select-menu js-menu-container js-select-menu js-load-contents" data-contents-url="/yaodingyd/vue-github-style-reddit/issues/show_menu_content?partial=issues%2Ffilters%2Fauthors_content&amp;q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">
              <button class="btn-link select-menu-button js-menu-target" type="button" @click="updateSubreddit({subreddit: 'dota2'})">
                dota2
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="border-right border-bottom border-left">
        <ul class="js-navigation-container js-active-navigation-container">
          <li class="Box-row Box-row--focus-gray p-0 js-navigation-item js-issue-row selectable read nav-focus" v-for="entry in filtered" :key="entry.id">
            <div class="d-table table-fixed width-full Box-row--drag-hide position-relative">
              <div class="float-left pt-2 pl-3">
                <span class="tooltipped tooltipped-n" aria-label="Open issue">
                  <svg aria-hidden="true" class="octicon octicon-issue-opened open" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                </span>
              </div>
              <div class="float-left col-9 p-2 lh-condensed">
                <router-link :to="'/issue/' + entry.data.id" class="link-gray-dark no-underline h4 js-navigation-open">
                  {{entry.data.title}}
                </router-link>
                <span class="labels">
                  <button @click="updateSubreddit({subreddit: entry.data.subreddit})" class="label v-align-text-top labelstyle-cc317c linked-labelstyle-cc317c" :style="{background: convert(entry.data.subreddit)}">{{entry.data.subreddit}}</button>
                </span>
                <div class="mt-1 text-small text-gray">
                  <span class="opened-by">
                    #{{entry.id}} opened by {{entry.data.author}}
                  </span>
                  <span class="issue-meta-section css-truncate issue-milestone ml-2"></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="paginate-container">
        <div class="pagination">
          <button class="previous_page disabled">Previous</button>
          <button class="next_page">Next</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import stringToColor from 'string-to-color'

export default {
  props: ['data', 'filter', 'name', 'updateFilter', 'updateSubreddit', 'updatePost'],
  methods: {
    convert: function (string) {
      return '#' + stringToColor.generate(string)
    }
  },
  data: function () {
    return {
      search: ''
    }
  },
  computed: {
    filtered: function () {
      if (!this.search || !Array.isArray(this.data)) {
        return this.data
      }
      return this.data.filter((entry) => {
        const title = entry.data.title
        const author = entry.data.author
        return title.includes(this.search) || author.includes(this.search)
      })
    }
  }
}
</script>

<style lang="css">
  .nav-focus:hover {
    background-color: #f6f8fa;
  }
</style>
