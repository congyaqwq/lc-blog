<template>
  <div>
    <search-filter></search-filter>
    <blog-list></blog-list>
  </div>
</template>

<script>
import BlogList from "./components/blog-list";
import SearchFilter from "./components/search-filter";
export default {
  components: {
    BlogList,
    SearchFilter
  }
};
</script>

<style>
</style>