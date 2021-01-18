<template>
  <div>
    <search-filter></search-filter>
    <blog-list :data="data"></blog-list>
  </div>
</template>

<script>
import axios from "axios";
import BlogList from "./components/blog-list";
import SearchFilter from "./components/search-filter";
export default {
  components: {
    BlogList,
    SearchFilter
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await axios({
        url: "http://localhost:3000/blogs/list"
      });
      console.log(data, "Get it!");
      this.data = data;
    }
  }
};
</script>

<style>
</style>