<template>
  <!-- <div>我是首页</div> -->
  <div>
    <!-- 引入全局组件 -->
    <TypeNav></TypeNav>
    <ListContainer />
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- 遍历数据进行动态渲染组件 -->
    <Floor v-for="(floor, index) in FloorList" :key="floor.id" :list="floor"></Floor>
    <!-- <Floor></Floor> -->
    <Brand></Brand>
  </div>
</template>                                                          


<script>
//  引入其他组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 派发vuex
    this.$store.dispatch("FloorList");
  },
  computed: {
    ...mapState({
      FloorList: (state) => {
        return state.home.FloorList;
      },
    }),
  },
};
</script>

<style>
</style>