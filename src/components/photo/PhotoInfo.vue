<template>
    <div class="templateDiv">
       <div class="title">
        <h4>{{photoinfo.title}}</h4>
        <p>{{photoinfo.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}  {{photoinfo.click}}次浏览</p>
        <p class="line"></p>
    </div>
    <p v-html="photoinfo.content"></p>
    <comment v-bind:imgid="id"></comment>
    </div>
    </div>
</template>
<script>
    import Comment from "../../subcomponents/Comment.vue";
    export default {
        data:function(){
            return {
                id:0,
                photoinfo:{}
            }
        },
        methods:{
            getinfo:function(){
                var url =this.$urlPrefix +'/api/getimageInfo/'+this.id;
                this.$http.get(url).then(function(response){
                    console.log(response.body);
                    this.photoinfo=response.body.message[0];
                });

            }
        },
        created:function(){
            this.id=this.$route.params.id;
            this.getinfo();
        },
        components:{
            comment:Comment
        }
    }
</script>
<style scoped>
    .title h4{
        color: #0094ff;
    }
    .title p{
        color:rgba(0,0,0,0.4);
        margin-top: 10px;
    }
    .title .line{
          width: 100%;
          height: 1px;
          border-bottom: 1px solid rgba(0,0,0,0.4);
    }
</style>
