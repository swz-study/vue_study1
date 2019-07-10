//入口文件
import Vue from 'vue'
// 1.1 导入路由的包,安装路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入格式化时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
   return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//设置请求的路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
 //设置post时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;

//导入MUI的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//导入Mint-UI中的组件
// import {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

//导入app根组件
import app from './App.vue'
var vm = new Vue({
  el:'#app',
  render: c=>c(app),
  router //1.4挂载路由对象到VM实例上
})
