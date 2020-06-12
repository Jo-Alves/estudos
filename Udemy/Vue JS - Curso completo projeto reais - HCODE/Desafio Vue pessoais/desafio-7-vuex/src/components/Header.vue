<template>
  <header>
    <AngleMenu :icon-class="iconClass" @toggle-menu="toggleMenu"/>
	<List />
  </header>
</template>

<script>

import AngleMenu from "./Angle-Menu";
import List from "./List"
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: "Header",
  components: {
    AngleMenu,
	List
  },
  computed:{
	...mapGetters({
		iconClass: 'getClassIcon'
	})	
  },
  methods:{
	...mapMutations(['toggleMenu'])
  }
};
</script>

<style scoped>
header{
	background-color: #29303b;
	height: 10vh;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>