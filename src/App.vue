<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <base-header></base-header>

  <router-view class="main-content" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
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
.fade-enter-active {
  transition: opacity 0.3s ease 0.2s;
}
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
