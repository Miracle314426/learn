<template>
    <div class="templateDiv">
    <!-- 轮播图 -->
       <mt-swipe :auto="4000">
       <mt-swipe-item v-for="item in list">
           <img v-bind:src="item.img" alt="">
       </mt-swipe-item>
       </mt-swipe>
    <!-- 九宫格 -->
       <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newlist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feekback">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/video">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
               </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/callme">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul> 
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
    export default{
        data:function(){
            return{
                list :[]
            }
        },
        created:function(){
            this.getSlideList();
        },
        methods:{
            getSlideList:function(){
               var url = this.$urlPrefix + "/api/getlunbo";
                this.$http.get(url).then(function(response){
                    var data = response.body;
                    if(data.status != 0){
                        //这里用了mint-ui的组件
                        //提示错误信息
                       Toast(data.message);
                        return;
                    }
                    //如果服务器返回的值正常的话,赋值给slideList
                    this.list=data.message;
                });
            }
        }  
    }
</script>
<style scoped>
/* 默认情况下,mt-swipe是没有高度的, 所以要加高度*/
   .mint-swipe{
        width: 100%;
        height: 300px;
        background-color: pink;
    }
    .mint-swipe img{
        width: 100%;
        height: 100%;
   }
   .mui-grid-view.mui-grid-9{
        background-color: white;
        border: 0px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0px;
    }
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before,
    .mui-icon-home:before{
        content: "";
        width: 40px;
        height: 40px;
        display: block;
        background-size: 40px 40px;
    }
    .mui-icon-home:before{
        background-image: url("../../static/imgs/1.png");
    }
    .mui-icon-email:before{
        background-image: url("../../static/imgs/2.png");
    }
    .mui-icon-chatbubble:before{
        background-image: url("../../static/imgs/3.png");
    }
    .mui-icon-location:before{
        background-image: url("../../static/imgs/4.png");
    }
    .mui-icon-search:before{
        background-image: url("../../static/imgs/5.png");
    }
    .mui-icon-phone:before{
        background-image: url("../../static/imgs/6.png");
    } 
</style>