<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <base-header @fixed="onFixed" @cancel="onCancel"></base-header>
  <router-view
    class="main-content"
    v-slot="{ Component }"
    :class="isFixed ? 'fixed' : ''"
    :style="{
      top: `-${top - (fixed ? 0 : 100)}px`,
      paddingTop: isMobile() ? '130px' : '30px',
    }"
  >
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <base-footer></base-footer>
</template>

<script>
import BaseHeader from "./layouts/BaseHeader";
import { ref } from "vue";
import BaseFooter from "./layouts/BaseFooter";

export default {
  name: "App",
  components: {
    BaseHeader,
    BaseFooter,
  },
  setup() {
    const isFixed = ref(false);
    const fixed = ref(false);
    const top = ref(0);

    window.addEventListener("scroll", onPageScroll);
    function onPageScroll() {
      if (isFixed.value) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      top.value = scrollTop;
    }
    return {
      isFixed,
      top,
      fixed,
    };
  },
  data() {
    return {};
  },
  methods: {
    onCancel() {
      this.isFixed = false;
      this.fixed = false;
      this.$nextTick(() => {
        window.scrollTo({ top: this.top });
      });
    },
    onFixed(fixed) {
      this.isFixed = true;
      this.fixed = fixed;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .main-content {
    padding: 30px 10%;
    width: 100%;
    min-height: calc(100vh - 160px);
    box-sizing: border-box;
    &.fixed {
      position: fixed;
    }
  }
}

@media (max-width: 768px) {
  #app {
    .main-content {
      min-height: calc(100vh - 60px);
    }
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
