<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img1.360buyimg.com/imgb/s250x250_jfs/t1/34432/29/7582/73649/5cc7e1f0E36152eee/3092d011929ee449.jpg"
            alt="">
            <h1 class="title"> 数据线 </h1>
            <div class="info">
                <p class="price">
                    <span class="now">232</span>
                    <span class="old">500</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"
    }
</script>

<style lang="scss" scoped>
    .goods-list{
        dispaly:flex;
        flex-wrap:wrap;
        padding:8px;
        justify-content:space-between ;
        .goods-item{
            width: 49%;
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding:5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>