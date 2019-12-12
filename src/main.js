// 项目的JS入口文件

//导入vue
import Vue from 'vue'

// 导入 vue-router 包,手动安装 VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入MUI
import  './lib/mui/css/mui.min.css'

//导入mintUI
import { Header, Swipe, SwipeItem } from 'mint-ui'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入 app, router组件
import app from './App.vue'
import router from './router.js'

var vm = new Vue({
  el: '#app',
  data: {
  },
  render: c => c(app),
  router
})