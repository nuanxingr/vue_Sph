// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 安装路由插件
Vue.use(VueRouter);
// 引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      path: "/search/:keywod?",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "*",
      redirect: "/home", //重定向(注意重定向要写路径)
    },
  ],
});
