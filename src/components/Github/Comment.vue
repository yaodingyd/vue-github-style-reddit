<template>
  <div class="timeline-comment-wrapper">
    <div class="avatar-parent-child timeline-comment-avatar">
      <a href="*">
        <img alt="@yaodingyd" class="avatar rounded-1" height="44" :src="avatar" width="44">
      </a>
    </div>

    <div class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists current-user">
      <div class="timeline-comment-header">
        <div class="timeline-comment-actions">
          <span class="reaction-popover-container dropdown js-socket-channel js-updatable-content js-reaction-popover-container js-comment-header-reaction-button js-menu-container">
            <button type="button" class="btn-link timeline-comment-action tooltipped tooltipped-n js-menu-target" aria-label="Add your reaction" aria-expanded="false" aria-haspopup="true">
              <svg aria-hidden="true" class="octicon octicon-plus-small add-reaction-plus-icon" height="16" version="1.1" viewBox="0 0 7 16" width="7"><path fill-rule="evenodd" d="M4 7V4H3v3H0v1h3v3h1V8h3V7H4z"></path></svg>
              <svg aria-hidden="true" class="octicon octicon-smiley" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
            </button>
          </span>
          <button type="button" class="btn-link timeline-comment-action js-comment-edit-button tooltipped tooltipped-nw" aria-label="Edit comment">
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>

        </div>

        <h3 class="timeline-comment-header-text f5 text-normal">
          <strong><a href="*" class="author">{{author}} </a></strong>
          <span v-if="!mute">commented </span>
          <a href="*" class="timestamp" v-if="!mute">{{time}}</a>
        </h3>
      </div>

      <div class="edit-comment-hide">
        <table class="d-block">
          <tbody class="d-block">
            <tr class="d-block">
              <td class="d-block comment-body markdown-body  js-comment-body">
                  <p><slot></slot></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    author: {
      default: 'Original Post'
    },
    timestamp: '',
    mute: {
      default: false
    }
  },
  computed: {
    avatar: function () {
      let rand = Math.floor(Math.random() * 10000000)
      return `https://avatars1.githubusercontent.com/u/${rand}?v=4&amp;s=88`
    },
    time: function () {
      return moment(this.timestamp * 1000).fromNow()
    }
  }
}
</script>


