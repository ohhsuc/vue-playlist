// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App'
import Home from '@/components/Home'
import List from '@/components/List'
import User from '@/components/User'
import Detail from '@/components/Detail'
import MyHome from '@/components/MyHome'
import UserList from '@/components/UserList'
import Index from '@/components/Index'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$ajax = axios

const router = new VueRouter({
  routes:[
    {
      path:"/",
      component:Home,
      children:[
        {path:"/",component:Index},
        {path:"/list",component:List},
        {path:"/user",component:User},
        {path:"/userlist",component:UserList},
      ]
    },{
      name:'detail',
      path:"/detail",
      component:Detail
    },{
      path:"/myhome",
      component:MyHome,
      beforeEnter:(to,from,next)=>{
        //console.log(from);
        //console.log(to);
        next(true);
      }
    }

  ],
  //mode:"history"
})

Vue.filter('reverse',function(value){   //自定义过滤器
  return value.split('').reverse().join('');
});

Vue.mixin({               //全局混入
  created:function(){
    //console.log('mixin方法已执行！')
  }
});

var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}
var users = {};
/* eslint-disable no-new */
new Vue({
  //mixins: [mixin],  混入
  el: '#app',
  router,
  axios,
  data:users,
  components: { App },
  template: '<App/>'
})
