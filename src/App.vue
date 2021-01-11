<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <base-header></base-header>
  <router-view class="main-content"></router-view>
  <base-footer></base-footer>
</template>

<script>
import BaseHeader from "./layouts/BaseHeader";
import BaseFooter from "./layouts/BaseFooter";

export default {
  name: "App",
  components: {
    BaseHeader,
    BaseFooter
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .main-content {
    padding: 30px 15%;
  }
}
</style>
