<template>
    <div>
      <h1>Home</h1>
      <div class="page">
      <router-view></router-view>
      </div>
      <div class="bottom">
      <router-link to="/">首页</router-link> |
      <router-link to="/list">文章</router-link> |
      <router-link to="/userlist">用户列表</router-link> |
      <router-link to="/user">个人中心</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
.bottom{
  margin-bottom:0px;
  height:100%;
  width:100%;
  background:skyblue;
}
.page{
    height:100%;
    background:pink;
}
</style>
