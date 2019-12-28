<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item, i) in goodslist" :key="i">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" />
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品
              <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件， 总价
              <span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span>
            </p>
          </div>
          <mt-button type="danger" @click="payment">去结算</mt-button>
        </div>
      </div>
    </div>

    <p></p>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import numbox from "../subcomponents/shopcar_numbox.vue";
import { format } from "path";

export default {
  data() {
    return {
      goodslist: [] // 购物车中所有商品的数据
    };
  },
  created() {
    this.getGoodsList();
  },
  updated(){
    console.log(111);
  },
  methods: {
    getGoodsList() {
      // 1. 获取到 store 中所有的商品的Id
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口
      if (idArr.length <= 0) {
        return;
      }
      // 获取购物车商品列表
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
            this.goodslist.forEach((item, i) => {
              item.selected = JSON.parse(localStorage.getItem("car"))[
                i
              ].selected;
            });
          }
        });
    },
    remove(id, index) {
      // 点击删除，把商品从 store 中根据 传递的 Id 删除，同时，把 当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFormCar", id);
    },
    selectedChanged(id, val) {
      // 每当点击开关，把最新的 快关状态，同步到 store 中
      // console.log(id + " --- " + val);
      this.goodslist.some(item => {
        if (item.id == id) {
          item.selected = val;
          return true;
        }
      });
      this.$store.commit("updateGoodsSelected", { id, selected: val });
    },
    payment() {
      //结算
      // console.log("click payment");
      if (this.goodslist.length == 0) {
        Toast("购物车没有商品");
        return;
      }
      this.$store.commit("payment");
      this.goodslist = this.goodslist.filter(item => !item.selected)
      Toast("付款成功");
    }
  },
  components: {
    numbox
  }
};
</script>

<style scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
}

.shopcar-container .goods-list .mui-card-content-inner {
  display: flex;
  align-items: center;
}
.shopcar-container .goods-list img {
  width: 60px;
}
.shopcar-container .goods-list h1 {
  font-size: 13px;
  margin-bottom: 10px;
}
.shopcar-container .goods-list .info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shopcar-container .goods-list .info .price {
  color: red;
  font-weight: bold;
}
.shopcar-container .jiesuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shopcar-container .jiesuan .red {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
</style>
