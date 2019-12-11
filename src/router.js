import VueRouter from 'vue-router'
import HomeCompontent from './components/tabber/HomeComponent.vue';
import MemberCompontent from './components/tabber/MemberCompontent.vue';
import ShopcarComponent from './components/tabber/ShopcarComponent.vue';
import SearchCompontent from './components/tabber/SearchCompontent.vue';
var router = new VueRouter({
  routes: [
    {path: '/home', component: HomeCompontent},
    {path: '/member', component: MemberCompontent},
    {path: '/shopcar', component: ShopcarComponent},
    {path: '/search', component: SearchCompontent},
  ],
  //路由高亮
  linkActiveClass: 'mui-active'
})

export default router