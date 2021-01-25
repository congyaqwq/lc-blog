<template>
  <ul class="container column-flex">
    <li v-for="it in data" :key="it.id" class="item" @click="$router.push({query:{id:it.id}, name:'blogDetail'})">
      <div class="title ellipsis">{{it.title}}</div>
      <div class="content">{{it.content}}</div>
      <div class="info flex">
        <div class="view-wrap middle-flex">
          <div class="icon">
            <img src="@/static/轮回眼.svg" alt />
          </div>
          <div class="view">{{it.views}}</div>
        </div>
        <div class="thumbs-wrap middle-flex">
          <div class="icon">
            <img src="@/static/点赞.svg" alt />
          </div>
          <div class="thumbs">{{it.thumbs}}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.container {
  .item {
    padding: 15px 20px;
    margin: 5px 0;
    background-color: #fff;
    transition: all 0.5s;
    color: #333;
    &:hover {
      box-shadow: 3px 3px 20px #ccc;
      color: #000;
    }
    .title {
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      word-break: break-all;
      overflow: hidden;
    }
  }
}

.info {
  margin-top: 8px;
  .view-wrap {
    margin-right: 15px;
  }
}

.icon {
  margin-right: 3px;
  width: 20px;
  height: 20px;
}
</style>