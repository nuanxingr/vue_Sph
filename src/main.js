import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
// 引入vuex
import store from "@/store";

// 引入组件
import TypeNav from "@/components/TypeNav";
// 轮播图
import carouses from "@/components/carouses";
// 分页器
import Pagination from "@/components/Pagination";
// 引入mock数据
import "@/mock/mockServe";
// 引入swiper全局样式
import "swiper/css/swiper.css";
// 注册全局组件
// 第一个参数是组件名字
// 第二个是哪个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(carouses.name, carouses);
Vue.component(Pagination.name, Pagination);
Vue.config.productionTip = false;
// import { reqCategoryList } from "@/api/index";
// reqCategoryList();
new Vue({
  render: (h) => h(App),
  // 注册全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 注册路由
  router,
  store,
}).$mount("#app");
