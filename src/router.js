import VueRouter from 'vue-router'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import NewsList from './components/news/NewList.vue'
import Newsinfo from './components/news/Newsinfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home' },
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newsList',component:NewsList},
    {path:'/home/Newsinfo/:id',component:Newsinfo}
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的嘞，默认的类叫routerlink-active
})

// 把路由对象暴露出去
export default router