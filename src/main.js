//入口文件
import Vue from 'vue'
// 1.1 导入路由的包,安装路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//导入MUI的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//导入Mint-UI中的组件
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'

//导入app根组件
import app from './App.vue'
var vm = new Vue({
  el:'#app',
  render: c=>c(app),
  router //1.4挂载路由对象到VM实例上
})
