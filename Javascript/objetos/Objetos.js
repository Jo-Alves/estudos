var usuario = {
	nome: "Joelmir Rogério",
	'ultimo-nome': 'Carvalho',
	idade: 30,
	youtube: 'Iniciando Carreira na programação'
}

console.log(usuario)
console.log('Nome: ' ,usuario.nome)
console.log('Sobrenome: ',usuario['ultimo-nome'])
console.log('Idade: ', usuario.idade)
console.log('Canal: ', usuario['youtube'])

usuario.ano = 2019

console.log(usuario)
console.log("Ano: ", usuario.ano)

delete usuario.ano // delete um atributo do objeto
console.log(usuario)

usuario.hobbies = ['Música', 'Programar', 'namorar'] // Adicionando array

console.log(usuario)
console.log(usuario.hobbies)

usuario.hobbies.forEach(e => {
	console.log(e)
})

usuario.habilidade = {
	linguagens: ['C#', 'JavaScript'],
	'instrumentos-musicais': ['Violão', 'Baixo', 'bateria']
} // Adicionando Objetos

console.log(usuario)

usuario.habilidade.linguagens.forEach(e => {
	console.log('linguagem: ', e)
})


var usuario2 = {
	saudacao: name => `Olá, ${name}`
} // Adicionando Function

console.log(usuario2)
console.log(usuario2.saudacao("Valdirene Aparecida Ferreira"))

let cor = 'vinho'
let usuario3 = {
	nome: "Valdirene Aparecida Ferreira",
	cor
}

console.log(usuario3)


let usuario4 = {
	nome: 'Ayton',
	idade: 30
}

let extraInfo = {
	pais: "Brasil",
	UF: 'Minas Gerais'
}

let novoUsuario = Object.assign({}, usuario4, extraInfo) 
/*
**  juntando conjuto de objetos
*/

console.log(novoUsuario)

let novoUsuario2 = {
	...usuario4,
	...extraInfo
}

console.log(novoUsuario2)

let nomeVariavel = 'estado'
let usuario5 = {
	nome: 'Joelmir',
	[nomeVariavel]: "Minas Gerais"
}

console.log(usuario5)