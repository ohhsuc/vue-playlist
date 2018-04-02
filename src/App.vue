<template>
  <div id="app">
    <h3>{{title|reverse}}</h3>
    <span v-text="subtitle"></span>
    <span v-if="seen">运营状态</span>
    <span v-else>非运营状态</span>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title: 'SPA Title',  //应用名称
      subtitle: 'subtitle...',
      seen: true
    }
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
