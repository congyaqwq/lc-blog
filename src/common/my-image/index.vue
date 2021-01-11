<template>
  <div class="img-container" :style="{width,height}">
    <img v-if="src" :src="src" alt />
    <span v-else>🈚️</span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    }
  }
};
</script>

<style lang="less" scoped>
.img-container {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>