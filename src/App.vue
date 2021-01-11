<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <base-header></base-header>
  <transition name="fade">
    <router-view class="main-content"></router-view>
  </transition>
  <!-- <base-footer></base-footer> -->
</template>

<script>
import BaseHeader from "./layouts/BaseHeader";
// import BaseFooter from "./layouts/BaseFooter";

export default {
  name: "App",
  components: {
    BaseHeader
    // BaseFooter
  },
  data() {
    return {};
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
    position: relative;
    padding: 30px 15%;
  }
}

// 切换动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
