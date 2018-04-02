<template>
  <div>
    <h3>文章列表</h3>
    <ul>
      <li v-for="item in PageList" :key="item.id"><router-link :to="{name:'detail',params:{id:item.id}}">{{item.text}}</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "list",
        data(){
          return {
            PageList:[
              {id:1,text:'文章1'},
              {id:2,text:'文章2'},
              {id:3,text:'文章3'},
              {id:4,text:'文章4'},
              {id:5,text:'文章5'},
              {id:6,text:'文章6'},
            ]
          }
        }
    }
</script>

<style scoped>

</style>
