// 项目的JS入口文件

//导入vue
import Vue from 'vue'

// 导入 vue-router 包,手动安装 VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vuex
import Vuex from 'vuex';
Vue.use(Vuex)

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
//  全局启用emulateJSON 选项
Vue.http.options.emulateJSON = true

// 导入格式化时间的插件
import moment from 'moment'

//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入mintUI
//按需导入
import {Header, Swipe, SwipeItem, Button, Lazyload, Switch} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);
//全部导入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//导入VuePreview图片阅览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入 app, router组件
import app from './App.vue'
import router from './router.js'

// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

var car = JSON.parse(localStorage.getItem('car') || '[]')
//注册vuex
const store = new Vuex.Store({
  state:{
    car: car,// { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
  },
  mutations:{
    addToCar(state, goodsinfo){
      //把商品信息，保存到 store 中的 car 上
      var flag = false
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车中商品的数量值
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar(state, id) {
      // 根据Id，从store 中的购物车中删除对应的那条商品数据
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true;
        }
      })
      // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 把最新的 所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      // 得到商品总数量
      var c = 0
      state.car.forEach(item => {
        c +=item.count
      })
      return c
    },
    getGoodsCount(state) {
      //得到商品数量{id: count}
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      //得到商品是否被选中
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      // 计算总价和数目
      var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router,
  store
})