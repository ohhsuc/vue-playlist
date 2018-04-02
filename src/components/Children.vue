<template>
  <div>
    <h3>我是子组件 父组件传过来的值为：{{parent}}</h3>
    slot：<slot></slot>
    <input type="button" v-on:click="ckbt" value="向父组件传值">
  </div>
</template>

<script>
    export default {
        name: "children",
        props: ['parent'],
        data(){
          return {
            datamsg:'我只是一个消息 啦啦'
          }
        },
        methods:{
          ckbt(){
            this.$emit('myevent',{mydata:this.datamsg});
          }
        }
    }
</script>

<style scoped>

</style>
