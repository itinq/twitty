<template>
  <div id="app">
    <top-menu></top-menu>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import TopMenu from './components/TopMenu'

export default {
  name: 'app',
  components: {
    Hello,
    TopMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
