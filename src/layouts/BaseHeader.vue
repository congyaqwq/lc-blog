
<template>
  <div class="head middle-flex between-flex">
    <div class="left middle-flex">
      <div class="avatar">
        <my-image src></my-image>
      </div>
      <div class="column-flex">
        <div class="name bold">Name</div>
        <!-- Front End Engineer -->
        <div class="work">abc</div>
      </div>
    </div>
    <div class="right">
      <div class="nav-bar middle-flex">
        <router-link
          :to="{name: value}"
          v-for="(value,key) in navMap"
          :key="key"
          class="center-flex item"
          :class="$route.name===value?'active':''"
        >{{key}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { navMap } from "@/constants/user";

export default {
  data() {
    return {
      navMap
    };
  }
};
</script>

<style lang="less" scoped>
.head {
  padding: 0 10%;
  width: 100%;
  height: 100px;
  color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  .left {
    .avatar {
      margin-right: 10px;
    }
    .name {
      margin-bottom: 3px;
      font-size: 20px;
    }
  }
  .right {
    .nav-bar {
      height: 100%;
      .item {
        padding: 35px 20px;
        line-height: 30px;
        cursor: pointer;
        transition: all 0.3s;
        &.active {
          font-weight: bold;
        }
        &:hover {
          background-color: rgba(0, 204, 255, 0.5);
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>