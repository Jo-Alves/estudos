<template>
  <aside :class="{ hiddleMenu: hiddleToggle }">
    <nav>
		<ul :class="{navMenu: hiddleToggle}" v-for="infoLink in infoLinks" :key="infoLink">
			<li><a href="#" :class="{link: hiddleToggle}" @click.prevent="$emit('link-event', infoLink)">{{ infoLink }}</a></li>
		</ul>
	</nav>
  </aside>
</template>

<script>
export default {
	props:{
		hiddleToggle: Boolean
	},
	data(){
		return{
			infoLinks:['About', 'Portfolio' , 'Contact']
		}
	}
}
</script>

<style scoped>
.hiddleMenu{
	background-color: #29303b;
	width: 300px;
	height: 90vh;
	border-top: 1px solid rgba(255, 255, 255, .2);
	transition: .5s ease-in-out;
}
.navMenu{
	background-color: rgb(80, 80, 80);
	list-style: none;
	transition: .5s ease-in-out;
	text-align: center;	
	overflow: hidden;
}
a{
	display: none;
}
.link{
	text-decoration: none;
	text-transform: uppercase;
	display: block;
	padding: 20px;
	transition: all .3s ease-in-out;
}
.link:hover{
	background-color: rgba(41, 48, 59, .8);
}

</style>