<template>
  <div>detail</div>
</template>

<script>
import * as Api from "@/api/blog";

export default {
  data() {
    const { id } = this.$route.query;
    return {
      id,
      data: {}
    };
  },
  mounted() {
    this.id && this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await Api.detail(this.id);
      this.data = data;
    }
  }
};
</script>

<style>
</style>