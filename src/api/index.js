// 统一管理axios

import requests from "./request";

// 三级联动接口
export const reqCategoryList = () => {
  // 发请求
  return requests({ url: "/product/getBaseCategoryList", method: "get" });
};
