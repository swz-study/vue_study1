<template xmlns="http://www.w3.org/1999/html">
    <div>
        <mt-swipe :auto="4000">
            <!--<mt-swipe-item>1</mt-swipe-item>-->
            <!--<mt-swipe-item>2</mt-swipe-item>-->
            <mt-swipe-item v-for="item in lunbotuList":key="item.id">
                <img :src="item.img " alt="">
            </mt-swipe-item>
        </mt-swipe>

    <!--九宫格到六宫格的改造-->
        <ul class="mui-table-view mui-grid-view mui-grid-9" >
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../image/menu1.png" alt="">
                    <div class="mui-media-body">新闻</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                <img src="../../image/menu2.png" alt=""><span class="mui-badge">5</span>
                <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                <img src="../../image/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                <img src="../../image/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                <img src="../../image/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                <img src="../../image/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
                </router-link></li>

        </ul>

    </div>
</template>

<script>

    import {Toast} from 'mint-ui'
    export default {
        data(){
            return{
                lunbotuList:[]
            };
        },
        created(){
            this.getLunbotu();
        },
        methods:{
            getLunbotu(){ //获取轮播图数据的方法
                this.$http.get('api/getlunbo').then(result=>{
                    // console.log(result.body);
                    if(result.body.status===0){
                        this.lunbotuList = result.body.message;
                    }else
                    {
                        Toast('加载轮播图失败');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item:nth-child(1){
        background-color: #d48933;

    }
    .mint-swipe-item:nth-child(2){
        background-color: #007aff;
    }
    .mint-swipe-item:nth-child(3){
        background-color: #0061ff;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;

        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0 ;
    }
</style>