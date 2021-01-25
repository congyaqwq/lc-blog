<template>
  <div>
    <search-filter></search-filter>
    <blog-list :data="list"></blog-list>
    <!-- <div class="add-icon" @click="$router.push({name:'blogDetail'})">
      <img src="@/static/add.svg" alt />
    </div>-->
  </div>
</template>

<script>
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
    return {
      list
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.add-icon {
  position: fixed;
  bottom: 100px;
  right: 100px;
  padding: 10px;
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  cursor: pointer;
}
</style>