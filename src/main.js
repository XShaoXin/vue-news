// 项目的JS入口文件

//导入vue
import Vue from 'vue'

// 导入 vue-router 包,手动安装 VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
//  全局启用emulateJSON 选项
Vue.http.options.emulateJSON = true

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//导入MUI
import './lib/mui/css/mui.min.css'

//导入mintUI
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 导入 app, router组件
import app from './App.vue'
import router from './router.js'

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router
})