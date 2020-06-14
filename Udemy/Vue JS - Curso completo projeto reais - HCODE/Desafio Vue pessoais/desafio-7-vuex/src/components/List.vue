<template>
	<ul>
		<li><a href="#">Register</a></li>
		<li><a href="#">login</a></li>
	</ul>
</template>

<script>
export default{

}
</script>

<style scoped>
ul{
	list-style: none;
	display: flex;
	float: right;
}
ul li{
	margin-right: 20px;
}
ul li a{
	padding: 10px 25px;
	text-decoration: none;
}

ul li:last-child a{
	border: 1px solid #ccc;
	border-radius: 10px;
}
</style>