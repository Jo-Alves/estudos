<template>
	<div class="content">
		<component :is="component"></component>
	<!-- <p>{{component}}</p> -->
	</div>
</template>

<script>
import About from './About'
import Portfolio from './Portfolio'
import Contact from "./Contact";
export default{
	props: ['component'],
	components:{
		About,
		Portfolio,
		Contact
	}
}
</script>

<style scoped>
.content{
	padding: 20px;
	font-size: 20px;
	text-align: justify;
	overflow-Y: auto;
	width: 100%;
	height: 100%;
}
</style>