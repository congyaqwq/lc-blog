
<template>
  <div ref="head" class="head middle-flex between-flex" :class="fixed?'fixed':''">
    <div class="left middle-flex">
      <div class="avatar">
        <my-image :src="require('@/static/youdoa.png')"></my-image>
      </div>
      <div class="column-flex">
        <div class="name bold">Name</div>
        <!-- Front End Engineer -->
        <div class="work">abc</div>
      </div>
    </div>
    <div v-if="!isMobile()" class="right">
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
    <div v-else class="mobile" @click="showMenu">
      <img src="@/static/功能.svg" />
    </div>
    <div v-if="visible" class="mobile-menu">
      <div class="bg" @click="visible=false"></div>
      <div class="menu">
        <router-link
          :to="{name: value}"
          v-for="(value,key) in navMap"
          :key="key"
          class="center-flex item"
          :class="$route.name===value?'active':''"
          @click="visible = false"
        >{{key}}</router-link>
      </div>
    </div>
    <!-- <div class="filter">
      <div class="icon">
        <img src="@/static/Filter.svg" alt />
      </div>
    </div>-->
  </div>
</template>

<script>
import { debounce } from "lodash";
import { navMap } from "@/constants/user";

export default {
  data() {
    return {
      navMap,
      fixed: false,
      visible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.debounceScroll);
  },
  methods: {
    onPageScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 200) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    debounceScroll() {
      const scroll = debounce(this.onPageScroll, 200);
      scroll();
    },
    showMenu() {
      this.visible = true;
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
        position: relative;
        width: 110px;
        padding: 35px 20px;
        line-height: 30px;
        cursor: pointer;
        transition: all 0.3s;
        box-sizing: border-box;
        &.active {
          font-weight: bold;
        }
        &:hover {
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

@media (max-width: 768px) {
  .head {
    padding: 0 5%;
    .mobile {
      img {
        width: 30px;
        height: 30px;
      }
    }
    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.49;
        transition: opacity 0.5s;
      }
      .menu {
        position: relative;
        padding-top: 10px;
        width: 60%;
        height: 100%;
        background-color: #fff;
        animation: leftToRight 0.3s linear;
        .item {
          padding: 20px;
          border-bottom: 2px solid #eee;
          &.active {
            font-weight: bold;
          }
        }
      }
    }
  }
}

@keyframes leftToRight {
  0% {
    width: 40%;
    opacity: 0.5;
  }
  100% {
    width: 60%;
    opacity: 1;
  }
}
</style>