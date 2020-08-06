(function(){
	document.querySelector("#form-login").addEventListener("submit", e => {
		e.preventDefault();
		
		let email = document.querySelector("#email").value
		let password = document.querySelector("#password").value
		
		let json = {
				email,
				password
		}
		
		if(!json.email){
			alert("O campo email deve ser preenchido!")
			document.querySelector("#email").focus()
		}
		else if(!json.password){
			alert("O campo password deve ser preenchido!")
			document.querySelector("#password").focus()
		}
		else{
			alert("Dados validados com sucesso!")
		}
	})
})()