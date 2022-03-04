// 统一管理axios

import requests from "./request";
import mock from "./mockAjax";

// 三级联动接口
export const reqCategoryList = () => {
  // 发请求
  return requests({ url: "/product/getBaseCategoryList", method: "get" });
};
// mock模拟数据接口
export const reqBannerList = () => {
  return mock({ url: "/banner", method: "get" });
};
export const reqFloorList = () => {
  return mock({ url: "/floor", method: "get" });
};
// search模块请求地址
export const reqGetsearchList = (params) => {
  return requests({ url: "/list", method: "post", data: params });
};
