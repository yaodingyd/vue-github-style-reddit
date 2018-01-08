<template>
  <div class="discussion-sidebar">
    <div id="partial-discussion-sidebar" class="js-socket-channel js-updatable-content">
      <div class="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item">
        <div class="select-menu js-menu-container js-select-menu">
          <button type="button" class="discussion-sidebar-heading discussion-sidebar-toggle js-menu-target" aria-label="Assign up to 10 people to this issue" aria-haspopup="true" aria-expanded="false" data-hotkey="a">
            <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
            Assignees
          </button>
          <span class="css-truncate">No one</span>
        </div>
      </div>
      <div class="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item">
        <div class="select-menu js-menu-container js-select-menu">
          <button type="button" class="discussion-sidebar-heading discussion-sidebar-toggle js-menu-target" aria-label="Assign up to 10 people to this issue" aria-haspopup="true" aria-expanded="false" data-hotkey="a">
            <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
            Labels
          </button>
          <span class="css-truncate">None yet</span>
        </div>
      </div>
      <div class="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item">
        <div class="select-menu js-menu-container js-select-menu">
          <button type="button" class="discussion-sidebar-heading discussion-sidebar-toggle js-menu-target" aria-label="Assign up to 10 people to this issue" aria-haspopup="true" aria-expanded="false" data-hotkey="a">
            <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
            Projects
          </button>
          <span class="css-truncate">None yet</span>
        </div>
      </div>
      <div class="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item">
        <div class="select-menu js-menu-container js-select-menu">
          <button type="button" class="discussion-sidebar-heading discussion-sidebar-toggle js-menu-target" aria-label="Assign up to 10 people to this issue" aria-haspopup="true" aria-expanded="false" data-hotkey="a">
            <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
            Milestone
          </button>
          <span class="css-truncate">None yet</span>
        </div>
      </div>
      <div class="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item">
        <div class="select-menu js-menu-container js-select-menu">
          <button type="button" class="discussion-sidebar-heading discussion-sidebar-toggle js-menu-target" aria-label="Assign up to 10 people to this issue" aria-haspopup="true" aria-expanded="false" data-hotkey="a"  @click="toggleNew">
            <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
            New
          </button>
        </div>
      </div>
      <div class="discussion-sidebar-item sidebar-assignee js-discussion-sidebar-item">
        <div class="select-menu js-menu-container js-select-menu">
          <button type="button" class="discussion-sidebar-heading discussion-sidebar-toggle js-menu-target" aria-label="Assign up to 10 people to this issue" aria-haspopup="true" aria-expanded="false" data-hotkey="a" @click="toggleHot">
            <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
            Hot
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNew () {
      this.$store.commit({
        type: 'update_filter',
        filter: 'new'
      })
      this.$store.dispatch('loadList')
      this.$store.dispatch('loadPost')
    },
    toggleHot () {
      this.$store.commit({
        type: 'update_filter',
        filter: 'hot'
      })
      this.$store.dispatch('loadList')
      this.$store.dispatch('loadPost')
    }
  }
}
</script>

