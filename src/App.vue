<template>
  <div id="app">
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
