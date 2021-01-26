<template>
  <div>
    <search-filter></search-filter>
    <blog-list :data="list"></blog-list>
    <div v-if="top > 500" class="top-icon" @click="toTop">
      <img src="@/static/top.svg" alt />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import useBlog from "@/composables/useBlog";
import BlogList from "./components/blog-list";
import SearchFilter from "./components/search-filter";

export default {
  components: {
    BlogList,
    SearchFilter
  },
  data() {
    return {
      payload: {
        page: 1,
        per_page: 12
      }
    };
  },
  setup() {
    const { list } = useBlog();
    const top = ref(0);
    function onPageScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      top.value = scrollTop;
    }
    window.addEventListener("scroll", onPageScroll);
    return {
      list,
      top
    };
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="less" scoped>
.top-icon {
  position: fixed;
  bottom: 100px;
  right: 100px;
  padding: 10px;
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  cursor: pointer;
  animation: fade 0.5s;
}
</style>