<template>
  <div id="app">
    <sui-segment basic>
      <router-view></router-view>
    </sui-segment>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .center-aligned {
    margin: auto;
  }

  .comment-textarea {
    max-height: 4em !important;
  }
</style>
