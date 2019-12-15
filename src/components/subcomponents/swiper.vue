<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in LunBoTuList" :key="item.id">
        <img :src="item.img" alt :class="{'full': isfull}"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["LunBoTuList", "isfull"]
};
</script>
<style scoped>
/* 轮播图 */
.mint-swipe {
  text-align: center;
  height: 200px;
}

.mint-swipe img {
  /* width: 100%; */
  height: 100%;
}

.full {
  width: 100%;
}
</style>