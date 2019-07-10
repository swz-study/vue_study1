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
* //2019/7/10
### 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则提醒用户不能为空
4. 通过vue-resource 发送一个请求，把评论内容提交给服务器
5. 当发表评论OK后，重新刷新列表，以查看最新得评论
+ 如果调用getComments方法重新刷新评论列表的话，可能只能得到最后一页得评论，前几页得评论获取不到
+ 换一种思路：当评论成功后，再客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的方法，追加到data中comments的开头；这样就能实现刷新评论列表的需求
    
 ### 改造图片分析按钮为路由的链接并显示对应的组件页面
 
 ### 绘制图片列表组件页面结构并美化样式
 1. 制作顶部的滑动条
 2. 底部  图片列表 
 
 ### 绘制顶部滑动条的坑：
 1. 需要借助于MUI中的tab-top-webview-main.html
 2. 需要把slider区域的mui-fullscreen类去掉
 3. 滑动条无法正常触动华东，通过检查官方文档，发现是JS组件，需要被初始化
   + 导入mui.js
   + 调用官方提供的方式去初始化
   ```
   mui('.mui-scroll-wrapper').scroll({
   	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
   });
   ```
 4. 我们在初始化滑动条的时候，导入到mui.js,但控制台报错：
> “TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
at Function.d.extend

+ 经过推测，可能是mui.js用到了'caller','callee', 和'arguements'东西，但是，webpack打包好的bundle.js中，默认是启用严格模式的，所以，这两者冲突
* 解决方案：1. 把mui.js中的非严格模式的代码改掉；2.把webpack打包时候把严格模式禁用掉

5. 刚进入图片分享页面时，滑动条无法正常工作，若初始化滑动条，必须等DOM元素加载完毕，所以，我们把初始化滑动条的代码，搬到mounted生命周期函数中；
6. 当滑动条调式ok后，发现，tabber无法正常工作，这时候，我们需要把每个tabbar按钮的样式中'mui-tab-item’重新改一下名字；
7. 获取所有分裂，并渲染分类列表

### 制作图片列表区域
1. 图片列表需要使用懒加载技术，使用Mint-UI提供的线程的组件`lazy load`
2. 根据`lazy load`的使用文档，尝试使用
3. 渲染图片列表数据

### 实现了 图片列表的 懒加载改造和样式美化

## 实现了点击图片 跳转到图片详情页面
1. 在改造li成router-link的时候，需要使用tag属性指定要渲染为哪种元素

## 实现详情页面的布局和美化，同时获得数据渲染页面

## 实现图片详情中的缩略图的功能
1. 使用插件vue-preview这个缩略图插件
2. 获取到所有的图片列表，然后是使用v-for指令渲染数据
3. img标签上的class不能去掉
4. 每个图片数据对象中，必须有w和h

## 绘制商品列表 页面基本结构并美化
## 尝试在手机上进行项目的预览和测试
1. 手机和电脑子在同一个局域网中，手机可以访问电脑的IP
2. 项目中package.json中在dev添加一个--host指令，把电脑wifi IP地址设置为--host
    + 运行ipconfig查看IP