<template>
  <div>
    <PageHeader />
    <TopNav />
    <IssueHeader />
    <div class="container">
      <div class="discussion-timeline">
        <slot></slot>
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import TopNav from './TopNav'
import IssueHeader from './IssueHeader'
import Sidebar from './Sidebar'

export default {
  name: 'github-header',
  components: {
    PageHeader,
    TopNav,
    IssueHeader,
    Sidebar
  }
}
</script>

