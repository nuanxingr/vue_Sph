import { reqCategoryList } from "@/api";
const state = {
  categoryList: [],
};
const mutations = {
  // 第一个参数是state中的初始值，第二个是提交上来的数据
  CATEGORYLIST(state, categoryList) {
    // 存到state.categoryList中
    state.categoryList = categoryList;
  },
};
const actions = {
  // 组件通知的函数categoryList
  async categoryList({ commit }) {
    // 发送请求
    let result = await reqCategoryList();
    if (result.code === 200) {
      console.log(result);

      // commit是提交到mutations中
      // 第一个参数是起名字，第二个是提交的具体数据
      commit("CATEGORYLIST", result.data);
    }
  },
};
const getters = {};
export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
