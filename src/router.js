import VueRouter from 'vue-router'
import HomeCompontent from './components/tabber/HomeComponent.vue'
import MemberCompontent from './components/tabber/MemberCompontent.vue'
import ShopcarComponent from './components/tabber/ShopcarComponent.vue'
import SearchCompontent from './components/tabber/SearchCompontent.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
var router = new VueRouter({
  routes: [
    {path: '/', redirect:'/home'},
    {path: '/home', component: HomeCompontent},
    {path: '/member', component: MemberCompontent},
    {path: '/shopcar', component: ShopcarComponent},
    {path: '/search', component: SearchCompontent},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newslist/:id', component: NewsInfo },
    {path: '/home/photolist', component: PhotoList}
  ],
  //路由高亮
  linkActiveClass: 'mui-active'
})

export default router