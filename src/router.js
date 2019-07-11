import VueRouter from 'vue-router'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import NewsList from './components/news/NewList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home' },
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newsList',component:NewsList},
    {path:'/home/Newsinfo/:id',component:Newsinfo},
    {path:'/home/photolist',component:PhotoList},
    {path:'/home/PhotoInfo/:id',component:PhotoInfo},
    {path:'/home/goodslist',component:GoodsList},
    {path:'/home/goodsinfo/:id',component:GoodsInfo},
    { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的嘞，默认的类叫routerlink-active
})

// 把路由对象暴露出去
export default router