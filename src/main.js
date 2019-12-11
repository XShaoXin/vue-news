// 项目的JS入口文件
//导入vue
import Vue from 'vue'
// 导入 vue-router 包,手动安装 VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入MUI
import  './lib/mui/css/mui.min.css'
//导入mintUI
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
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