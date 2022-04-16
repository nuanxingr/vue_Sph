// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers";
// 安装路由插件
Vue.use(VueRouter);

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
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 };
  },
});
