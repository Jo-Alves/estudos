const pessoa = {
	nome: 'Valdirene Aparecida Ferreira',
	idade: 33,
	status: "namorando"
}

let {nome, status} = pessoa

function ShowPessoa({nome, idade}){
	console.log(nome)
	console.log(idade)
}

ShowPessoa(pessoa)

keysPessoa = Object.keys(pessoa)
console.log(keysPessoa)

valuesPessoa = Object.values(pessoa)
console.log(valuesPessoa)

persons = [
	{nome: "Joelmir Rogério Carvalho", idade: 30, status: "Namorando"},
	{nome: 'Valdirene Aparecida Ferreira', idade: 33, status: "namorando"}
]

console.log(persons)

persons.forEach(({nome, idade, status}, i) => {
	
	console.log(` - Nome: ${nome}\n - Idade: ${idade}\n - Status: ${status}'`)
})

for(key in pessoa){
	console.log(key)
}

for(keys of keysPessoa){
	console.log(pessoa[keys])
}


console.log(Object.keys(persons[1]))
console.log(Object.values(persons[1]))