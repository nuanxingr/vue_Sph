// 对axios进行二次封装
import axios from "axios";
// 引入进度条插件
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// console.log(nprogress);

// 利用axios的一个方法create,去创建一个axios的实例；
// request就是axios，只是稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径。发送请求时路径会出现api
  baseURL: "/api",
  // 请求时间
  timeout: 5000,
});
// 请求拦截器：发送请求前可以提前做一些事情
requests.interceptors.request.use((config) => {
  // config是一个配置对象，里面有一个属性很重要 headers请求头
  nprogress.start(); //进度条开始
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 成功的回调函数 响应回来的数据，响应器检测到最一些事情
    nprogress.done(); //进度条结束
    return res.data;
  },
  (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error("faile"));
  }
);
// 对外暴露
export default requests;
