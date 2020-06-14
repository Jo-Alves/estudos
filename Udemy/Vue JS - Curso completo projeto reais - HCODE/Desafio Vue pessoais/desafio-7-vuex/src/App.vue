<template>
  <div id="app">
    <Header />
    <Main/>
  </div>
</template>

<script>
 import Header from "./components/Header";
 import Main from "./components/Main";
export default {
  name: "App",
  components: {
     Header,
     Main
  }
};
</script>

<style>
#app {
	padding:0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
</style>
