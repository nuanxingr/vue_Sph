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

// 问题一（编程式导航路由传参连续点击报错）重写路由的实例

// 先保存一份
let originPush = VueRouter.prototype.push;
let orisinReplace = VueRouter.prototype.replace;
// 第一个参数是原来的push的路径地址，
// 第三个是成功的回调
// 第四个是失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    //这里的this是VueRouter()上的push方法
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    //这里的this是VueRouter()上的push方法
    orisinReplace.call(this, location, resolve, reject);
  } else {
    orisinReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

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
      meta: { show: true }, //路由元信息
      name: "search",
    },
    {
      path: "*",
      redirect: "/home", //重定向(注意重定向要写路径)
    },
  ],
});
