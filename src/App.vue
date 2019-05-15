<template>
  <div id="app">
    <JSConsole/>
  </div>
</template>

<script>
import JSConsole from './components/JSConsole.vue'

export default {
  name: 'app',
  components: {
    JSConsole
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
