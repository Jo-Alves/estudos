<template>
	<div>
		<h2>Contact</h2>
		<form>
			<div class="box">
				<input type="text" placeholder="Nome: Valdirene Aparecida Ferreira"/>
			</div>
			<div class="box">
				<input type="email" placeholder="Email: valdirene@example.com"/>
			</div>
			<div class="box">
				<input type="phone" placeholder="Fone: (30) 99999-9999"/>
			</div>
			<div class="box">
				<textarea placeholder="Digite a mensagem" rows="10"></textarea>
			</div>
		</form>
	</div>
</template>

<script>

</script>

<style scoped>
form{
	background-color: rgb(59,59,59);
	padding: 20px;
	border-radius: 10px;
}

h2{
	margin-bottom: 40px;
}

input, textarea{
	padding: 10px;
	width: 100%;	
	border: none;
	outline: none;
	background: none;
}

textarea{
	border: 2px solid white;
}

.box{
	border-bottom: 2px solid white;
	margin-bottom: 10px;
}

.box:last-child{
	border: none;
}
</style>