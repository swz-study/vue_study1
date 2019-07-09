# 这是一个初始学习项目

## 用传统方式重新上传
1. git add .
2. git commit -m  "new"
3. git push
4. new

## 制作首页App组件
  1. 完成Header区域，使用的是Mint-UI的Header组件
  2. 制作底部的Tabber区域,使用的是MUI的Tabbar.html
  + 在制作购物车小图标的时候，操作会相对多一些；
  + 先把扩展图标的css样式，拷贝到项目中去
  + 拷贝扩展字体库 ttf文件到项目中
  * 为购物车小图标，添加如下样式：
  `mui-icon mui-icon-extra mui-icon-extra-cart`
  3. 要在中介区域放置一个router-view来展示路由匹配到的组件
                                  
### 改造tabbar为router-link
### 设置路由高亮
### 点击tabber中的路由链接，展示对应的路由组件
### 制作首页轮播图布局
### 加载首页轮播图数据
1. 使用vue-resource获取数据
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据，要保存到daya 身上
4. 用v-for循环

### 改造 新闻资讯  路由链接
### 新闻资讯页面制作
1. 绘制界面，使用media-list来执行
2. 使用vue-resource 展示数据
3. 渲染真实数据

### 实现新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为router-link,同时，在跳转的时候应该提供唯一的ID标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和详情渲染
### 单独封装一个comment.vue评论子组件
1. 创建一个单独的comment.vue组件模板
2. 在需要使用comment组件的页面中，先手动导入comment组件+’import comment from './comment.vue'
3. 在父组件中，使用'components'属性，将刚才导入comment组件，注册为自己的子组件
4. 将注册子组件时候的，注册名称，以 标签形式，在页面中，引用即可

### 获取所有评论数据显示到页面中
### 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2. 点击加载更多，让 pageIndex++ , 然后重新调用 this.getComments() 方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让 老数据 调用 数组的 concat 方法，拼接上新数组
