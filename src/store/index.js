import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 引入 小仓库
import home from "./home";
import search from "./search";
// Store内部是构造函数必须new
export default new Vuex.Store({
  // 利用modules对外暴露
  modules: {
    home,
    search,
  },
});
