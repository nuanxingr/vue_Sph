// 引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
// 配置路由
export default [
  {
    path: "/detail/:skuid?",
    component: Detail,
    meta: { show: true },
  },
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
]