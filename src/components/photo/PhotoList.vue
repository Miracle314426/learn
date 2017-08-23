<template>
    <div class="templateDiv">
      <div class="category">
        <ul v-bind="{style:'width:'+ulWidth+'px'}">
            <li>全部</li>
            <li v-for="item in categories">{{item.title}}</li>
        </ul>
      </div>
      <div class="imglist">
        <ul>
            <li v-for="item in picList">
                <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                    <img v-lazy="tempurl">
                    <div class="desc">
                        <h5 v-text="item.title"></h5>
                        <p v-text="item.zhaiyao"></p>
                    </div>
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
            return {
               categories:[],
               ulWidth:0,     //定义ulWidth
               picList:[],
                tempurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503257839589&di=2c41f519b7a4cb04483e9e6f0df864b6&imgtype=0&src=http%3A%2F%2Fimg2.cache.netease.com%2Fphoto%2F0026%2F2017-04-10%2FCHML2S0K78LH0026.jpg"       
            }
        },
        methods:{
            getCategory:function(){
                var url=this.$urlPrefix + '/api/getimgcategory';
                this.$http.get(url).then(function(response){
                    var data = response.body;
                    if(data.status != 0){ 
                        //这里用了mint-ui的组件
                        //提示错误信息
                       Toast(data.message);
                        return;
                    }
                    //如果服务器返回的值正常的话,赋值给categories
                    
                    this.categories=data.message;
                    var w=62;
                    var count=response.body.message.length+1;
                    this.ulWidth=w*count;
                });
            },
            getPicList:function(categoryId){
                var  url =this.$urlPrefix+'/api/getimages/'+categoryId;
                this.$http.get(url).then(function(response){
                    console.log(response.body);
                    this.picList=response.body.message;
                });
            }
        },

        created:function(){ 
            this.getCategory();
            this.getPicList(0);
        }
    }

</script>
<style scoped>
    .category{
        width: 100%;
        overflow: auto;
    }
    .category ul{
        margin: 0px;
        padding-left: 10px;
        list-style: none;
    }
    .category li{
        cursor: pointer;
        color:#0094ff;
        display: inline-block;
        font-size: 14px;
        padding-left: 6px;
    
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
   }
</style>