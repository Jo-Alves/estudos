decisao = true

while (decisao) {
  tabuada = parseFloat(prompt("Digite o valor para a tabuada"))

  numParada = parseFloat(prompt("Digite o numero de parada da tabuada"))

  for (contador = 0; contador <= numParada; contador++) {
    console.log(`${tabuada} * ${contador} = ${tabuada * contador}`)
  }
  pergunta = prompt("Deseja continuar? S | N")
  decisao = pergunta === "S" || pergunta === "s" ? true : false
}
