<template>
  <div>
    <h1 class="title">{{data.title}}</h1>
    <div class="info flex">
      <div class="view-wrap middle-flex">
        <div class="icon">
          <img src="@/static/轮回眼.svg" alt />
        </div>
        <div class="view">{{data.views}}</div>
      </div>
      <div class="thumbs-wrap middle-flex">
        <div class="icon">
          <img src="@/static/点赞.svg" alt />
        </div>
        <div class="thumbs">{{data.thumbs}}</div>
      </div>
    </div>
    <section class="content" v-html="data.content"></section>
  </div>
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

<style lang="less" scoped>
.info {
  margin-top: 30px;
  .view-wrap {
    margin-right: 15px;
  }
}
.content {
  display: block;
  margin-top: 30px;
}

.icon {
  margin-right: 3px;
  width: 20px;
  height: 20px;
}
</style>