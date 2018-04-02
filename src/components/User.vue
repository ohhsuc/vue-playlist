<template>
    <div>
      <h3>个人中心</h3>
      <span>用户名：</span>
      <input type="text" v-model="username" /><br>
      <span> 密码：</span>
      <input type="password" v-model="password" /><br>
      <p>确认您的输入：</p>
      <span>{{username}}---{{password}}</span><br/>
      {{handelname}}
      <br><br>
      <h3>我是父组件 子组件传过来的值为 : {{childrendata}}</h3>
      <children :parent="username" @myevent="showChildrenData" >固有内容</children>
      <input type="submit" @click.prevent="onSubmit" value="登录" />
    </div>
</template>

<script>
  import Children from '@/components/Children'

    export default {
        name: "user",
        components:{
          Children
        },
        data() {
          return {
            username:'',
            password:'',
            childrendata:''
          }
        },
        methods:{
          onSubmit(){
            alert('点击了登录按钮！');
            this.$router.push('/myhome')
          },
          showChildrenData(data){
            this.childrendata = data.mydata
          }
        },
        computed:{
          handelname(){
            return '计算属性：' + this.username + '用户'
          }
        }
    }
</script>

<style scoped>

</style>
