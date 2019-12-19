import VueRouter from 'vue-router'
import HomeCompontent from './components/tabber/HomeComponent.vue'
import ShopcarComponent from './components/tabber/ShopcarComponent.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue';
import GoodsInfo from './components/goods/GoodsInfo.vue';
import GoodsDese from './components/goods/GoodsDese.vue';
import GoodsComment from './components/goods/GoodsComment.vue';
var router = new VueRouter({
  routes: [
    {path: '/', redirect:'/home'},
    {path: '/home', component: HomeCompontent},
    {path: '/shopcar', component: ShopcarComponent},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newslist/:id', component: NewsInfo },
    {path: '/home/photolist', component: PhotoList},
    {path: '/home/photoinfo/:id', component: PhotoInfo},
    {path: '/home/goodslist', component: GoodsList},
    {path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo'},
    {path: '/home/goodsdese/:id', component: GoodsDese, name: 'goodsdese'},
    {path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'}
  ],
  //路由高亮
  linkActiveClass: 'mui-active'
})

export default router