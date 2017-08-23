//1.导入vue
import Vue from "vue";

//2.导入App.vue对象
import App from "./App.vue";

//3.导入mintui对象和样式
import mintUi from "mint-ui";
import "mint-ui/lib/style.css";

//4.配置让Vue使用mintUi
Vue.use(mintUi);

//5.导入mui的样式
import "../static/mui/css/mui.css";

//6.分别把Home.vue、Member.vue、Cart.vue、Search.vue导入
import Home from "./components/Home.vue";
import Member from "./components/Member.vue";
import Cart from "./components/Cart.vue";
import Search from "./components/Search.vue";

//7.导入vue-resource对象
import  VueResource from "vue-resource";

//8.使用vue-resource对象
Vue.use(VueResource);

//9.分别把NewsList.vue,PhotoList.vue,Video.vue,CallMe.vue,
//FeedBack.vue,GoodsList.vue导入
import NewsList from "./components/news/NewsList.vue";
import PhotoList from "./components/photo/PhotoList.vue";
import Video from "./components/video/Video.vue";
import CallMe from "./components/callme/CallMe.vue";
import FeedBack from "./components/feedback/FeedBack.vue";
import GoodsList from "./components/goods/GoodsList.vue";

//10.导入moment
import moment from "moment";

//11.配置NewsInfo.vue的路由规则
import NewsInfo from "./components/news/NewsInfo.vue";

//12.将common注入到Vue中
 import common from "../static/common.js";
 Vue.use(common);

//13.配置PhotoInfo.vue的路由规则
import PhotoInfo from "./components/photo/PhotoInfo.vue";

//(写在最后面)在main.js中使用site.css
import "../static/css/site.css";

//.使用vue-router(增加路由功能)
import VueRouter from "vue-router";
Vue.use(VueRouter);
var router = new VueRouter({
     linkActiveClass:"mui-active",
    routes:[
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/member",
            component: Member
        },
        {
            path: "/cart",
            component: Cart
        },
        {
            path: "/search",
            component: Search
        },
        {
            path:"/news/newlist",
            component:NewsList
        },
        {
            path:"/photo/photolist",
            component:PhotoList
        },
        {
            path:"/goods/goodslist",
            component:GoodsList
        },
        {
            path:"/feekback",
            component:FeedBack
        },
        {
            path:"/video",
            component:Video
        },
        {
            path:"/callme",
            component:CallMe
        },
        {
            path:"/news/newsinfo/:id",
            component:NewsInfo
        },
        {
            path:"/photo/photoinfo/:id",
            component:PhotoInfo
        }

    ]
});












//定义全局过滤器对事件进行格式化
Vue.filter("dateFmt",function(input,fmtString){
                return moment(input).format(fmtString);
            });

//在vue对象中渲染App
new Vue({
    el:"#app",
    router:router,
    render:function(create){
        return create(App);
    }
});


















