
<template>
  <div ref="head" class="head middle-flex between-flex" :class="fixed?'fixed':''">
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
    <div class="filter">
      <div class="icon">
        <img src="@/static/Filter.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { navMap } from "@/constants/user";

export default {
  data() {
    return {
      navMap,
      fixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.debounceScroll);
  },
  methods: {
    onPageScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 200) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    debounceScroll() {
      const scroll = debounce(this.onPageScroll, 300);
      scroll();
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  position: relative;
  top: 0;
  padding: 0 10%;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  &.fixed {
    animation: fadeInDown 0.5s linear;
    position: fixed;
    top: 0;
    z-index: 10;
  }
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
  .filter {
    position: absolute;
    bottom: -10px;
    right: 15%;
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>