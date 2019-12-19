<template>
  <div>
    <!-- 轮播图 -->
    <swiper :LunBoTuList="LunBoTuList" :isfull="true"></swiper>
    <!-- 6宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponents/swiper.vue";
export default {
  data() {
    return {
      LunBoTuList: []
    };
  },
  created() {
    this.getLunBoTu();
  },
  methods: {
    getLunBoTu() {
      this.$http
        .get("api/getlunbo")
        .then(result => {
          // console.log(result.body);
          if (result.body.status == 0) {
            this.LunBoTuList = result.body.message;
            // Toast('成功')
          } else {
            Toast("获取轮播图失败");
          }
        });

      // this.axios
      //   .get("/api/getlunbo")
      //   .then(response => {
      //     // console.log(response);
      //     // Toast('成功')        
      //     this.LunBoTuList = response.data.message;
      //     }
      //   )
      //   .catch(() =>{
      //     Toast("获取轮播图失败");
      //   })
    }
  },
  components: {
    swiper
  }
};
</script>
<style  scoped>
/* 6宫格 */
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-media-body {
  font-size: 13px;
}
.mui-grid-view.mui-grid-9 img {
  width: 60px;
  height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>