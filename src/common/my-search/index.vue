<template>
  <div v-if="!isMobile()" class="search">
    <input :value="keyword" type="text" @input="changeText" @keyup.enter="$emit('search')" />
    <img class="icon" src="@/static/search.svg" alt />
    <div class="search-btn" @click="$emit('search')">搜索</div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ""
    }
  },
  emits: ["search", "update:keyword"],
  methods: {
    changeText(e) {
      const { value } = e.target;
      this.$emit("update:keyword", value);
    }
  }
};
</script>

<style lang="less">
.search {
  position: relative;
  margin-left: 20px;
  border-radius: 12px;
  overflow: hidden;
  input {
    height: 30px;
    width: 200px;
    border-radius: 12px;
    border: 1px solid #aaa;
    padding-left: 40px;
    box-sizing: border-box;
    &:focus {
      transition: all 0.2s;
      border: 1px solid #333;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 10px;
    width: 20px;
    height: 20px;
  }
  .search-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 0;
    width: 50px;
    height: 100%;
    text-align: center;
    line-height: 30px;
    // border-left: 1px solid #ccc;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
  }
}
</style>