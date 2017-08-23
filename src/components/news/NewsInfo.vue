<template>
    <div class="templateDiv">
       <div class="title">
            <h3>{{info.title}}</h3>
            <p>{{info.add_time | dateFmt("YYYY-MM-dd HH:mm:ss")}} {{info.click}}次浏览</p>
        </div>
        <div class="content" v-html="info.content"></div>
        <comment :mynewsid="newsId"></comment>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
//导入子组件subcomponents
import Comment from "../../subcomponents/Comment.vue";
    export default{
      components:{
        comment:Comment        
        //前面是将要使用的标签名称,后面是组件对象
      },
        data:function(){
            return{
                info:{},
                newsId:""   //1.定义字段
            };
        },
        created:function(){
            var newsId = this.$route.params.id;
            this.newsId=newsId;   
             //2.对这个字段赋值
            console.log(newsId);
            var url = this.$urlPrefix + "/api/getnew/" + newsId;
            this.$http.get(url).then(function(response){
                var data=response.body;
                console.log(data);
                  if(data.status != 0){
                      //这里用了mint-ui的组件
                         //提示错误信息
                      Toast(data.message);
                      return;
                 }
                  //如果服务器返回的值正常的话,赋值给info
                     this.info=data.message[0];
            });
        }
    }
</script>
<style scoped>
    
</style>