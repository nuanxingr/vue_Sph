import { reqGetsearchList } from "@/api";
const state = {
  GetsearchList: {},
};
const mutations = {
  GETSEARCHLIST(state, GetsearchList) {
    state.GetsearchList = GetsearchList;
  },
};
const actions = {
  // 第二个参数是派发过来的参数（默认是一个空对象）
  async GetsearchList({ commit }, params = {}) {
    let result = await reqGetsearchList(params);
    // console.log(result);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
// 计算属性 可以简化数据的功能
const getters = {
  //取名叫goodsList里面的参数就是state的数据
  goodsList(state) {
    // 这里加一个 || 防止网络慢或者没有，导致服务器返回的空 。
    return state.GetsearchList.goodsList || [];
  },
  trademarkList(state) {
    return state.GetsearchList.trademarkList || [];
  },
  attrsList() {
    return state.GetsearchList.attrsList || [];
  },
};
export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
