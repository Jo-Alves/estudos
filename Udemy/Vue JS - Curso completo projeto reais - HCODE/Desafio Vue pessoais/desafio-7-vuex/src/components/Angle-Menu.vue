<template>
  <div @click="$emit('toggle-menu')">
	<i :class="iconClass" aria-hidden="true"></i>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {	 
 props:{
	iconClass: String
 }, 
  methods: mapMutations(['toggleMenu']) 
}
</script>

<style scoped>
div{
	border-right: 1px solid rgba(255, 255, 255, .2);
	height: 100%;
	width: 100px;
	position: relative;
	cursor: pointer;
}
i{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 25px !important;
}
</style>