<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <base-header></base-header>
  <router-view></router-view>
  <base-footer></base-footer>
</template>

<script>
import BaseHeader from './layouts/BaseHeader';
import BaseFooter from './layouts/BaseFooter';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
