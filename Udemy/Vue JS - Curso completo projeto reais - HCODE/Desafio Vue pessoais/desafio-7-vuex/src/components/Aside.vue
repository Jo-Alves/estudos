<template>
  <aside :class="{ hiddleMenu: hiddleToggle }">
    <nav>
		<ul :class="{navMenu: hiddleToggle}">
			<li><a href="#">Home</a></li>
			<li><a href="#">Portfólio</a></li>
			<li><a href="#">Sobre</a></li>
			<li><a href="#">Contato</a></li>
		</ul>
	</nav>
  </aside>
</template>

<script>
export default {
	props:{
		hiddleToggle: Boolean
	}
}
</script>

<style>
.hiddleMenu{
	background-color: #29303b;
	width: 300px;
	height: 90vh;
	border-top: 1px solid rgba(255, 255, 255, .2);
	transition: .5s ease-in-out;
}
aside{
	overflow: hidden;
}
.navMenu{
	background-color: rgb(80, 80, 80);
	list-style: none;
	transition: .5s ease-in-out;
	text-align: center;
}
li{
	
}
a{
	text-decoration: none;
	text-transform: uppercase;
	display: block;	
	padding: 20px;
	transition: all .3s ease-in-out;
}
a:hover{
	background-color: rgba(41, 48, 59, .8);
}
</style>