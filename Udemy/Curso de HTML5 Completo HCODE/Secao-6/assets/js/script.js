(function(){
	function CalcularTabuada()
	{
		const tabuada = document.querySelector("#tabuada tbody");
		let valorA = parseInt(document.querySelector("#valor").value)
		tabuada.innerHTML = ""
		for(let valorB = 0; valorB <= 10; valorB++){
			let resultado = valorA * valorB
			let template = `
				<td>${valorA}</td>
				<td>*</td>
				<td>${valorB}</td>
				<td>=</td>
				<td>${resultado}</td>
		`;
		
		let tr = document.createElement("tr")
		
		tr. innerHTML = template
		
		tabuada.appendChild(tr)
		
		}
	}
	
	CalcularTabuada();
	
	document.querySelector("#valor").addEventListener("change", CalcularTabuada)
})()