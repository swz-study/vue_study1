# 这是一个初始学习项目

## 用传统方式重新上传
1、git add .
2、git commit -m  "new"
3、git push
4、new

## 制作首页App组件
  1、完成Header区域，使用的是Mint-UI的Header组件
  2、制作底部的Tabber区域,使用的是MUI的Tabbar.html
  + 在制作购物车小图标的时候，操作会相对多一些；
  + 先把扩展图标的css样式，拷贝到项目中去
  + 拷贝扩展字体库 ttf文件到项目中
  * 为购物车小图标，添加如下样式：
  `mui-icon mui-icon-extra mui-icon-extra-cart`
  3、要在中介区域放置一个router-view来展示路由匹配到的组件
                                  
### 改造tabbar为router-link
### 设置路由高亮
### 点击tabber中的路由链接，展示对应的路由组件
### 制作首页轮播图布局
### 加载首页轮播图数据
1、使用vue-resource获取数据
2、使用vue-resource的this.$http.get获取数据
3、获取到的数据，要保存到daya 身上
4、用v-for循环
