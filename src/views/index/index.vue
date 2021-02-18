<template>
  <div>
    <search-filter></search-filter>
    <!--  @change="fetchData({page: 1},true)" -->
    <blog-list :data="list"></blog-list>
    <div v-if="!hasMore" class="bottom">暂时没有更多啦～</div>
    <div :class="(top > 500&&!isMobile())?'':'hidden'" class="top-icon" @click="toTop">
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
    return {};
  },
  setup() {
    const { list, payload, fetchData, hasMore } = useBlog();
    const top = ref(0);
    function onPageScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const getWindowHeight = document.documentElement.clientHeight;
      const getDocumentTop = document.documentElement.offsetHeight;
      top.value = scrollTop;
      // 到底部了
      if (scrollTop + getWindowHeight >= getDocumentTop) {
        if (!hasMore.value) return;
        fetchData({ ...payload, page: payload.page + 1 });
      }
    }
    window.addEventListener("scroll", onPageScroll);
    return {
      hasMore,
      list,
      top,
      payload,
      fetchData
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
  transition: opacity 0.5s;
  opacity: 1;
  &.hidden {
    opacity: 0;
  }
}
.bottom {
  padding: 30px 0;
  text-align: center;
}
</style>