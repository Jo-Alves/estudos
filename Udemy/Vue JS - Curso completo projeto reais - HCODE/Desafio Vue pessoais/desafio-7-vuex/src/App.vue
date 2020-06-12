<template>
  <div id="app">
    <Header />
    <Aside :hiddle-toggle="isMenuVisible" />
  </div>
</template>

<script>
 import Header from "./components/Header";
 import Aside from "./components/Aside";
 import  { mapState } from 'vuex';
export default {
  name: "App",
  components: {
     Header,
     Aside
  },
  computed:mapState(['isMenuVisible'])
};
</script>

<style>
#app {
}
</style>
