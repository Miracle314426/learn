<template>
    <div class="templateDiv">
       <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList">
                <router-link v-bind="{to:'/news/newsinfo/' + item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <p>
                            <span>{{item.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span class="click-number">点击数{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
    export default{
        data:function(){
            return {
                newsList:[]
            };
        },
        methods:{
            getNewsList:function(){
               var url = this.$urlPrefix + "/api/getnewslist";
                this.$http.get(url).then(function(response){
                var data=response.body;
                if(data.status != 0){
                     //这里用了mint-ui的组件
                        //提示错误信息
                     Toast(data.message);
                     return;
                }
                 //如果服务器返回的值正常的话,赋值给slideList
                    this.newsList=data.message;
                });

            }
        },
        created:function(){
            this.getNewsList();
        }
    }
</script>
<style scoped>
    .mui-table-view .mui-media-object{
        width: 80px;
        height: 80px;
        max-width: 80px;
        line-height: 80px;
    } 
    .ft{
        font-size: 12px;
        margin-top: 1em;
        color:#0094ff;
    }
    .click-number{
        margin-left: 10px;
    }
  
</style>