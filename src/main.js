import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
// 引入vuex
import store from "@/store";
// 引入组件
import TypeNav from "@/components/TypeNav";
// 注册全局组件
// 第一个参数是组件名字
// 第二个是哪个组件
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
// import { reqCategoryList } from "@/api/index";
// reqCategoryList();
new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  store,
}).$mount("#app");
