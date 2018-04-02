<template>
    <div>
      <button @click="ret">返回上一页</button>
      <h2>文章ID：{{$route.params.id}}</h2>
      <div>这里是Vuex的状态对象：{{count}}</div>
    </div>
</template>

<script>
  import store from '@/vuex/store'
  import { mapState } from 'vuex'

    export default {
      name: "detail",
      methods:{
          ret(){
            this.$router.go(-1);
          }
      },
      computed:{
        ...mapState(['count'])
      },
      store
    }
</script>

<style scoped>

</style>
