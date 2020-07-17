const pessoa = [{
    id: 1,
    nome: "Joelmir Rogério Carvalho",
    logradouro: "Antônio Jorge  750",
    cidade: 'Felício dos Santos',
    estado: "Minas Gerais",
    pais: "Brasil"
},
{
    id: 2,
    nome: "Valdirene Aparecida Ferreira",
    logradouro: "Bela Vista  124",
    cidade: 'Felício dos Santos',
    estado: "Minas Gerais",
    pais: "Brasil"
},
{
    id: 3,
    nome: "Alexina Rosa",
    logradouro: "Bela Vista  124",
    cidade: 'Felício dos Santos',
    estado: "Minas Gerais",
    pais: "Brasil"
},
{
    id: 4,
    nome: "Valdirene Aparecida Ferreira",
    logradouro: "Campos das Flores  7",
    cidade: 'Itamarandiba',
    estado: "Minas Gerais",
    pais: "Brasil"
}]

let p1 = pessoa.find(p => p.nome == "Valdirene Aparecida Ferreira")
console.log('Com método find: ', p1)

let p2 = pessoa.filter(p => p.nome == 'Valdirene Aparecida Ferreira')
console.log("Com método Filter:", p2)